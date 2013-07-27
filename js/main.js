var OUTFIT_ID = '37511414368206626';

// onready
$(function() {
	var navBar = $('nav ul'),
		membersTable = $('#members'),
		statusBox = $('#status'),
		statusText = statusBox.find('span'),
		memberLoader = new MemberLoader(OUTFIT_ID),
		equipmentRequirements = new EquipmentRequirements(qualifications),
		tableBuilder = new MemberTableBuilder(membersTable, equipmentRequirements),
		membersLoaded = 0;

	memberLoader.on('start', function() {
		statusText.text('Loading outfit members...');
	});

	memberLoader.on('member', function(character) {
		membersLoaded++;
		statusText.text('Loading members: ' + membersLoaded + ' of ' + memberLoader.memberCount);
		if (character.returned < 1) {
			return;
		}
		tableBuilder.addMember(
			character.character_list[0],
			new CharacterItems(character.character_list[0].items)
		);
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
