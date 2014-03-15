var DifSet = {};
(function () {
	var time;
	
	DifSet.store = function () {
		return GDT.getDataStore("ExpPackMod").data;
	};
	DifSet.settings = function () {
		return GDT.getDataStore("ExpPackMod").settings;
	};
	
	DifSet.addGameDifSelector = function () {
		var c = "";
		c += '<div id="gameDif" class="centeredButtonWrapper">';
		c += "<h2>Game Difficulty</h2>";
		c += "</ br>";
		c += '<select id="difSelect" style="max-width: 250px">';
		c += '<option value="Easy">Easy</option>';
		c += '<option value="Normal" selected="selected">Normal</option>';
		c += '<option value="Hard">Hard</option>';
		c += "</select>";
		c += "<p>Select a game difficulty you wish to play. Difficulty will change starting money, research costs and more.</p>";
		c += "</div>";
		UltimateLib.Configuration.addAdvancedOption(c);
	};
	
	DifSet.setGameDif = function () {
		var d = UI.closeNewGameView;
		var c = function () {
			var e = document.getElementById("difSelect").value;
			switch (e) {
			case "Easy":
				GameManager.company.cash = 100000;
				Es();
				break;
			case "Normal":
				break;
			case "Hard":
				GameManager.company.cash = 50000;
				Ha();
				break;
			default:
				break;
			}
		};
		UI.closeNewGameView = function () {
			d();
			c();
		};
	};
	
	function Es() {
		applyDifSetting(0.8, "Easy");
		console.log('dif = Easy');
	};
	function No() {
		applyDifSetting(1, "Normal");
		console.log('dif = Normal');
	};
	function Ha() {
		applyDifSetting(1.2, "Hard");
		console.log('dif = Hard');
	};
	
	DifSet.checkGameDif = function () {
		switch (DifSet.store().gameDif) {
		case "Easy":
			Es();
			console.log('dif = Easy');
			break;
		case "Normal":
			No();
			console.log('dif = Normal');
			break;
		case "Hard":
			Ha();
			console.log('dif = Hard');
			break;
		default:
			break;
		}
	};
	
	DifSet.setCheckGameMode = function () {
		GDT.on(GDT.eventKeys.saves.loading, DifSet.checkGameDif);
	};
	
	DifSet.runStartUp = function () {
		DifSet.addGameDifSelector();
		DifSet.setGameDif();
		DifSet.setCheckGameMode();
	};
	
	return DifSet;
	
	function applyDifSetting (difValue, difName) {
		/* Monthly Costs Change */
		General.getMonthlyCosts = function (company) {
			var costsPerMonth = 2E3 * 4 * difValue;
			if (company.currentLevel === 2 || company.currentLevel === 3)
				costsPerMonth *=
				4;
			else if (company.currentLevel === 4)
				costsPerMonth *= 8;
			if (company.flags.solarPowerInstalled)
				costsPerMonth *= 0.8;
			for (var i = 0; i < company.staff.length; i++)
				if (company.staff[i].salary)
					costsPerMonth += company.staff[i].salary;
			return costsPerMonth
		};
		
		/* Fans Change */
		Company.prototype.adjustFans = function (value) {
			var currentChange = this.fansChange ? this.fansChange : 0;
			var result = this.fans + (currentChange * difValue) + value;
			if (result < 0)
				this.fansChange = -this.fans;
			else
				this.fansChange = currentChange + value
		};
		
		/* Research Costs */
		Research.getPointsCost = function (r) {
			var v = r.v;
			if (!r.v)
				return r.pointsCost;
			var possiblevalues = [1,2, 4, 6, 8, 10, 12, 14];
			var index = possiblevalues.indexOf(v);
			if (index == -1)
				throw "invalid v";
			var basePoints = [10, 15, 40, 80, 100, 150, 250, 300];
			var points = basePoints[index] * difValue;
			if (r.pointsCostAdjustment)
				points += r.pointsCostAdjustment;
			return points
		};
		Research.getDevCost = function (r, game) {
			var v =
				r.v;
			if (!r.v)
				return r.cost;
			var possiblevalues = [1, 2, 4, 6, 8, 10, 12, 14];
			var index = possiblevalues.indexOf(v);
			if (index == -1)
				throw "invalid v";
			var values = [5, 10, 30, 60, 100, 150, 300, 400];
			var value = values[index] * 1E3 * difValue ;
			if (game) {
				value *= General.getGameSizeDurationFactor(game.gameSize) * General.getMultiPlatformCostFactor(game);
				value = Math.floor(value / 1E3) * 1E3
			}
			return value
		};
		Research.getEnginePoints = function (r) {
			if (r.enginePoints)
				return r.enginePoints;
			var v = r.v;
			if (!r.v)
				return 0;
			var possiblevalues = [1, 2, 4, 6, 8, 10, 12, 14];
			var index = possiblevalues.indexOf(v);
			if (index == -1)
				throw "invalid v";
			var values = [10, 15, 30, 40, 80, 120, 200, 300];
			return values[index] * difValue
		};
		Research.getEngineCost = function (r) {
			if (r.enginePoints === 0)
				return 0;
			if (r.engineCost)
				return r.engineCost;
			var v = r.v;
			if (!r.v)
				return 0;
			var possiblevalues = [1, 2, 4, 6, 8, 10, 12, 14];
			var index = possiblevalues.indexOf(v);
			if (index == -1)
				throw "invalid v";
			var values = [10, 30, 50, 100, 140, 180, 350, 500];
			return values[index] * 1E3 * difValue
		};
		
		/* Platform Prices */
		for (i = 0; i < Platforms.allPlatforms.length; i++) {
			c_platform = Platforms.allPlatforms[i];
			old_value = DifSet.store().oldValue;
			if (difValue != DifSet.store().oldValue) {
				c_platform.licencePrize /= old_value;
				c_platform.developmentCosts /= old_value;
			};
			c_platform.licencePrize *= difValue;
			c_platform.developmentCosts *= difValue;
		};
		
		/* Game Price */
		Sales.smallUnitPrice = Math.abs(7 / difValue);
		Sales.mediumUnitPrice = Math.abs(11 / difValue);
		Sales.largeUnitPrice = Math.abs(14 / difValue);
		Sales.aaaUnitPrice = Math.abs(18 / difValue);
		Sales.consoleUnitPrice = Math.abs(50 / difValue);
		DifSet.store().gameDif = difName;
		DifSet.store().oldValue = difValue;
	}
	
})();