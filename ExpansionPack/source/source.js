var ExpPack = {};
(function () {
	/* Compatibility check */
	var compatibilityCheck = function(data){
		for (var i = 0; i < ModSupport.availableMods.length; i++) {
			var mod = ModSupport.availableMods[i];
			if(mod.url == "https://github.com/Turntablelover/Game-Dev-Tycoon-Mod" && mod.active){
				var div = $("body");
				div.append('<div id="ErrorContainer" class="windowBorder smallWindow" style="overflow:auto;display:none;"> <div id="cheatmodtop" class="windowTitle smallerWindowTitle">Compatibility Problem</div>');
				div = $("#ErrorContainer");
				div.append('<div id="error" style="margin-left:50px;width: 400px;" >Expansion Pack Mod is <span style="color:red;">NOT</span> compatible with VENOMOUS mod.</br></br> To continue using Expansion Pack Mod Please disable VENOMOUS mod in the mods menu and restart your Game Dev Tycoon</div>');
				div.append('<div id="mainmenubutton" class="selectorButton whiteButton" onclick="UI.toggleMainMenu()" style="display:inline-block;position: relative;margin-left:50px;width: 350px;" >Main Menu</div>');
				div.gdDialog({popout: !0,close: 0});
			}
		}
	};

	ExpPack.initCompatibilityChecks = function(){
		if(GDT.compatibilityCheckActive == 'undefined' || GDT.compatibilityCheckActive == null){
			GDT.on(GDT.eventKeys.saves.loading, compatibilityCheck);
			GDT.on(GDT.eventKeys.saves.saving, compatibilityCheck);
			GDT.compatibilityCheckActive = true;
		}
	};
	/*  */
	
	/* Topics */
	ExpPack.addTopic = function () {
		GDT.addTopics([
		{
		    id: "Alternate World",
		    name: "Alternate World".localize("game topic"),
		    genreWeightings: [0.7, 1, 0.9, 1, 0.8, 0.8],
			audienceWeightings: [0.7, 0.9, 1]
		}, {
		    id: "Archery",
		    name: "Archery".localize("game topic"),
		    genreWeightings: [1, 0.6, 0.9, 1, 1, 0.7],
		    audienceWeightings: [0.8, 0.8, 1]
		}, {
		    id: "Assassin",
		    name: "Assassin".localize("game topic"),
		    genreWeightings: [1, 0.9, 0.8, 1, 1, 0.6],
		    audienceWeightings: [0.6, 0.7, 1]
		}, {
		    id: "Astronaut",
		    name: "Astronaut".localize("game topic"),
		    genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
		    id: "Athletics",
		    name: "Athletics".localize("game topic"),
		    genreWeightings: [0.8, 0.6, 1, 0.8, 1, 0.9],
			audienceWeightings: [0.8, 1, 0.8]
		}, /* B */ {
	    	id: "Baking",
	    	name: "Baking".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.9, 1],
	    	audienceWeightings: [1, 0.9, 0.7]
		}, {
		    id: "Biathlon",
		    name: "Biathlon".localize("game topic"),
		    genreWeightings: [0.8, 1, 0.6, 1, 0.9, 1],
		    audienceWeightings: [0.8, 1, 0.9]
		}, {
			id: "Beat-em-up",
			name: "Beat-em-up".localize("game topic"),
			genreWeightings: [1, 0.6, 0.9, 0.6, 0.8, 0.9],
			audienceWeightings: [0.6, 0.8, 1]
		}, {
	    	id: "Board Game",
	    	name: "Board Game".localize("game topic"),
	    	genreWeightings: [0.8, 0.6, 0.7, 0.6, 0.9, 1],
	    	audienceWeightings: [1, 1, 0.8]
		}, {
		    id: "Bobsleigh",
		    name: "Bobsleigh".localize("game topic"),
		    genreWeightings: [1, 0.6, 0.9, 0.8, 0.9, 0.7],
		    audienceWeightings: [0.6, 0.8, 1]
		}, /* C */ {
		    id: "Canoeing",
		    name: "Canoeing".localize("game topic"),
		    genreWeightings: [0.8, 0.9, 1, 0.7, 1, 0.8],
		    audienceWeightings: [0.8, 1, 0.9]
		}, {
		    id: "Card Game",
		    name: "Card Game".localize("game topic"),
		    genreWeightings: [0.6, 0.6, 1, 0.8, 0.9, 1],
		    audienceWeightings: [1, 1, 0.9]
		}, {
		    id: "Cavemen",
		    name: "Cavemen".localize("game topic"),
		    genreWeightings: [0.9, 1, 1, 0.6, 0.6, 0.9],
		    audienceWeightings: [1, 1, 0.9]
		}, {
		    id: "Chess",
		    name: "Chess".localize("game topic"),
		    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 1],
		    audienceWeightings: [0.6, 1, 0.9]
		}, {
		    id: "Construction",
		    name: "Construction".localize("game topic"),
		    genreWeightings: [0.6, 0.6, 0.7, 1, 0.9, 1],
		    audienceWeightings: [1, 0.8, 0.7]
		}, {
		    id: "Crime",
		    name: "Crime".localize("game topic"),
		    genreWeightings: [1, 0.8, 0.7, 1, 0.7, 0.9],
		    audienceWeightings: [0.6, 0.8, 1]
		}, {
		    id: "Cycling",
		    name: "Cycling".localize("game topic"),
		    genreWeightings: [0.9, 1, 0.8, 0.8, 1, 0.9],
		    audienceWeightings: [0.8, 1, 0.9]
		},  /* D */ {
			id: "Dark Fantasy",
			name: "Dark Fantasy".localize("game topic"),
			genreWeightings: [1, 0.8, 1, 0.6, 1, 0.6],
			audienceWeightings: [0.6, 0.6, 1]
		}, {
	    	id: "Demons",
	    	name: "Demons".localize("game topic"),
	    	genreWeightings: [1, 0.8, 1, 0.6, 0.6, 0.6],
	    	audienceWeightings: [0.6, 0.7, 1]
		}, {
	    	id: "Dinosaurs",
	    	name: "Dinosaurs".localize("game topic"),
	    	genreWeightings: [1, 0.9, 0.6, 0.9, 0.7, 0.6],
	    	audienceWeightings: [1, 0.9, 0.7]
		}, {
	    	id: "Doctor",
	    	name: "Doctor".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.9, 1, 1, 0.7],
	    	audienceWeightings: [0.6, 0.8, 1]
		}, {
			id: "Doomsday",
			name: "Doomsday".localize("game topic"),
			genreWeightings: [1, 1, 0.8, 0.6, 0.7, 0.6],
			audienceWeightings: [0.6, 0.7, 1]
		}, /* E */ {
		    id: "E-Sports",
		    name: "E-Sports".localize("game topic"),
		    genreWeightings: [1, 0.6, 1, 1, 1, 0.6],
		    audienceWeightings: [1, 1, 1]
		}, {
		    id: "Educational",
		    name: "Educational".localize("game topic"),
		    genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
		    audienceWeightings: [1, 0.8, 0.6]
		}, /* F */ {
		    id: "Fairy Tale",
		    name: "Fairy Tale".localize("game topic"),
		    genreWeightings: [0.8, 1, 0.8, 0.8, 0.6, 1],
		    audienceWeightings: [1, 0.8, 0.6]
		}, {
		    id: "Fishing",
		    name: "Fishing".localize("game topic"),
		    genreWeightings: [0.6, 0.7, 0.9, 1, 1, 0.8],
		    audienceWeightings: [0.7, 1, 0.9]
		}, {
		    id: "Football",
		    name: "Football".localize("game topic"),
		    genreWeightings: [1, 0.7, 1, 0.8, 1, 0.9],
		    audienceWeightings: [0.9, 1, 0.9]
		}, {
		    id: "Formula 1",
		    name: "Formula 1".localize("game topic"),
		    genreWeightings: [1, 0.8, 0.8, 0.8, 1, 1],
		    audienceWeightings: [0.7, 1, 1]
		}, /* G */ {
		    id: "Game Pack",
		    name: "Game Pack".localize("game topic"),
		    genreWeightings: [0.8, 0.8, 0.8, 0.8, 0.8, 1],
		    audienceWeightings: [0.8, 1, 0.7]
		}, {
		    id: "Ghosts",
		    name: "Ghosts".localize("game topic"),
		    genreWeightings: [0.8, 1, 0.9, 0.6, 0.6, 0.8],
		    audienceWeightings: [1, 0.8, 0.9]
		}, {
		    id: "Goblin",
		    name: "Goblin".localize("game topic"),
		    genreWeightings: [0.9, 1, 1, 0.8, 0.6, 1],
		    audienceWeightings: [0.9, 1, 0.9]
		}, {
		    id: "Gods",
		    name: "Gods".localize("game topic"),
		    genreWeightings: [1, 1, 1, 0.7, 0.8, 0.6],
		    audienceWeightings: [0.7, 1, 0.9]
		}, /* H */ {
		    id: "Hide and Seek",
		    name: "Hide and Seek".localize("game topic"),
		    genreWeightings: [0.6, 1, 0.7, 0.8, 0.7, 1],
		    audienceWeightings: [1, 0.9, 0.6]
		}, {
		    id: "Hockey",
		    name: "Hockey".localize("game topic"),
		    genreWeightings: [0.8, 0.6, 0.7, 1, 1, 0.7],
		    audienceWeightings: [0.9, 1, 0.9]
		}, {
		    id: "Horse Racing",
		    name: "Horse Racing".localize("game topic"),
		    genreWeightings: [1, 0.7, 0.9, 0.8, 1, 0.7],
		    audienceWeightings: [0.7, 0.8, 1]
		}, /* I */ {
		    id: "Ice Hockey",
		    name: "Ice Hockey".localize("game topic"),
		    genreWeightings: [1, 0.6, 0.9, 0.8, 1, 0.7],
		    audienceWeightings: [0.8, 0.9, 1]
		}, /* J */ {
		    id: "Judo",
		    name: "Judo".localize("game topic"),
		    genreWeightings: [1, 0.6, 0.8, 1, 1, 0.7],
		    audienceWeightings: [0.7, 1, 1]
		}, /* K */ {
		    id: "Karate",
		    name: "Karate".localize("game topic"),
		    genreWeightings: [1, 0.7, 1, 0.7, 1, 0.7],
		    audienceWeightings: [0.7, 0.9, 1]
		}, /* M */ {
	    	id: "Maze",
	    	name: "Maze".localize("game topic"),
	    	genreWeightings: [0.8, 0.8, 0.9, 1, 0.9, 1],
	    	audienceWeightings: [0.8, 1, 0.9]
		}, {
	    	id: "Mining",
	    	name: "Mining".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.9, 0.8, 0.7, 1],
	    	audienceWeightings: [1, 0.9, 0.7]
		}, {
		    id: "Motorcross",
		    name: "Motorcross".localize("game topic"),
		    genreWeightings: [1, 1, 0.8, 0.6, 0.9, 0.7],
		    audienceWeightings: [0.8, 0.9, 1]
		}, {
			id: "Modern",
			name: "Modern".localize("game topic"),
			genreWeightings: [1, 0.8, 0.6, 0.6, 0.8, 0.6],
			audienceWeightings: [0.7, 0.9, 1]
		}, {
		    id: "Mummies",
		    name: "Mummies".localize("game topic"),
		    genreWeightings: [1, 1, 0.7, 0.7, 0.7, 1],
		    audienceWeightings: [0.7, 1, 0.8]
		}, /* P */ {
	    	id: "Parkour",
	    	name: "Parkour".localize("game topic"),
	    	genreWeightings: [1, 1, 0.7, 1, 0.9, 0.6],
	    	audienceWeightings: [0.7, 0.9, 1]
		}, {
	    	id: "Point & Click",
	    	name: "Point & Click".localize("game topic"),
	    	genreWeightings: [0.7, 1, 0.7, 1, 0.9, 1],
	    	audienceWeightings: [0.9, 1, 0.7]
		}, {
	    	id: "Police",
	    	name: "Police".localize("game topic"),
	    	genreWeightings: [1, 0.9, 0.7, 0.9, 0.7, 0.6],
	    	audienceWeightings: [0.9, 1, 0.7]
		}, {
	    	id: "Politics",
	    	name: "Politics".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.8, 1, 1, 0.7],
	    	audienceWeightings: [0.6, 0.8, 1],
	    	missionOverrides: [
			[0, 0, 0, 1, 0.8, 0.9, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0.8, 0.9, 1, 1, 0.8, 0.9, 1, 0.9, 0.8],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0.9, 0, 0, 0, 0]
			]
		}, {
	    	id: "Puzzle",
	    	name: "Puzzle".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 0.7, 1, 1],
	    	audienceWeightings: [1, 1, 0.9]
	    }, /* R */ {
		    id: "Rage",
		    name: "Rage".localize("game topic"),
		    genreWeightings: [1, 0.6, 0.6, 0.6, 0.9, 1],
		    audienceWeightings: [0.6, 0.9, 1]
		}, {
			id: "Robot",
			name: "Robot".localize("game topic"),
			genreWeightings: [1, 0.8, 0.8, 0.7, 1, 0.9],
			audienceWeightings: [1, 0.9, 0.8]
		}, {
			id: "Rugby",
			name: "Rugby".localize("game topic"),
			genreWeightings: [1, 0.7, 1, 0.7, 1, 0.7],
			audienceWeightings: [0.7, 0.9, 1]
		}, /* S */ {
		    id: "Sailing",
		    name: "Sailing".localize("game topic"),
		    genreWeightings: [0.8, 1, 0.9, 0.9, 1, 0.8],
		    audienceWeightings: [0.7, 1, 0.8]
		}, {
			id: "Samurais",
			name: "Samurais".localize("game topic"),
			genreWeightings: [1, 0.7, 0.9, 0.7, 0.9, 0.6],
			audienceWeightings: [0.7, 0.9, 1]
		}, {
			id: "Science",
			name: "Science".localize("game topic"),
			genreWeightings: [0.6, 0.6, 0.7, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.9]
		}, {
		    id: "Steampunk",
		    name: "Steampunk".localize("game topic"),
		    genreWeightings: [1, 0.9, 1, 1, 0.7, 0.9],
		    audienceWeightings: [0.7, 1, 0.9]
		}, {
		    id: "Skiing",
		    name: "Skiing".localize("game topic"),
		    genreWeightings: [1, 0.9, 0.9, 1, 0.8, 0.7],
		    audienceWeightings: [0.8, 1, 0.8]
		}, {
		    id: "Super Villain",
		    name: "Super Villain".localize("game topic"),
		    genreWeightings: [1, 0.7, 0.9, 0.7, 1, 0.8],
		    audienceWeightings: [1, 0.8, 0.7]
		}, {
		    id: "Surfing",
		    name: "Surfing".localize("game topic"),
		    genreWeightings: [1, 0.9, 0.9, 0.8, 1, 0.8],
		    audienceWeightings: [0.8, 1, 0.7]
		}, {
		    id: "Survival",
		    name: "Survival".localize("game topic"),
		    genreWeightings: [0.9, 1, 1, 0.8, 1, 0.6],
		    audienceWeightings: [0.8, 1, 0.9]
		}, {
		    id: "Swimming",
		    name: "Swimming".localize("game topic"),
		    genreWeightings: [0.8, 0.9, 1, 0.7, 1, 1],
		    audienceWeightings: [0.8, 1, 0.9]
		}, /* T */ {
		    id: "Table Tennis",
		    name: "Table Tennis".localize("game topic"),
		    genreWeightings: [0.8, 0.9,0.8, 1, 1, 0.8],
		    audienceWeightings: [0.8, 1, 0.9]
		}, {
		    id: "Tennis",
		    name: "Tennis".localize("game topic"),
		    genreWeightings: [1, 0.9, 0.8, 0.8, 1, 0.9],
		    audienceWeightings: [0.8, 1, 0.9]
		}, {
  			id: "Tower Defense",
   			name: "Tower Defense".localize("game topic"),
   			genreWeightings: [1, 0.7, 0.6, 0.9, 1, 0.7],
   			audienceWeightings: [0.6, 1, 0.8]

		}, /* V */ {
			id: "Vikings",
			name: "Vikings".localize("game topic"),
			genreWeightings: [1, 0.8, 1, 0.7, 0.8, 0.6],
			audienceWeightings: [0.7, 0.9, 1]
		}, /* W */ {
			id: "War",
			name: "War".localize("game topic"),
			genreWeightings: [1, 0.8, 0.9, 0.8, 0.6, 0.6],
			audienceWeightings: [0.6, 0.9, 1]
		}, {
			id: "Warlocks",
			name: "Warlocks".localize("game topic"),
			genreWeightings: [1, 0.8, 0.8, 1, 0.7, 0.6],
			audienceWeightings: [0.8, 0.9, 1]
		}, {
		    id: "Witches",
		    name: "Witches".localize("game topic"),
		    genreWeightings: [0.7, 1, 0.9, 0.6, 0.9, 1],
		    audienceWeightings: [1, 0.9, 0.7]
		}, {
		    id: "Wizzards",
		    name: "Wizzards".localize("game topic"),
		    genreWeightings: [1, 1, 0.9, 0.7, 0.8, 0.9],
		    audienceWeightings: [0.7, 1, 0.9]
		}, {
			id: "Wrestling",
			name: "Wrestling".localize("game topic"),
			genreWeightings: [1, 0.6, 0.9, 0.8, 1, 0.7],
			audienceWeightings: [0.6, 0.9, 1]
		}]);
	};
	/*  */

	/* Platforms */

	/* Grapple */
	ExpPack.addPlatformGrapintosh = function () {
		var icon = './mods/ExpansionPack/source/img/Grapple.png';
		GDT.addPlatform(
			{
				id: 'Grapintosh',
				name: 'Grapintosh',
				company: 'Grapple',
				startAmount: 0.351,
				unitsSold: 0.534,
				marketKeyPoints: [{date: "2/3/2",amount: 0.215}, {date: "5/7/4",amount: 0.478}, {date: "11/9/3",amount: 0.738}],
				licencePrize: 20000,
				published: '1/7/4',
				platformRetireDate: '4/6/2',
				developmentCosts: 25000,
				genreWeightings: [1, 0.8, 0.9, 1, 1, 0.7],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '12111996-0000-0000-0000-DZJENGISKHAN',
						date: '1/5/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Grapple, a new hardware manufacturer, has announced a brand new computer - the Grapintosh. The Grapintosh comes with a new advanced operating system called Grap OS. Even though the new platform is expensive, you get value for your money. Grapple said that the Grapintosh will become available {0}".localize().format(General.getETADescription('1/5/1', '1/7/4')),
								image: icon
							});
						}
					}
				]
			});
	};

	ExpPack.addPlatformGrMac = function () {
		var icon = './mods/ExpansionPack/source/img/grMac.png';		
		GDT.addPlatform(
			{
				id: '12111996-0000-0000-0001-DZJENGISKHAN',
				name: 'grMac',
				company: 'Grapple',
				startAmount: 2.6,
				unitsSold: 5.434,
				licencePrize: 40000,
				published: '16/8/1',
				platformRetireDate: '260/12/4',
				developmentCosts: 25000,
				genreWeightings: [1, 0.9, 1, 1, 1, 0.8],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 6,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0000-0001-DZJENGISKHAN',
						date: '16/5/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple, developer of the very successful Grapintosh, has announced a new platform called the grMac. Grapple has managed to implement all the hardware in the screen and named it a 'All-In-One' computer.{n} Despite the compact hardware, it still has all the power expected from Grapple. The grMac will be released {0}".localize().format(General.getETADescription('16/5/4', '16/8/1')),
								image: icon
							});
						}
					}
				]
			});
	};
	/*  */

	/* Itara */
	ExpPack.addPlatformItaraBackflash = function () {
		var icon = './mods/ExpansionPack/source/img/Itara.png';
		GDT.addPlatform(
			{
				id: '31102000-2-1-4-1-LINELIAR',
				name: 'Itara Backflash',
				company: 'Itara',
				startAmount: 1.3,
				unitsSold: 4.2,
				licencePrize: 150000,
				published: '12/11/3',
				platformRetireDate: '16/1/2',
				developmentCosts: 125000,
				genreWeightings: [0.8, 1, 0.6, 0.7, 1, 0.6],
				audienceWeightings: [0.8, 1, 0.7],
				techLevel: 2,
				iconUri: icon,
				events: [
					{
						id: '31102000-2-1-4-1-1-LINELIAR',
						date: '12/7/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today Itara, a company known for their consoles in the early console market, has announced that they're going to release a new console - the Itara Backflash.{n} Despite inevitable competition with the TES 64, Itara has announced that they are anticipating the console to be very successful.{n} The Itara Backflash will be released on {0}.".localize().format(General.getETADescription('12/7/3', '12/11/3')),
								image: icon
							});
						}
					}
				]
			});
	};
	
	ExpPack.addPlatformItara5200 = function () {
		var icon = './mods/ExpansionPack/source/img/itara5200.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0100-0001-DZJENGISKHAN',
				name: 'Itara 5200',
				company: 'Itara',
				startAmount: 0.4,
				unitsSold: 0.462,
				licencePrize: 45000,
				published: '2/11/2',
				platformRetireDate: '6/4/2',
				developmentCosts: 25000,
				genreWeightings: [0.8, 1, 1, 0.9, 0.7, 1],
				audienceWeightings: [0.8, 1, 0.7],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '31102000-2-1-4-1-2-LINELIAR',
						date: '2/9/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Itara announced their first platform, the Itara 5200.{n} The console uses an analogue joystick and has to compete with the popular TES from Ninvento.\nThe Itara 5200 will be released in {0}.".localize().format(General.getETADescription('2/9/1', '2/11/2')),
								image: icon
							});
						}
					}
				]
			});
	};
	/*  */

	/* Ninvento */	
	ExpPack.addPlatform3GS = function () {
		var icon = './mods/ExpansionPack/source/img/3GS.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0001-0000-DZJENGISKHAN',
				name: '3GS',
				company: 'Ninvento',
				startAmount: 1.5,
				unitsSold: 3.582,
				licencePrize: 100000,
				published: '21/9/3',
				platformRetireDate: '24/5/1',
				developmentCosts: 80000,
				genreWeightings: [0.7, 1, 0.8, 1, 0.6, 1],
				audienceWeightings: [0.9, 1, 0.6],
				techLevel: 4,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0001-0000-DZJENGISKHAN',
						date: '21/5/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today Ninvento, known for the GS, has announced that they are going to release its successor, the 3GS. This handheld console will have 3D animations - the first of its kind in the handheld market.{n} Ninvento stated that the 3GS is will get released {0}.".localize().format(General.getETADescription('21/5/1', '21/9/3')),
								image: icon
							});
						}
					}
				]
			});
	};

	ExpPack.addPlatform2GS = function () {
		var icon = './mods/ExpansionPack/source/img/2GS.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0001-0001-DZJENGISKHAN',
				name: '2GS',
				company: 'Ninvento',
				startAmount: 2.125,
				unitsSold: 3.634,
				licencePrize: 250000,
				published: '23/4/2',
				platformRetireDate: '29/2/1',
				developmentCosts: 150000,
				genreWeightings: [0.7, 0.8, 0.9, 1, 0.6, 1],
				audienceWeightings: [1, 0.8, 0.6],
				techLevel: 5,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0001-0001-DZJENGISKHAN',
						date: '21/1/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today is the day that Ninvento announced to make another handheld console following up the 3GS, the 2GS. While the 2GS has the same mechanics as the 3GS, it features better graphics and, by extension, better gameplay. The 2GS will be released {0}.".localize().format(General.getETADescription('21/1/4', '21/4/2')),
								image: icon
							});
						}
					}
				]
			});
	};

	ExpPack.addPlatformGamelingColor = function () {
		var gameling = Platforms.allPlatforms.first(function(p){return p.id == 'Gameling';});
		if (gameling){
			gameling.platformRetireDate = '10/4/2';
		}
		
		var icon = './mods/ExpansionPack/source/img/gamelingColor.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0001-0010-DZJENGISKHAN',
				name: 'Gameling Color',
				company: 'Ninvento',
				startAmount: 0.7,
				unitsSold: 0.854,
				licencePrize: 15000,
				published: '9/11/2',
				platformRetireDate: '15/2/1',
				developmentCosts: 80000,
				genreWeightings: [0.7, 0.9, 1, 0.9, 0.6, 1],
				audienceWeightings: [1, 0.8, 0.6],
				techLevel: 3,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0001-0010-DZJENGISKHAN',
						date: '9/8/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Ninvento just announced their next platform! The Gameling Color, as it is called, is another handheld console, featuring a 160x144 resolution with over 30k colors.{n} We are not sure if it will overtake the success of the original Gameling but we can not wait! Ninvento said the Gameling Color will be released {0}".localize().format(General.getETADescription('9/8/4', '9/11/2')),
								image: icon
							});
						}
					}
				]
			});
	};
	/*  */
	
	/* Vonny */
	ExpPack.addPlatformViva = function () {		
		var icon = './mods/ExpansionPack/source/img/vivaPlaysystem.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0010-0000-DZJENGISKHAN',
				name: 'Viva Playsystem',
				company: 'Vonny',
				startAmount: 4.635,
				unitsSold: 5.430,
				licencePrize: 750000,
				published: '22/6/2',
				platformRetireDate: '29/2/1',
				developmentCosts: 300000,
				genreWeightings: [0.7, 0.8, 0.9, 1, 0.6, 1],
				audienceWeightings: [1, 0.8, 0.6],
				techLevel: 6,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0010-0001-DZJENGISKHAN',
						date: '22/3/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Vonny, developer of the PPS platform, has been spreading rumors that they are working on a new platform called 'Viva Playsystem' or 'VPS' in short.{n} They haven't released much info about the VPS but they claim that the new handheld console will be released {0}".localize().format(General.getETADescription('22/3/4', '22/6/2')),
								image: icon
							});
						}
					}
				]
			});
	};
	
	ExpPack.addPlatformPS2S = function () {		
		var icon = './mods/ExpansionPack/source/img/playSystem2Slim.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0010-0001-DZJENGISKHAN',
				name: 'Playsystem 2 Slim',
				company: 'Vonny',
				startAmount: 1.4,
				unitsSold: 2.7,
				licencePrize: 350000,
				published: '12/2/2',
				platformRetireDate: '19/1/3',
				developmentCosts: 70000,
				genreWeightings: [1, 0.8, 1, 0.9, 0.7, 0.9],
				audienceWeightings: [0.9, 1, 0.8],
				techLevel: 5,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0010-0010-DZJENGISKHAN',
						date: '11/11/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Vonny just released info on an improved version of their successful Playsystem 2. Vonny called the new platform the 'Playsystem 2 Slim'.{n} Although not the most original name, they claim that the Playsystem 2 Slim has better hardware than the original Playsystem 2.\nVonny was not very clear about the release date but we expect it {0}".localize().format(General.getETADescription('11/11/4', '12/2/2')),
								image: icon
							});
						}
					}
				]
			});
	};
	/*  */
	
	/* Holo Corp */
	ExpPack.addPlatformHoloBox = function () {
    	var icon = './mods/ExpansionPack/source/img/HoloBox.png';
        GDT.addPlatform(
	        {
	        	id: '12111996-0000-0011-0000-DZJENGISKHAN',
	        	name: 'Holo Box',
	        	company: 'Holo Corp',
	         	startAmount: 1.7,
	        	unitsSold: 5.3,
	        	licencePrize: 250000,
	            published: '20/1/1',
	            platformRetireDate: '260/12/4',
	            developmentCosts: 150000,
	            genreWeightings: [0.9, 0.8, 0.7, 1, 0.7, 0.6],
	            audienceWeightings: [0.7, 0.8, 1],
	            techLevel: 7,
	            iconUri: icon,
	            events: [
	            	{
	                	id: '12111996-1111-0011-0001-DZJENGISKHAN',
	                	date: '19/9/3',
	                    getNotification: function (company) {
							return new Notification({
	                    	   	header: "Industry News".localize(),
	                           	text: "Today Holo Corp, a new gaming company, has announced that they will be releasing their first console, the Holo Box. It displays games using holographic technology and eradicates the need for game disks by loading games into a flash drive which is plugged into the console, reducing the cost of games. They are anticipating that the Holo Box will be a huge success. It will be released {0}".localize().format(General.getETADescription('19/9/3', '20/1/1')),
	                        	image: icon
	                        });
	                    }
					}
				]
			});
	};
	/*  */
	
	/* Mirconoft */
	ExpPack.addPlatformMBox360S = function () {
    	var icon = './mods/ExpansionPack/source/img/mBox360Slim.png';
        GDT.addPlatform(
	        {
	        	id: '12111996-1111-0100-0000-DZJENGISKHAN',
	        	name: 'mBox 360 Slim',
	        	company: 'Mirconoft',
	         	startAmount: 2,
	        	unitsSold: 3.2,
	        	licencePrize: 500000,
	            published: '17/4/4',
	            platformRetireDate: '24/9/3',
	            developmentCosts: 80000,
	            genreWeightings: [1, 0.9, 1, 0.9, 0.7, 0.9],
	            audienceWeightings: [0.8, 0.9, 1],
	            techLevel: 5,
	            iconUri: icon,
	            events: [
	            	{
	                	id: '12111996-1111-0100-0001-DZJENGISKHAN',
	                	date: '17/1/1',
	                    getNotification: function (company) {
	                    	return new Notification({
	                        	header: "Industry News".localize(),
	                        	text: "Mirconoft announced their improvement on their mBox 360, called the mBox 360 Slim.\nAccording to the critics, Mirconoft didn't make huge improvements and thus they are curious to see how the market will respond. {n} The mBox 360 Slim will be released {0}".localize().format(General.getETADescription('17/1/1', '17/4/4')),
	                        	image: icon
	                        });
	                    }
					}
				]
			});
	};
	/*  */
	
	/* Events */
	ExpPack.addEventCelebration = function () {
		var eventId = "12111996-0001-0000-0000-DZJENGISKHAN";
		
		var Celebration = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				
				return company.currentLevel == 1 && company.isGameProgressBetween(0.8, 0.9);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "You have almost finished {0}! You could throw a party for the neighbourhood to celebrate it, but of course it'll cost some money...".localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "Celebration party?".localize(),
					text: msg,
					options: ["Party time!", "No party"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Party time!!".localize(),
						text: "The party was a massive success. Everybody was really impressed with your work."
					});
					n.adjustCash(-500, "Party");
					n.adjustHype(5 + 10 * company.getRandom());

					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "No party".localize(),
						text: "Looks like things will be quiet tonight."
					});
					return;
				}
			}
		};
		GDT.addEvent(Celebration);
	};
	
	ExpPack.addEventCuriosity = function () {
		var eventId = "12111996-0001-0000-0001-DZJENGISKHAN";
		
		var fanCuriosity = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				
				return company.currentLevel == 3 && company.isGameProgressBetween(0.2, 0.9);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "Boss, our fans have discovered that we're developing {0} and they're wondering what it's about. We've got three options: we could tell them everything, tell them a little, or we could just ignore them, hoping this doesn't hurt them too much. There's some valuable hype available, but is it worth it?".localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "Give information?".localize(),
					text: msg,
					options: ["Give them what they want!", "Tell them a little", "Don't tell them!"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Give them what they want!".localize(),
						text: "Your fans are excited about what you have told them and they are spreading your word across the world!"
					});
					n.adjustHype(5 + 6 * company.getRandom());
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Tell them a little".localize(),
						text: "Your fans are excited about your information, but they also think you could have said a bit more."
					});
					n.adjustHype(5 + 3 * company.getRandom());
					return;
				}
				if (decision === 2) {
					var n = new Notification({
						header: "Don't tell them!".localize(),
						text: "Your fans are a bit disappointed in you."
					});
					return;
				}
			}
		};
		GDT.addEvent(fanCuriosity);
	};
	
	ExpPack.addEventVac = function () {
		var eventId = "12111996-0001-0000-0010-DZJENGISKHAN";
			
		var vacuumCleaner = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				
				return company.currentLevel == 1 && company.isGameProgressBetween(0.6, 0.9) && company.gameLog.length > 4;
			},
			getNotification: function (company) {
				var game = company.currentGame;
	
				var msg = "While you were working on your game, someone knocked on the door of the garage - a man who wants to sell you a vacuum cleaner. Do you want to buy the vacuum cleaner for 4K?".localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "The Vacuum Cleaner".localize(),
					text: msg,
					options: ["Buy it!", "Ask to leave", "Denounce him"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;
	
				if (decision === 0) {
					var n = new Notification({
						header: "The Vacuum Cleaner".localize(),
						text: "You buy the vacuum cleaner. After doing a garage clean-up, you win the prize for the cleanest games industry garage! Now everyone knows about the game you're working on!"
					});
					n.adjustHype(5 + 10 * company.getRandom());
					n.adjustCash(-4000, "Vacuum Cleaner");
					
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "It's me again!".localize(),
						text: "He leaves... but soon after, he comes back. However, this time he convinces you to buy that vacuum cleaner. Bye bye, 4K."
					});
					n.adjustCash(-4000, "Vacuum Cleaner");
					company.notifications.push(n);
					return;
				}
				if (decision === 2) {
					var n = new Notification({
						header: "The Vacuum Cleaner".localize(),
						text: "'After you denounced me I thought it was a good idea to give you a bad reputation with the media! But that didn't work out, you just got your game hyped!' was the last thing he said before walking away in an angry mood."
					});
					n.adjustHype(15 + 25 * company.getRandom());
					company.activeNotifications.addRange(n.split());
					return;
				}
			}
		};
		GDT.addEvent(vacuumCleaner);
	};
	
	ExpPack.addEventBilly = function () {
		var eventId = "12111996-0001-0000-0011-DZJENGISKHAN";

		var billyBrakeIn = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				return company.currentLevel == 2 && company.isGameProgressBetween(0.2, 0.9);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "It seems that kids in the neighbourhood have started chatting about your upcoming game {0}. Rumour has it that Billy, your neighbour's kid, snuck into the garage and spied on some of the design papers.{n}How he managed to do this is a mystery. You could swear you were sitting in the garage the entire time!\nHow do you want to react?\n\nYou could talk to the parents to get him punished, ignore the incident or maybe invite some of the neighbours over to show them more of the game."
					.localize().format(game.title);
				
				company.adjustHype(5 + 10 * company.getRandom());

				return new Notification({
					sourceId: eventId,
					header: "Billy, the kid".localize(),
					text: msg,
					options: ["Talk to parents", "Ignore incident", "Invite over"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Billy, the kid".localize(),
						text: "You talk to the parents about Billy's actions and they promise that it won't happen again."
					});
					n.adjustHype(5 + 10 * company.getRandom());

					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Vanished documents".localize(),
						text: "The other day, you were working on some intricate design documents - now, however, they're gone. Small foot prints on the floor suggest that someone might have taken them.\nUnfortunately you have to recreate the documents - this was probably Billy's work",
						weeksUntilFired: 1 + 2 * company.getRandom()
					});
					n.adjustCash(-500, "Document Restoration");
					company.notifications.push(n);
					return;
				}
				if (decision === 2) {
					var n = new Notification({
						header: "Billy, the kid".localize(),
						text: "You invite Billy, his parents and a few other interested neighbours over and show them the game in progress. The kids are very excited and you hear them talk about it for weeks afterwards."
					});
					n.adjustHype(15 + 25 * company.getRandom());
					company.activeNotifications.addRange(n.split());
					return;
				}
			}
		};

		GDT.addEvent(billyBrakeIn);
	};
	
	ExpPack.addEventMovieGame = function () {
		var eventId = "12111996-0001-0000-0100-DZJENGISKHAN";

		var movieGame = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				return company.currentLevel == 3 && company.isGameProgressBetween(0.5, 0.9);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "Boss, a movie director has approached us with the option of making a movie from {0}! If we agree to this, we will get a lot of valuable hype, but it won't be free".localize().format(game.title);

				return new Notification({
					sourceId: eventId,
					header: "Make a movie".localize(),
					text: msg,
					options: ["Sign the contract", "Don't make a movie"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "A movie there shall be!".localize(),
						text: "The movie received a great response - we even gained some more fans!"
					});
					n.adjustHype(10 + 15 * company.getRandom());
					n.adjustFans(250);

					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "No movie".localize(),
						text: "You refused the offer and everything went on as normal."
					});
					return;
				}
			}
		};

		GDT.addEvent(movieGame);
	};
	
	ExpPack.addEventFire = function () {
		var eventId = "12111996-0001-0000-0101-DZJENGISKHAN";

		var fire = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				return company.currentLevel == 4 && company.isGameProgressBetween(0.5, 0.9);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "Oh my god! A fire broke out! We all need to leave! Now!{n} .... After the fire has been extinguished you take a look inside - as expected, there's a lot of damage.".localize().format(game.title);

				return new Notification({
					sourceId: eventId,
					header: "Fire in the office!!".localize(),
					text: msg,
					options: ["Repair everything"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Repairs".localize(),
						text: "You were able to save your current project but the repair was expensive. This game had better be worth it."
					});
					n.adjustCash(-15000, "Fire damage");

					company.activeNotifications.addRange(n.split());
					return;
				}
			}
		};

		GDT.addEvent(fire);
	};
	
	ExpPack.addEventFirstMagazine = function () {
		var eventId = "12111996-0001-0000-0110-DZJENGISKHAN";
		
		var WelcomeToIndustry = {
			id: eventId,
			isRandom: false,
			date: '4/8/3',
			ignoreGameLengthModifier: false,
			getNotification: function (company) {
            	var msg = "Gamer Pride magazine would like you to give an interview as a part of their 'New Stars in the Game Industry' action to promote the games industry and upcoming game developers - this is a big part of their project.\n\n What would you like to discuss?.".localize();
				return new Notification({
					sourceId: eventId,
					header: "Magazine Interview".localize(),
					text: msg,
					options: ["Nothing, thank you.", "The current games industry", "My dreams"]
				});
			},
                       
			complete: function (decision) {
                       
				var company = GameManager.company;
                               
				if (decision === 0) {
					var n = new Notification({
						header: "Magazine Interview".localize(),
						text: "You declined - Gamer Pride magazine is disappointed but nothing bad has come of it."
					});    
					company.activeNotifications.addRange(n.split());
					return;                                                                                        
				}
				if (decision === 1) {
                	var n = new Notification({
                    header: "Magazine Interview".localize(),
                    text: "You tell the magazine that nowadays the games industry is relatively small and a great opportunity for people like you to find their place and grow.{n} The interviewer asked what you predict the future of the games industry will be like.\n\n You answered that progress in the electronics industry will mean there will be more platforms around, as well as giving a great chance for new innovation in the games industry."
               	});
                   	n.adjustFans(200);
                    company.notifications.push(n);
                                       
                    var m = new Notification ({
                    	header: "Sponsorship".localize(),
                    	text: "Some electronic companies appreciated that you mentioned them in your recent interview. A company called RBM contacted to you and gave you some money as a gift for your current project. They hope that cooperation between them and game developers will boost both industries."
                    });
                	if(company.isGameProgressBetween(0.2, 0.9)) {
                    	m.adjustCash(40000, "RBM Sponsorship");
                    	m.adjustHype(5 + 15 * company.getRandom());
                    	company.notifications.push(m);
                    }
                    return;                        
                }
                if (decision === 2) {
                	var n = new Notification({
                    	header: "Magazine Interview".localize(),
                        text: "Your dream is to find a 'golden solution' that will push your company and the games industry as a whole to the next level. \nYou say that right now is a great time to grow since the games business is relatively new. You hope that in 4 or 5 years the company will grow and you will be able to work on more ambitious projects.{n} The interviewer asked if you can predict the future of the games industry.\n\n You answered that God only knows what the future may bring."
                    });
                	n.adjustFans(100);
                	if (company.isGameProgressBetween(0.2, 0.9)) {
                    	n.adjustHype(5 + 15 * company.getRandom());
                    }
                    company.notifications.push(n);
                    return;             
               	}
			}
        };
        
        GDT.addEvent(WelcomeToIndustry);
	};
	
	ExpPack.addEventSecMagazine = function () {
		var eventId = "12111996-0001-0000-0111-DZJENGISKHAN";
		
		var LateThoughts = {	                       
	        id: eventId,
	        isRandom: false,
	        maxTriggers: 1,
	        trigger: function (company) {
	        	return company.fans >= 1500000;
	        },
	        getNotification: function (company) {
		    	var msg = "Gamer Pride magazine contacted you for an interview. Recently you reached 1.5M fans and they want to know the secret behind this success.".localize();
	            return new Notification({
	            	sourceId: eventId,
	                header: "Magazine Interview".localize(),
	            	text: msg,
	            	options: ["Providing the best games", "The fans", "Being 'pro'"]
	             });
	        },
	        complete: function (decision) {            
	        	var company = GameManager.company;
	            if (decision === 0) {
	            	var n = new Notification({
	                	header: "Magazine Interview".localize(),
	                	text: "You said that only by providing the best games possible you were able to build such a big fanbase. Over time you've learned that gamers only seek great games and any developers that can't provide that won't get the fanbase they need and likely go bankrupt."
	                });
	                n.adjustFans(5000);
	                if(company.isGameProgressBetween(0.2, 0.9)) {
	                	n.adjustHype(20 + 40 * company.getRandom());
	                }
	                company.notifications.push(n);
	                return;
	            }
	            if (decision === 1) {
	            	var n = new Notification({
	                	header: "Magazine Interview".localize(),
	                	text: "In your opinion, based on the years of experience your recipe for success is to build a good relationship between the developer and the customers. Gamers need to see that it is a good idea to invest their money in your products. \n They can see it when a company provides good value for the money that gamers spent on the game.{n} You say that customers need to be treated properly. For instance, they can't be punished with DRM, because it is not fair. \nPirates have no problem with breaking DRM, even the day after release.\n In this way, the pirates enjoy the game as is while only honest customers have to deal with the hassles of DRM.{n}Instead of punishing customers, companies should reward them with additional content for free, great customer service and so on.\n Most importantly, treat gamers as you would like to be treated yourself: at the end of the day, we are all gamers!"
	                });
	                company.notifications.push(n);
	                var m = new Notification({
	                	header: "Magazine Interview".localize(),
	                	text: "Your words warmed people. The company's e-mail was swarmed with tons of supportive messages from your fans! Isn't that a great feeling?"
	                });
					m.adjustFans(20000);
					if(company.isGameProgressBetween(0.2, 0.9)) {
	               		m.adjustHype(50 + 60 * company.getRandom());
	           		}
	            	company.notifications.push(m);
	           		return;
				}
	            if (decision === 2) {
	            	var n = new Notification({
	                	header: "Magazine Interview".localize(),
	                	text: "What can you say? You and your company are just pro developers and gamers love pro!"
	                });
	                 n.adjustFans(1000);
	                 if(company.isGameProgressBetween(0.2, 0.9)) {
	                 	n.adjustHype(10 + 20 * company.getRandom());
	                 }
	                 company.notifications.push(n);
	                               
				}
			}
	 	};
	    
	    GDT.addEvent(LateThoughts);
	};
	/*  */
	
	/* Researches */
	ExpPack.addResearch = function () {
		/* Graphic items */
		GDT.addResearchItem(
		{
			id: "Realistic Particles",
			name: "Realistic particles".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 7;
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
			id: "Advanced Shaders",
			name: "Advanced shaders".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 5;
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
			id: "Animated Textures",
			name: "Animated textures".localize(),
			v: 2,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 3;
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
			id: "Basic Holograms",
            name: "Basic holograms".localize(),
            v: 4,
            canResearch: function (company) {
            	return LevelCalculator.getMissionLevel('Graphic') > 4;
			},
            category: "Graphic",
            categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
        	id: "Advanced Holograms",
            name: "Advanced holograms".localize(),
            v: 8,
            canResearch: function (company) {
            	return LevelCalculator.getMissionLevel('Graphic') > 6;
            },
            category: "Graphic",
            categoryDisplayName: "Graphic"
        });
		GDT.addResearchItem(
        {
        	id: "Interactive Holograms",
            name: "Interactive holograms".localize(),
            v: 10,
            canResearch: function (company) {
            	return LevelCalculator.getMissionLevel('Graphic') > 8;
            },
            category: "Graphic",
            categoryDisplayName: "Graphic"
        });
		/*  */
		
		/* Sound items */
		GDT.addResearchItem(
		{
			id: "Realistic Sound",
			name: "Realistic sound".localize(),
			v: 6,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Sound') > 6;
			},
			category: "Sound",
			categoryDisplayName: "Sound"
		});
		GDT.addResearchItem(
		{
			id: "Copywritten Music",
			name: "Copywritten sound".localize(),
			v: 8,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Sound') > 7;
			},
			category: "Sound",
			categoryDisplayName: "Sound"
		});
		/*  */
		
		/* A.I. items */
		GDT.addResearchItem(
		{
			id: "Superior AI",
			name: "Superior A.I.".localize(),
			v: 8,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('AI') > 7;
			},
			category: "AI",
			categoryDisplayName: "A.I."
		});
		GDT.addResearchItem(
		{
			id: "AI Difficulty",
			name: "A.I. difficulty".localize(),
			v: 4,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('AI') > 4;
			},
			category: "AI",
			categoryDisplayName: "A.I."
		});
		/*  */
		
		/* Gameplay */
		GDT.addResearchItem(
		{
			id: "Cheat Codes",
			name: "Cheat Codes".localize(),
			v: 4,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Gameplay') > 3;
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay"
		});
		GDT.addResearchItem(
		{
			id: "Premium Content",
			name: "Premium content".localize(),
			v: 8,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Gameplay') > 6;
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay"
		});
		/*  */
		
		/* Engine items */
		GDT.addResearchItem(
		{
			id: "Quick Saving",
			name: "Quick Saving".localize(),
			v: 2,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 3;
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
		});
		GDT.addResearchItem(
		{
			id: "Seasons",
			name: "Seasons".localize(),
			v: 6,
			canResearch: function (e) {
				return LevelCalculator.getMissionLevel('Engine') > 6;
			},
			category: "Engine",
			categoryDisplayName: "Engine"
		});
		/*  */
		
		/* Story/Quests */
		GDT.addResearchItem(
		{
			id: "Collectables",
			name: "Collectables".localize(),
			v: 2,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Story/Quests') > 2;
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests"
		});
		GDT.addResearchItem(
		{
			id: "Simple quests",
			name: "Simple quests".localize(),
			v: 2,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Story/Quests') > 3;
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests"
		});
		GDT.addResearchItem(
		{
			id: "Advanced quests",
			name: "Advanced quests".localize(),
			v: 6,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Story/Quests') > 6;
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests"
		});
		/*  */
		
		/* Dialogues items */
		GDT.addResearchItem(
		{
			id: "Language Settings",
			name: "Language settings".localize(),
			v: 4,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Dialogs') > 4;
			},
			category: "Dialogs",
			categoryDisplayName: "Dialogues"
		});
		/*  */
		
		/* World Design items */
		GDT.addResearchItem(
		{
			id: "Realistic Water",
			name: "Realistic water".localize(),
			v: 4,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('World Design') > 3;
			},
			category: "World Design",
			categoryDisplayName: "World Design"
		});
		GDT.addResearchItem(
		{
			id: "Realistic Plant Life",
			name: "Realistic plant life".localize(),
			v: 6,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('World Design') > 6;
			},
			category: "World Design",
			categoryDisplayName: "World Design"
		});
		/*  */
		
		/* Level Design items */
		GDT.addResearchItem(
		{
			id: "Bosses",
			name: "Bosses".localize(),
			v: 2,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Level Design') > 2;
			},
			category: "Level Design",
			categoryDisplayName: "Level Design"
		});
		GDT.addResearchItem(
		{
			id: "Swift Loading",
			name: "Swift loading".localize(),
			v: 4,
			canResearch: function () {
				return LevelCalculator.getMissionLevel('Level Design') > 5;
			},
			category: "Level Design",
			categoryDisplayName: "Level Design"
		});
		/*  */
	};
	/*  */
	
	/* Custom prices for games */
	ExpPack.addCustomPrice = function () {
		var company = GameManager.company;
		var gamePrice;
		var newPrice;
		var dataStore = GDT.getDataStore("ExpPackMod");
		
		UI.selectPriceClick = function (a) {
		Sound.click();
			switch (a.id) {
				case "applyPrice":
				applyPrice();
					break;
				default:
					return;
			}
		};
		
		var div = $("body");
		div.append('<div id="PriceContainer" class="windowBorder tallWindow" style="overflow:auto;display:none;"> <div id="priceSelector" class="windowTitle smallerWindowTitle">Custom Price</div>');
		div = $("#PriceContainer");
	
		div.append('<div id="exppack_price" style="text-align:center;margin-left:50px;width: 450px"></div>');
		div.append('<div id="exppack_current_price" style="text-align:center;margin-left:50px;width: 450px"></div>');
		div.append('<div id="exppack_select_price" style="text-align:center;margin-left:50px;width: 450px"></div>');
		div.append('<div class="priceSlider"></div>');
		div.append('<div id="applyPrice" class="selectorButton whiteButton" onclick="UI.selectPriceClick(this)" style="margin-left:50px;width: 450px">Set Price</div>');
		
		function applyPrice() {
			if(GameManager.company.isCurrentlyDevelopingGame())
			{
				game = GameManager.company.currentGame;
				
				if (game.gameSize === "medium") {
					Sales.mediumUnitPrice = newPrice;
				}
				else if (game.gameSize === "large") {
					Sales.largeUnitPrice = newPrice;
				}
				else if (game.gameSize === "aaa") {
					Sales.aaaUnitPrice = newPrice;
				}
				else {
					Sales.smallUnitPrice = newPrice;
				}
				
				gamePrice = newPrice;
				div.find("#exppack_current_price").html("Current price: " + gamePrice);
			}
			dataStore.data.gamePrice = gamePrice;
		};
		
		function setPrice(e) {
			if(GameManager.company.isCurrentlyDevelopingGame())
			{
				var game = GameManager.company.currentGame;
				newPrice = e;
				
				var div = $("#PriceContainer");
				
				if(newPrice == 7 && game.gameSize === "small")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else if(newPrice == 11 && game.gameSize === "medium")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else if(newPrice == 14 && game.gameSize === "large")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else if(newPrice == 18 && game.gameSize === "aaa")
					div.find("#exppack_price").html(newPrice + " Cr. (Default)");
				else
					div.find("#exppack_price").html(newPrice + " Cr.");
			}
		};
		
		/* calculateSales algorithm */
		var salesCalculated = function (company, game) {
			var price = dataStore.data.gamePrice;
			var currentGame = company.game;
			if (price < 1) {
				if(currentGame.gameSize == "small")
					price =  Sales.smallUnitPrice;
				else if(currentGame.gameSize == "medium")
					price =  Sales.mediumUnitPrice;
				else if(currentGame.gameSize == "large")
					price =  Sales.largeUnitPrice;
				else if(currentGame.gameSize == "aaa")
					price =  Sales.aaaUnitPrice;
			}
			var priceRatio = function (price, game) {
				var a;
				if(game.gameSize === "small")
					a = 2 - (price / 10);
				else if(game.gameSize === "medium")
					a = 2 - (price / 20);
				else if(game.gameSize === "large")
					a = 2 - (price / 40);
				else if(game.gameSize === "aaa")
					a = 2 - (price / 60);
				return a;
			};
			var score = game.score.clamp(1, 10);
			var scoreRatio = function (score) {
				var b;
	
				if(score >= 9)
					b = 1.3;
				else if (score >= 7)
					b = 1.1;
				else if (score >= 5)
					b = 0.8;
				else if (score >= 3)
					b = 0.5;
				else
					b = 0.1;
	
				return b;
			};
			game.totalSalesCash *= 1 * priceRatio(price, game) * scoreRatio(score);
		};
		GDT.fire(GDT.eventKeys.gameplay.salesCalculated, salesCalculated);
		/*  */
		
		var original_showContextMenu = UI._showContextMenu;
		var new_showContextMenu = function (b, c, d, h) {
			GameManager.company.isCurrentlyDevelopingGame() && c.push({
					label: "Game Price...",
					action: function () {
						Sound.click();
						GameManager.resume(true);
						
						var div = $("#PriceContainer");
							 
						div.scrollTop();
							 
						div.gdDialog({
							popout: !0,
							close: !0
						});
					}
			});
				
			var game = GameManager.company.currentGame;
			var max_price;
			
			if (GameManager.company.isCurrentlyDevelopingGame() && game.gameSize === "medium") {
				max_price = 20;
				gamePrice = Sales.mediumUnitPrice;
			}
			else if (GameManager.company.isCurrentlyDevelopingGame() && game.gameSize === "large") {
				max_price = 40;
				gamePrice = Sales.largeUnitPrice;
			}
			else if (GameManager.company.isCurrentlyDevelopingGame() && game.gameSize === "aaa") {
				max_price = 60;
				gamePrice = Sales.aaaUnitPrice;
			}
			else if (GameManager.company.isCurrentlyDevelopingGame()) {
				max_price = 10;
				gamePrice = Sales.smallUnitPrice;
			}
			
			div.find(".priceSlider").slider({
				min: 1,
				max: max_price,
				range: "min",
				value: Math.floor(gamePrice),
				animate: !1,
				slide: function (a, b) {
					var c = b.value;
					setPrice(c);
				}
			});
			setPrice(gamePrice);
		
			original_showContextMenu(b, c, d, h);
		};
		UI._showContextMenu = new_showContextMenu;
	};
	/*  */
	
	/* Black Bull */
	ExpPack.addBlackBull = function () {
		var menuItems = [];
		var div = $("body");
		div = $("#BlackBull");
		
		var original_PopupMenu = UI._showContextMenu;
		var new_initPopupMenu = function (type, menuItems, x, y) {
			var company = GameManager.company;
			var targetChar = company.currentLevel > 1 ? UI.getCharUnderCursor() : company.staff[0];
			
			if(targetChar) {
				if (targetChar.state != CharacterState.Researching &&
					(targetChar.state != CharacterState.Training && targetChar.state != CharacterState.Vacation)) {
					if(company.currentLevel > 1 && targetChar.flags.needsVacation)
					{
						menuItems.push({
							label : "Buy a Black Bull".localize("menu item"),
							action : function () {
								Sound.click();
								GameManager.resume(true);
								var div = $("#BlackBull");
								company.adjustCash(-500, "Black Bull");
								
								targetChar.relaxDelta = 0;
								var vacationInterval;
								var canRecharge;
								var timeLastUsed = GameManager.gameTime * GameManager.SECONDS_PER_WEEK * 1E3;
								if (timeLastUsed < timeLastUsed + 8)
									vacationInterval = 2;
								if (timeLastUsed >= timeLastUsed + 8)
									vacationInterval = 4;
								targetChar.flags.nextVacation = GameManager.gameTime + vacationInterval * GameManager.SECONDS_PER_WEEK * 1E3;
								targetChar.flags.relaxGained = 0;
								targetChar.flags.needsVacation = false;
								canRecharge = true;
								
							}
						});
					}
				}
			}
			original_PopupMenu(type, menuItems, x, y);
		};
		
		UI._showContextMenu = new_initPopupMenu;
	};
	/*  */
	
	
	/*
	 * Custom Price Bug Fix ~Everard
	 */
	ExpPack.checkCustomPrice = function() {
		GDT.off(GDT.eventKeys.gameplay.beforeReleaseGame, ExpPack.checkCustomPrice);
		if (GDT.getDataStore("ExpPackMod").data.gamePrice >= 1){
			return;
		}else{
			GDT.getDataStore("ExpPackMod").data.gamePrice = 7;
		}
	};GDT.on(GDT.eventKeys.gameplay.beforeReleaseGame, ExpPack.checkCustomPrice);
	
	
})();
