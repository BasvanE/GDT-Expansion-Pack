(function () {

	var checkResearch = function (research) {
		if (!(Checks.checkPropertiesPresent(research, ['id', 'name', 'v', 'category', 'categoryDisplayName', 'group'])
			&& Checks.checkUniqueness(research, 'id', a.getAllItems)
			&& Checks.checkAudienceWeightings(platform.audienceWeightings)
			&& Checks.checkGenreWeightings(platform.genreWeightings)))
			return false;
	
	};
})();