/* exported Character */

function Character(characterData, skillsData) {

	// properties
	this.id = characterData.character_list[0].character_id;
	this.name = characterData.character_list[0].name.first;
	this.rank = characterData.character_list[0].battle_rank.value;
	this.outfitRank = characterData.character_list[0].outfit_member.rank_ordinal;
	this.online = characterData.character_list[0].online_status === '1';
	this.lastLogin = characterData.character_list[0].times.last_login_date;

	// methods

	this.getCertLine = function(skillDefinition) {
		var retObj = null;
		$.each(skillsData.characters_skill_list, function(idx, skill) {
			// if there is no skill details data then skip it
			if (!skill.skill_id_join_skill) {
				return;
			}
			if (skill.skill_id_join_skill.skill_line_id === skillDefinition.skill.skillLine.toString()) {
				retObj = skill.skill_id_join_skill;
				return false;
			}
		});
		return retObj;
	};

	this.getEquipment = function(id) {
		var equipstr = 'n/a';
		$.each(characterData.character_list[0].items, function(idx, item) {
			if (item.item_id === id.toString()) {
				equipstr = item.name.en;
				return false;
			}
		});
		return equipstr;
	};

}
