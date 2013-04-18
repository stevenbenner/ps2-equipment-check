function EquipmentRequirements(qualifications, itemDefinitions) {
	var me = this;

	me.rules = {};

	// load rules functions
	$.each(qualifications, function(squad, playTypes) {
		me.rules[squad] = {};
		$.each(playTypes, function(type, rules) {
			me.rules[squad][type] = function(equipment) {
				var hasRequiredItems = true,
					displayGroups = {},
					cell = $('<td>');

				$.each(rules, function(idx, item) {
					var hasItem = false;

					// check for item
					if (item.level) {
						hasItem = equipment.has(item.item[item.level - 1]);
						if (hasItem) {
							displayGroups[item.group] = displayGroups[item.group] || [];
							displayGroups[item.group].push(equipment.get(item.item).name.en);
						}
					} else if ($.isArray(item.item)) {
						var hasAnyItem = false;
						$.each(item.item, function(idx, subItem) {
							if (typeof subItem !== 'object') {
								subItem = {
									item: subItem
								};
							}
							if (subItem.level) {
								if (equipment.has(subItem.item[subItem.level - 1])) {
									hasAnyItem = true;
									displayGroups[item.group] = displayGroups[item.group] || [];
									displayGroups[item.group].push(equipment.get(subItem.item).name.en);
								}
							} else {
								if (equipment.has(subItem.item)) {
									hasAnyItem = true;
									displayGroups[item.group] = displayGroups[item.group] || [];
									displayGroups[item.group].push(equipment.get(subItem.item).name.en);
								}
							}
						});
						hasItem = hasAnyItem;
					} else {
						hasItem = equipment.has(item.item);
						if (hasItem) {
							displayGroups[item.group] = displayGroups[item.group] || [];
							displayGroups[item.group].push(equipment.get(item.item).name.en);
						}
					}

					if (!hasItem && item.required) {
						hasRequiredItems = false;
					}
				});

				cell.text(hasRequiredItems ? type + ' Equipped' : 'Not Equipped');
				cell.addClass(hasRequiredItems ? 'ok' : 'notok');

				if (hasRequiredItems) {
					$.each(displayGroups, function(group, items) {
						var span = $('<span>');
						span.text('[ ' + items.join(' | ') + ' ]');
						cell.append(span);
					});
				}

				return cell;
			};
		});
	});

	return me.rules;
}
