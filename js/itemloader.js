/* exported ItemLoader */

function ItemLoader(items) {
	var itemService = new Service('item'),
		itemsList = [],
		me = this;

	// public properties
	me.isPopulated = false;
	me.items = [];

	// public methods

	me.loadItems = function() {
		var deferred = new $.Deferred(),
			itemData;

		loadItemIds(items);

		itemData = {
			'c:limit': 1000,
			'c:lang': 'en',
			'item_id': itemsList.join(',')
		};

		itemService.get(itemData).done(function(data) {
			$.each(data.item_list, function() {
				me.items[this.item_id] = this.name.en;
			});
			me.isPopulated = true;
			deferred.resolve();
		});

		return deferred;
	};

	me.getItem = function(itemId) {
		return me.items[itemId];
	};

	// private methods

	function loadItemIds(items) {
		if ($.isArray(items)) {
			itemsList = itemsList.concat(items);
		} else if (typeof items === 'object') {
			$.each(items, function(key, val) {
				loadItemIds(val);
			});
		} else if (typeof items === 'number') {
			itemsList.push(items);
		}
	}
}
