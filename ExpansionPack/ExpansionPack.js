(function () {
	var ready = function () {
	/* Epic Random Features	*/			
		ExpPack.initCompatibilityChecks();
		ExpPack.addCustomPrice();
		ExpPack.addBlackBull();
		DifSet.runStartUp();
	/*									*/
			
	/* Adds topics to the game 	*/		
		ExpPack.addTopic();
	/*									*/
	
	/* Adds platforms to the game */		
		ExpPack.addPlatformGrapintosh();
		ExpPack.addPlatformGrMac();
		ExpPack.addPlatform3GS();
		ExpPack.addPlatform2GS();
		ExpPack.addPlatformGamelingColor();
		ExpPack.addPlatformViva();
		ExpPack.addPlatformPS2S();
		ExpPack.addPlatformItaraBackflash();
		ExpPack.addPlatformItara5200();
		ExpPack.addPlatformHoloBox();
		ExpPack.addPlatformMBox360S();
	/*									*/
		
	/* Adds events to the game 	*/		
		ExpPack.addEventCelebration();
		ExpPack.addEventCuriosity();
		ExpPack.addEventVac();
		ExpPack.addEventBilly();
		ExpPack.addEventMovieGame();
		ExpPack.addEventFire();
		ExpPack.addEventFirstMagazine();
		ExpPack.addEventSecMagazine();
	/*									*/
	
	/* Adds researches to the game		*/
		ExpPack.addResearch();
	/*									*/
	};

	var error = function () {
	};

	GDT.loadJs(['../gdt-modAPI/helpers/checks.js',
	'../gdt-modAPI/api/persistence.js',
	'../gdt-modAPI/api/events.js',
	'../gdt-modAPI/api/platforms.js',
	'../gdt-modAPI/api/topics.js',
	'../gdt-modAPI/api/research.js',
	'../gdt-modAPI/examples/examples.js',
	'../ExpansionPack/source/source.js',
	'../ExpansionPack/source/CC_AddOn.js',
	//'../ExpansionPack/source/Search_AddOn.js', Broken
	'../ExpansionPack/source/DifficultySettings_AddOn.js',
	'../UltimateLib/UltimateLib.js'
	], ready, error);
})();