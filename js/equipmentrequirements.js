function EquipmentRequirements(qualifications, itemDefinitions) {
	var me = this;

	me.rules = {};

	// load rules functions
	$.each(qualifications, function(squad, playTypes) {
		me.rules[squad] = {};
		$.each(playTypes, function(type, rules) {
			me.rules[squad][type] = function(equipment) {
				var hasRequiredItems = true,
					displayGroups = {};

				$.each(rules, function(idx, itemRule) {
					var hasItem = false,
						itemList;

					// normalize item property into array of objects
					if (!itemRule.level && $.isArray(itemRule.item)) {
						itemList = itemRule.item;
						$.each(itemList, function(idx, subItem) {
							if (typeof subItem !== 'object') {
								itemList[idx] = { item: subItem };
							}
						});
					} else {
						itemList = [ itemRule ];
					}

					// check each item in the collection - any match results in a positive hasItem
					$.each(itemList, function(idx, subItem) {
						var itemId = subItem.level ? subItem.item[subItem.level - 1] : subItem.item;
						hasItem = equipment.has(itemId);
						if (hasItem) {
							displayGroups[itemRule.group] = displayGroups[itemRule.group] || [];
							displayGroups[itemRule.group].push(equipment.get(subItem.item).name.en);
						}
					});

					// if this rule is required and there was no matching item then fail
					if (!hasItem && itemRule.required) {
						hasRequiredItems = false;
					}
				});

				return {
					name: type,
					equipped: hasRequiredItems,
					equipment: displayGroups
				};
			};
		});
	});

	return me.rules;
}
