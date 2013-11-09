(function () {
	var ready = function () {
		
	/* Adds topics to the game 			*/	
		ExpPack.addTopic();
	/*									*/	
	
	/* Adds platforms to the game 		*/	
		ExpPack.addPlatformGrapintosh();
		ExpPack.addPlatformGrMac();
		ExpPack.addPlatform3GS();
		ExpPack.addPlatform2GS();
		ExpPack.addPlatformViva();
	/*									*/
		
	/* Adds events to the game 			*/	
		ExpPack.addEventCelebration();
		ExpPack.addEventCuriosity();
		ExpPack.addEventVac();
		ExpPack.addEventBilly();
	/*									*/
	};

	requireLoad(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/ExpansionPack/examples/source.js'
	], ready);
})();