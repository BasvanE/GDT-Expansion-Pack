(function () {
	/* Format
	{
		id: "",
		name: "".localize(),
		pointsCost: ,
		canResearch: function (company) {
			return 
		},
		iconUri: "",
		description: "P".localize(),
		targetZone: 2,
		complete: function (company) {
			company.notifications.push(new Notification({
				header: "".localize(),
				text: "".localize(),
				image: ""
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