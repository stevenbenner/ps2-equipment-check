var OUTFIT_ID = '37511414368206626';

// onready
$(function() {
	// get JSON resources
	$.when(
		$.getJSON('js/definitions/skills.json'),
		$.getJSON('js/definitions/items.json')
	).done(function(skills, items) {
		// run it
		init(skills[0], items[0]);
	});
});

// application setup and initialization
function init(skills, items) {
	var searchForm = $('#character-search'),
		characterNameBox = $('#character-name'),
		reportElement = $('#member-report'),
		outfitLoader = new OutfitLoader(OUTFIT_ID),
		memberLoader = new MemberLoader(),
		reportBuilder = new MemberReportBuilder(reportElement, skills, items),
		searchFormDisabled = false,
		activePlayerName;

	// hook up ajax error handler
	$(document).ajaxError(error);

	// set defaults on libraries
	setComponentDefaults();

	// add legend tooltips
	$('#legend li').powerTip({
		placement: 'sw-alt'
	});

	// set up typeahead
	characterNameBox.typeahead(null, {
		displayKey: 'name',
		source: function(query, cb) {
			var matches = $.map(outfitLoader.memberList, function(member) {
				if (member.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
					return member;
				}
			});
			cb(matches);
		}
	});

	// bind character search form submit event
	searchForm.on('submit', function() {
		var searchQuery = characterNameBox.val(),
			member = $.grep(outfitLoader.memberList, function(member) {
				if (member.name.toLowerCase() === searchQuery.toLowerCase()) {
					return true;
				}
			});

		if (member.length === 1 && !searchFormDisabled && activePlayerName !== member[0]) {
			searchFormDisabled = true;
			activePlayerName = member[0];

			$.when(
				memberLoader.get(activePlayerName),
				searchForm.fadeOut(300),
				reportElement.slideUp(500)
			).done(function(character) {
				// reset app
				searchFormDisabled = false;
				reportBuilder.resetReport();
				characterNameBox.typeahead('close');
				characterNameBox.val('');
				searchForm.show();

				// render the new report
				reportElement.prepend(searchForm);
				reportBuilder.renderReport(character).done(function() {
					reportElement.slideDown(500, function() {
						$('body').addClass('reportOpen');
					});
				});
			}).fail(function(err) {
				error(err, true);
			});
		}

		return false;
	});

	// get outfit members and open for business
	outfitLoader.getMembers().done(function() {
		searchForm.fadeIn(300, function() {
			characterNameBox.focus();
		});
	});
}

function setComponentDefaults() {
	// powertip plugin
	$.fn.powerTip.smartPlacementLists.n = [ 'n', 'ne', 'nw', 's', 'se', 'sw', 'n' ];

	// timeago plugin
	$.timeago.settings.strings = {
		prefixAgo: null,
		prefixFromNow: null,
		suffixAgo: 'ago',
		suffixFromNow: 'from now',
		seconds: 'less than a minute',
		minute: 'one minute',
		minutes: '%d minutes',
		hour: 'one hour',
		hours: '%d hours',
		day: 'one day',
		days: '%d days',
		month: 'one month',
		months: '%d months',
		year: 'one year',
		years: '%d years',
		wordSeparator: ' ',
		numbers: []
	};
}

function error(err, showErrorText) {
	var html = [
		'<h2>Error</h2>',
		'<p>',
		'There was an error connecting to the API. ',
		'The API servers might have gone down or something broke along the way. ',
		'Please try again later.',
		'</p>'
	];

	if (err && showErrorText === true) {
		html.push(
			'<p>',
			err,
			'</p>'
		);
	}

	$('<div>').attr('id', 'error').html(html.join('')).appendTo($('body'));
}
