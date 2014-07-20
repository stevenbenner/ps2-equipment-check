/* exported OutfitLoader */

// constants
var SERVICE_OUTFIT = 'outfit_member';

function OutfitLoader(outfitId) {
	var outfitService = new Service(SERVICE_OUTFIT),
		me = this;

	me.memberCount = 0;
	me.memberList = [];

	me.getMembers = function() {
		var deferred = new $.Deferred(),
			outfitData = {
				'outfit_id': outfitId,
				'c:resolve': 'character(character_id,name.first)',
				'c:show': 'character_id',
				'c:sort': 'rank_ordinal'
			};

		outfitService.get(outfitData).done(function(data) {
			if (outfitData.error) {
				deferred.reject(outfitData.error);
			}
			$.each(data.outfit_member_list, function(idx, member) {
				me.memberList.push({
					id: member.character_id,
					name: member.character.name.first
				});
				me.memberCount++;
			});
			deferred.resolve();
		});

		return deferred;
	};
}
