(function () {
	var ready = function () {
	/* Epic Random Features				*/
		ExpPack.initCompatibilityChecks();
		ExpPack.addCustomPrice();
		ExpPack.addBlackBull();
	/*									*/
			
	/* Adds topics to the game 			*/
		ExpPack.addTopic();
	/*									*/
	
	/* Adds platforms to the game 		*/
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
		
	/* Adds events to the game 			*/
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

	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/ExpansionPack/source/source.js',
	'mods/ExpansionPack/source/CC_AddOn.js',
	'mods/ExpansionPack/api/labResearch.js'
	], ready, error);
})();