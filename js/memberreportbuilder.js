/* exported MemberReportBuilder */

var PLAYERS_URL = 'https://www.planetside2.com/players/#!/';

function MemberReportBuilder(element, skills, items) {
	var heading = element.find('h2'),
		infoList = element.find('#member-details'),
		tree = element.find('#member-tree'),
		rules = new Qualifications(skills, items),
		itemDatabase = new ItemLoader(items);

	// public methods

	this.renderReport = function(character) {
		var deferred = new $.Deferred();

		if (!itemDatabase.isPopulated) {
			itemDatabase.loadItems().done(runIt);
		} else {
			runIt();
		}

		return deferred;

		function runIt() {
			addHeading(character);
			gradeCharacter(character);
			renderTree(rules);
			tree.find('div > div').powerTip({
				smartPlacement: true
			});
			deferred.resolve();
		}
	};

	this.resetReport = function() {
		tree.find('div > div').powerTip('destroy');
		heading.empty();
		infoList.empty();
		tree.empty();
		rules = new Qualifications(skills, items);
	};

	// private methods

	function addHeading(character) {
		var anchor = $('<a>'),
			listItems = {
				'Outfit Rank': character.outfitRankTitle,
				'Battle Rank': character.rank,
				'Joined AFX': $.timeago(character.outfitJoinDate),
				'Last Login': $.timeago(character.lastLogin),
				'Status': character.online ? 'Online' : 'Offline'
			};

		anchor.text(character.name);
		anchor.attr('href', PLAYERS_URL + character.id);
		anchor.attr('target', '_blank');

		heading.append($('<span>').addClass('rank r' + character.outfitRank));
		heading.append(anchor);

		$.each(listItems, function(title, content) {
			var listItem = $('<li>'),
				strong = $('<strong>').text(title);
			listItem.append(strong).append(content);
			infoList.append(listItem);
		});
	}

	function gradeCharacter(character) {
		function checkCerts(rank) {
			var certCount = {};

			// initialize cert counting for this rank
			certCount = {
				pass: 0,
				total: 0
			};

			// create tooltip element
			rank.tip = $('<div>');
			if (Object.keys(rank.classes).length > 1) {
				rank.tip.addClass('long');
			}

			// iterate over each class/loadout
			$.each(rank.classes, function(playerClass, requirements) {
				var classTip = $('<p>').append('<span>' + playerClass + '</span>');

				// check certification requirements
				$.each(requirements.certifications, function(idx, val) {
					var cert = character.getCertLine(val),
						span = $('<span>'),
						level;

					certCount.total++;

					// because regeneration field names don't have level numbers
					function stripNumber(str) {
						return str.replace(/\d+$/, '').trim();
					}

					if (cert) {
						level = $.inArray(Number(cert.skill_id), val.skill.skills) + 1;
						if (level < val.level) {
							span.addClass('notok');
							span.text(stripNumber(cert.name.en) + ' ' + level + ' (need level ' + val.level + ')');
						} else {
							span.addClass('ok');
							span.text(stripNumber(cert.name.en) + ' ' + level);
							certCount.pass++;
						}
					} else {
						span.addClass('notok');
						span.text(val.skill.name + ' 0' + ' (need level ' + val.level + ')');
					}

					classTip.append(span);
				});

				// check equipment requirements
				$.each(requirements.equipment, function(idx, val) {
					certCount.total++;
					var ge = character.hasEquipment(val),
						itemName = itemDatabase.getItem(val);
					if (ge) {
						classTip.append('<span>' + itemName + '</span>');
						certCount.pass++;
					} else {
						classTip.append('<span class="notok">' + itemName + '</span>');
					}
				});

				rank.tip.append(classTip);
			});

			rank.certCount = certCount;
			rank.pass = didPass(rank);
		}

		function checkRank(rank, pass) {
			if (rank.cert) {
				checkCerts(rank.cert);
			}
			if (rank.child) {
				$.each(rank.child, function() {
					checkRank(this, pass);
				});
			}
		}

		checkRank(rules, true);
	}

	function renderTree(rank) {
		var parentsPass = true,
			certPass = true,
			outerBox = $('<div>').attr('id', getSlug(rank.name)),
			innerBox = $('<div>');

		if (rank.rendered) {
			return;
		}

		if (rank.parent) {
			parentsPass = parentPass(rank.parent);
		}

		if (rank.cert) {
			certPass = rank.cert.pass;
		}

		if (!parentsPass) {
			outerBox.addClass('na');
		}
		if (parentsPass && certPass) {
			outerBox.addClass('pass');
		} else {
			outerBox.addClass('fail');
		}
		if (rank.isRank) {
			outerBox.addClass('rank');
		}

		innerBox.text(rank.name);
		if (rank.cert) {
			innerBox.append($('<p>').text(rank.cert.certCount.pass + ' out of ' + rank.cert.certCount.total + ' (' + Math.round(rank.cert.certCount.pass / rank.cert.certCount.total * 100) + '%)'));
			innerBox.data('powertipjq', rank.cert.tip);
		}

		outerBox.append(innerBox);
		tree.append(outerBox);
		rank.rendered = true;

		if (rank.child) {
			$.each(rank.child, function() {
				renderTree(this);
			});
		}

		function parentPass(rank) {
			var parPass = true;
			if ($.isArray(rank)) {
				$.each(rank, function() {
					parPass = parentPass(this);
					if (!parPass) {
						return false;
					}
				});
				return parPass;
			}
			if (rank.parent) {
				$.each(rank.parent, function() {
					parPass = parentPass(this);
					if (!parPass) {
						return false;
					}
				});
			}
			if (parPass && rank.cert) {
				return rank.cert.pass;
			}
			return parPass;
		}
	}

	function didPass(rank) {
		// calculate the completed certs percentage and report pass/fail
		var percentage = Math.round(rank.certCount.pass / rank.certCount.total * 100);
		if (percentage >= rank.meta.passPercentage) {
			return true;
		}
		return false;
	}

	function getSlug(str) {
		return str.replace(/\s/g, '-').toLowerCase();
	}
}
