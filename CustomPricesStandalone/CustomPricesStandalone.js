(function () {
	var ready = function () {
	/* Epic Random Features	*/			
		ExpPack.initCompatibilityChecks();
		ExpPack.addCustomPrice();
		DifSet.runStartUp();
	/*									*/
	};

	var error = function () {
	};

	GDT.loadJs(['../gdt-modAPI/helpers/checks.js',
	'../gdt-modAPI/api/persistence.js',
	'../gdt-modAPI/api/events.js',
	'../ExpansionPack/source/source.js',
	], ready, error);
})();