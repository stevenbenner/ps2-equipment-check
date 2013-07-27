/* exported MemberLoader */

// constants
var OUTFIT_URL = 'http://census.soe.com/get/ps2:v1/outfit/',
	CHARACTER_URL = 'http://census.soe.com/get/ps2:v1/character/';

function MemberLoader(outfitId, concurrency) {
	var memberList = [],
		me = this,
		activeConnections = 0;

	// public properties
	me.memberCount = 0;

	// default concurrency
	concurrency = concurrency || 4;

	me.start = function() {
		me.emit('start');
		$.ajax({
			url: OUTFIT_URL + outfitId,
			data: {
				'c:resolve': 'member'
			},
			dataType: 'jsonp'
		}).done(function(data) {
			$.each(data.outfit_list[0].members, function(idx, member) {
				memberList.push(member.character_id);
				me.memberCount++;
			});
			while (concurrency-- > 0) {
				me.fetchNextMember();
			}
		});
	};

	me.fetchNextMember = function() {
		var characterId = memberList.shift();

		if (!characterId) {
			if (activeConnections === 0) {
				me.emit('done');
			}
			return;
		}

		activeConnections++;

		$.ajax({
			url: CHARACTER_URL + characterId,
			data: {
				//'c:show': 'name,item_full,online_status,experience',
				'c:resolve': 'item_full(name.en,description.en),online_status'
			},
			dataType: 'jsonp'
		}).done(function(charData) {
			if (charData.error) {
				memberList.push(characterId);
				me.fetchNextMember();
				return;
			}
			activeConnections--;
			me.emit('member', [ charData ]);
			me.fetchNextMember();
		});
	};
}

MemberLoader.prototype = new EventEmitter();
