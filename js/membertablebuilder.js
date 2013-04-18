function MemberTableBuilder(table, rules) {

	function getSlug(str) {
		return str.replace(/\s/, '-');
	}

	function getCell(equipObj) {
		var cell = $('<td>');

		cell.text(equipObj.equipped ? equipObj.name + ' Equipped' : 'Not Equipped');
		cell.addClass(equipObj.equipped ? 'ok' : 'notok');

		if (equipObj.equipped) {
			$.each(equipObj.equipment, function(group, items) {
				var span = $('<span>');
				span.text('[ ' + items.join(' | ') + ' ]');
				cell.append(span);
			});
		}

		return cell;
	}

	this.buildHeader = function() {
		var headerRow = $('<tr>'),
			squad,
			squadSlug,
			rule,
			cell;

		headerRow.append($('<th>').text('Name'));
		headerRow.append($('<th>').text('BR'));

		for (squad in rules) {
			squadSlug = getSlug(squad);
			for (rule in rules[squad]) {
				cell = $('<th>');
				cell.addClass(squadSlug);
				cell.text(rule);
				headerRow.append(cell);
			}
		}

		table.append(headerRow);

		table.removeClass();
		table.addClass(getSlug(Object.keys(rules)[0]) + '-only');
	};

	this.buildNav = function(nav) {
		var hideOfflineCheck = nav.find('#hide-offline'),
			squad,
			squadSlug,
			navButton;

		for (squad in rules) {
			squadSlug = getSlug(squad);
			navButton = $('<li>');

			navButton.addClass('primary');
			navButton.text(squad);

			navButton.on('click', (function(squadSlug) {
				return function() {
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
				};
			}(squadSlug)));

			nav.append(navButton);
		}

		function handleOfflineCheckbox() {
			if (hideOfflineCheck.is(':checked')) {
				table.addClass('nooffline');
				hideOfflineCheck.parent().addClass('selected');
			} else {
				table.removeClass('nooffline');
				hideOfflineCheck.parent().removeClass('selected');
			}
		}
		hideOfflineCheck.on('click', handleOfflineCheckbox);
		table.removeClass('nooffline');
		handleOfflineCheckbox();

		nav.find('li.primary').first().addClass('selected');
	};

	this.addMember = function(character, equipment) {
		var row = $('<tr>'),
			nameColumn = $('<td>'),
			squad,
			squadSlug,
			rule,
			cell;

		nameColumn.append($('<span>').addClass('status'));
		nameColumn.append($('<a>').text(character.name.first).attr('href', 'https://players.planetside2.com/#!/' + character.character_id).attr('target', '_blank'));
		row.addClass(character.online_status === '1' ? 'online' : 'offline');
		row.append(nameColumn);
		row.append($('<td>').text(character.experience.length ? character.experience[0].rank : 'N/A'));

		for (squad in rules) {
			squadSlug = getSlug(squad);
			for (rule in rules[squad]) {
				cell = getCell(rules[squad][rule](equipment));
				cell.addClass(squadSlug);
				row.append(cell);
			}
		}

		table.append(row);
	}

}
