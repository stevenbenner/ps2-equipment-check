/* exported MemberLoader */

// constants
var OUTFIT_URL = 'http://census.soe.com/get/ps2:v2/outfit_member',
	CHARACTER_URL = 'http://census.soe.com/get/ps2:v2/character',
	SKILLS_URL = 'http://census.soe.com/get/ps2:v2/characters_skill';

function MemberLoader(outfitId, concurrency) {
	var memberList = [],
		me = this,
		activeConnections = 0;

	// default concurrency
	concurrency = concurrency || 4;

	// public properties
	me.memberCount = 0;

	// methods

	me.start = function() {
		me.emit('start');
		$.ajax({
			url: OUTFIT_URL,
			data: {
				'outfit_id': outfitId,
				'c:resolve': 'character(character_id)',
				'c:show': 'character_id',
				'c:sort': 'rank_ordinal',
				'c:limit': 1000
			},
			dataType: 'jsonp'
		}).done(function(data) {
			$.each(data.outfit_member_list, function(idx, member) {
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
			url: CHARACTER_URL,
			data: {
				'character_id': characterId,
				'c:resolve': 'item_full(name,item_id),online_status',
				'c:show': 'name,battle_rank,character_id,online_status',
				'c:lang': 'en',
			},
			dataType: 'jsonp'
		}).done(function(charData) {
			if (charData.error) {
				memberList.push(characterId);
				me.fetchNextMember();
				return;
			}
			$.ajax({
				url: SKILLS_URL,
				data: {
					'character_id': characterId,
					'c:join': 'skill^show:name\'skill_id\'skill_line_id',
					'c:lang': 'en',
					'c:limit': 1000
				},
				dataType: 'jsonp'
			}).done(function(skillData) {
				if (skillData.error) {
					memberList.push(characterId);
					me.fetchNextMember();
					return;
				}
				activeConnections--;
				me.emit('member', [ new Character(charData, skillData) ]);
				me.fetchNextMember();
			});
		});
	};
}

MemberLoader.prototype = new EventEmitter();
