// constants
var OUTFIT_URL = 'http://census.soe.com/get/ps2-beta/outfit/',
	CHARACTER_URL = 'http://census.soe.com/get/ps2-beta/character/';

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
				'c:show': 'name,item_list,online_status,experience',
				'c:resolve': 'item_list(name.en,description.en),online_status'
			},
			dataType: 'jsonp'
		}).done(function(charData) {
			if (charData.error) {
				//console.log(charData);
				memberList.push(characterId);
				me.fetchNextMember();
				return;
			}
			if (!charData.character_list.length) {
				//console.log(charData);
			}
			activeConnections--;
			me.emit('member', [ charData ]);
			me.fetchNextMember();
		});
	};
}

MemberLoader.prototype = new EventEmitter();
