/* exported MemberTableBuilder */

var PLAYERS_URL = 'https://players.planetside2.com/#!/';

function MemberTableBuilder(table, rules) {

	// public methods

	this.buildHeader = function() {
		var headerRow = $('<tr>');

		headerRow.append($('<th>').text('Name'));
		headerRow.append($('<th>').text('BR'));

		forEachRule(function(squadSlug, type) {
			var cell = $('<th>');
			cell.addClass(squadSlug);
			cell.text(type);
			headerRow.append(cell);
		});

		table.append(headerRow);

		table.removeClass();
		table.addClass(getSlug(Object.keys(rules)[0]) + '-only');
	};

	this.buildNav = function(nav) {
		var hideOfflineCheck = nav.find('#hide-offline');

		$.each(rules, function(squad) {
			var squadSlug = getSlug(squad),
				navButton = $('<li>');

			navButton.addClass('primary');
			navButton.text(squad);

			navButton.on('click', function() {
				var $this = $(this),
					nooffline = table.hasClass('nooffline');

				if ($this.hasClass('selected')) {
					return;
				}

				nav.find('li.primary').removeClass('selected');
				$this.addClass('selected');

				table.removeClass();
				table.addClass(squadSlug + '-only');
				if (nooffline) {
					table.addClass('nooffline');
				}
			});

			nav.append(navButton);
		});

		function handleOfflineCheckbox() {
			toggleClass(hideOfflineCheck, 'nooffline');
		}
		hideOfflineCheck.on('click', handleOfflineCheckbox);
		table.removeClass('nooffline');
		handleOfflineCheckbox();

		nav.find('li.primary').first().addClass('selected');
	};

	this.addMember = function(character) {
		var row = $('<tr>'),
			nameColumn = $('<td>'),
			anchor = $('<a>');

		anchor.text(character.name);
		anchor.attr('href', PLAYERS_URL + character.id);
		anchor.attr('target', '_blank');

		nameColumn.append($('<span>').addClass('status'));
		nameColumn.append(anchor);

		row.addClass(character.online ? 'online' : 'offline');
		row.append(nameColumn);
		row.append($('<td>').text(character.rank));

		forEachRule(function(squadSlug, type, requirements) {
			var cell = $('<td>');

			// check certification requirements
			$.each(requirements.certifications, function(idx, val) {
				var cert = character.getCertLine(val),
					span = $('<span>'),
					level;

				if (cert) {
					level = $.inArray(+cert.skill_id, val.skill.skills) + 1;
					if (level < val.level) {
						span.addClass('notok');
					} else {
						span.addClass('ok');
					}
					span.text(cert.name.en);
				} else {
					span.addClass('notok');
					span.text(val.skill.name + ' 0');
				}

				cell.append(span);
			});

			// check equipment requirements
			$.each(requirements.equipment, function(idx, val) {
				cell.append('<span>' + character.getEquipment(val) + '</span>');
			});

			cell.addClass(squadSlug);
			row.append(cell);
		});

		table.append(row);
	};

	// private methods

	function getSlug(str) {
		return str.replace(/\s/, '-');
	}

	function forEachRule(callback) {
		$.each(rules, function(squad, types) {
			var squadSlug = getSlug(squad);
			$.each(types, function(type, requirements) {
				callback.call(this, squadSlug, type, requirements);
			});
		});
	}

	function toggleClass(element, className) {
		var navButton = element.parent();
		if (element.is(':checked')) {
			table.addClass(className);
			navButton.addClass('selected');
		} else {
			table.removeClass(className);
			navButton.removeClass('selected');
		}
	}

}
