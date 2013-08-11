var OUTFIT_ID = '37511414368206626';

// onready
$(function() {
	// get JSON resources
	$.getJSON('js/definitions/skills.json').done(function(skills) {
		$.getJSON('js/definitions/items.json').done(function(items) {
			// run it
			run(new Qualifications(skills, items));
		});
	});
});

function run(qualifications) {
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
		membersLoaded++;
		statusText.text('Loading members: ' + membersLoaded + ' of ' + memberLoader.memberCount);
		tableBuilder.addMember(character);
	});

	memberLoader.on('done', function() {
		statusText.text('Processing complete.');
		statusBox.delay(500).slideUp(500);
	});

	tableBuilder.buildHeader();
	tableBuilder.buildNav(navBar);

	statusBox.slideDown(500);
	memberLoader.start();
}
