function MemberTableBuilder(table, rules) {

	function getSlug(str) {
		return str.replace(/\s/, '-');
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
					var nooffline = table.hasClass('nooffline');

					nav.find('li.primary').removeClass('selected');
					$(this).addClass('selected');

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

	this.addMember = function(name, equipment, online, id, level) {
		var row = $('<tr>'),
			nameColumn = $('<td>'),
			squad,
			squadSlug,
			rule,
			cell;

		nameColumn.append($('<span>').addClass('status'));
		nameColumn.append($('<a>').text(name).attr('href', 'https://players.planetside2.com/#!/' + id).attr('target', '_blank'));
		row.addClass(online === '1' ? 'online' : 'offline');
		row.append(nameColumn);
		row.append($('<td>').text(level));

		for (squad in rules) {
			squadSlug = getSlug(squad);
			for (rule in rules[squad]) {
				cell = rules[squad][rule](equipment);
				cell.addClass(squadSlug);
				row.append(cell);
			}
		}

		table.append(row);
	}

}
