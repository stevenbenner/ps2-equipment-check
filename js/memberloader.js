/* exported MemberLoader */

// constants
var SERVICE_CHARACTER = 'character',
	SERVICE_SKILLS = 'characters_skill';

function MemberLoader() {
	var charService = new Service(SERVICE_CHARACTER),
		skillService = new Service(SERVICE_SKILLS);

	this.get = function(member) {
		var deferred = new $.Deferred(),
			charData = {
				'character_id': member.id,
				'c:resolve': 'item_full(name,item_id),outfit_member,online_status',
				'c:show': 'name,battle_rank,character_id,outfit_member,online_status,times'
			},
			skillData = {
				'character_id': member.id,
				'c:join': 'skill^show:name\'skill_id\'skill_line_id'
			};

		$.when(
			charService.get(charData),
			skillService.get(skillData)
		).done(function(character, skills) {
			if (character[0].error || character[0].errorCode || skills[0].error || skills[0].errorCode) {
				deferred.reject(character[0].error || character[0].errorCode || skills[0].error || skills[0].errorCode);
			}
			deferred.resolve(new Character(character[0], skills[0]));
		});

		return deferred;
	};
}
