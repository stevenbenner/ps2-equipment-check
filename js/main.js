var OUTFIT_ID = '37511414368206626';

// onready
$(function() {
	var navBar = $('nav ul'),
		membersTable = $('#members'),
		statusBox = $('#status'),
		statusText = statusBox.find('span'),
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
		statusText.text('Loading members: ' + membersLoaded + ' of ' + memberLoader.memberCount);
	});

	memberLoader.on('done', function() {
		statusText.text('Processing complete.');
		statusBox.delay(500).slideUp(500);
	});

	tableBuilder.buildHeader();
	tableBuilder.buildNav(navBar);

	statusBox.slideDown(500);
	memberLoader.start();
});
