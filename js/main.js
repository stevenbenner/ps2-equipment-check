var OUTFIT_ID = '37511414368206626';

// onready
$(function() {
	var membersTable = $('#members'),
		statusText = $('#status'),
		hideOfflineCheck = $('#hide-offline'),
		memberLoader = new MemberLoader(OUTFIT_ID),
		tableBuilder = new MemberTableBuilder(membersTable, qualifications),
		membersLoaded = 0;

	memberLoader.on('start', function() {
		statusText.text('Loading outfit members...');
	});

	memberLoader.on('member', function(character) {
		if (character.returned < 1) {
			return;
		}
		tableBuilder.addMember(
			character.character_list[0].name.first,
			new CharacterItems(character.character_list[0].item_list),
			character.character_list[0].online_status,
			character.character_list[0].character_id,
			character.character_list[0].experience.length ? character.character_list[0].experience[0].rank : 'N/A'
		);
		membersLoaded++;
		$('#status').text('Loaded ' + membersLoaded + ' of ' + memberLoader.memberCount + ' members');
	});

	function handleOfflineCheckbox() {
		if (hideOfflineCheck.is(':checked')) {
			membersTable.addClass('nooffline');
		} else {
			membersTable.removeClass('nooffline');
		}
	}
	hideOfflineCheck.on('click', handleOfflineCheckbox);
	membersTable.removeClass();
	handleOfflineCheckbox()

	tableBuilder.buildHeader();
	memberLoader.start();
});
