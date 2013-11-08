(function () {
	var ready = function () {
	
		ExpPack.addTopic();
		ExpPack.addPlatform();
		ExpPack.addEventCelebration();
		ExpPack.addEventCuriosity();
	};

	requireLoad(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/ExpansionPack/examples/source.js',
	'mods/ExpansionPack/api/researches.js'
	], ready);
})();