(function () {
	/*
	a.cult = {
			id: "cult",
			title: "Cult Status".localize("achievement title"),
			description: "Set a new standard for the early gaming industry.".localize("achievement"),
			isAchieved: function (a) {
				var b = a.gameLog.last();
				return b && a.topScoreAchievements === 3 && b.flags.topScore && b.isOnSale() ? true : false
			},
			tint: b,
			value: g
		};
	*/
	
	var checkAchievement = function (achievement) {
		if (!(Checks.checkPropertiesPresent(achievement, ['id', 'title', 'description', 'tint', 'value'])))
			return false;

		return true;
	};


	GDT.addAchievement = function (achievement) {
		if (!checkAchievement(achievement))
			return;

		Achievements.getAllItems.push(achievement);
	};
})();