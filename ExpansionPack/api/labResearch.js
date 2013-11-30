(function () {
	/* Format
	{
		id: "4D Graphics Project",
		name: "4D Graphics".localize(),
		pointsCost: 2000,
		canResearch: function (company) {
			return !company.flags.graphicsV6 && 3 < LevelCalculator.getEnginePartLevel(a, "3D Graphics V5")
		},
		iconUri: "./images/projectIcons/superb/graphics-v6.png",
		description: "Pushing the boundaries of photorealism this revolutionary graphics engine will blow away everything that has come before. Near infinite draw distance, ultra-high polygon counts and realistic particle and volumetric effects.".localize(),
		targetZone: d,
		complete: function (company) {
			b.flags.graphicsV6 = !0;
			b.researchCompleted.push(a.ThreeDGraphicsV6);
			b.notifications.push(new Notification({
				header: c,
				text: "We have successfully completed the research on our next generation graphics technology and we can now start building a game engine to make use of this research.".localize(),
				image: "./images/projectIcons/superb/graphics-v6.png"
			}))
		}
	};
	*/

	var checkLabResearchItem = function (labResearch) {
		if (!(Checks.checkPropertiesPresent(labResearch, ['id', 'name', 'pointsCost', 'iconUri','description', 'targetZone'])
			&& Checks.checkUniqueness(labResearch, 'id', Research.bigProjects))
			&& labResearch.pointsCost <= 0)
			return false;

		return true;
	};

	GDT.addLabResearchItem = function (labResearch) {
		if (!checkLabResearchItem(labResearch))
			return;

		Research.bigProjects.push(labResearch);
	};
})();