/* exported CharacterItems */

function CharacterItems(itemList) {

	var searchCache = {};

	this.has = function(search) {
		if (searchCache.hasOwnProperty(search)) {
			return searchCache[search];
		}
		$.each(itemList, function(idx, item) {
			var isMatch = false;
			switch (typeof search) {
			case 'string':
				isMatch = item.name === search;
				break;
			case 'number':
				isMatch = item.id === search.toString();
				break;
			case 'object':
				isMatch = item.id === search.id.toString();
				break;
			}
			searchCache[search] = isMatch;
			if (isMatch) {
				return false;
			}
		});
		searchCache[search] = searchCache[search] || false;
		return searchCache[search];
	};

	this.get = function(search) {
		var item;

		function getItem(itemId) {
			var retItem;
			$.each(itemList, function(idx, item) {
				if (item.id === itemId.toString()) {
					retItem = item;
					return false;
				}
			});
			return retItem;
		}

		switch (typeof search) {
		case 'object':
			if ($.isArray(search)) {
				$.each(search, function(idx, itemId) {
					var lastItem = getItem(itemId);
					if (!lastItem) {
						return false;
					}
					item = lastItem;
				});
			} else {
				item = getItem(search.id);
			}
			break;
		case 'number':
		case 'string':
			item = getItem(search);
			break;
		}

		return item;
	};

}
