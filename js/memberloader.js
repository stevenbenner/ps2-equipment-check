/* exported MemberLoader */

// constants
var SERVICE_PROTO = 'https',
	SERVICE_HOST = 'census.soe.com',
	SERVICE_OUTFIT = 'outfit_member',
	SERVICE_CHARACTER = 'character',
	SERVICE_SKILLS = 'characters_skill';

function MemberLoader(outfitId, serviceId, concurrency) {
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
			url: getServiceEndpoint(SERVICE_OUTFIT),
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
			url: getServiceEndpoint(SERVICE_CHARACTER),
			data: {
				'character_id': characterId,
				'c:resolve': 'item_full(name,item_id),outfit_member,online_status',
				'c:show': 'name,battle_rank,character_id,outfit_member,online_status',
				'c:lang': 'en'
			},
			dataType: 'jsonp'
		}).done(function(charData) {
			if (charData.error) {
				memberList.push(characterId);
				me.fetchNextMember();
				return;
			}
			$.ajax({
				url: getServiceEndpoint(SERVICE_SKILLS),
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

	function getServiceEndpoint(serviceName) {
		return [
			SERVICE_PROTO,
			'://',
			SERVICE_HOST,
			'/s:',
			serviceId,
			'/json/get/ps2:v2/',
			serviceName
		].join('');
	}
}

MemberLoader.prototype = new EventEmitter();
