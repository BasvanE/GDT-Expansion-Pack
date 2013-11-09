var ExpPack = {};
(function () {	
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
		    genreWeightings: [1, 0.9, 0.9, 0.8, 1, 0.7],
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
		var icon = './mods/ExpansionPack/examples/img/Grapple.png';
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
								text: "Today, Grapple a new hardware manufacturer has announced a brand new computer called the Grapintosh. The Grapintosh comes with a new advanced operating system called Grap OS. Even though the new platform is a bit expensive, you get value for your money. Grapple said that the Grapintosh will become available {0}".localize().format(General.getETADescription('1/5/1', '1/7/4')),
								image: icon
							});
						}
					}
				]
			});
	};
	
	ExpPack.addPlatformGrMac = function () {
		var icon = './mods/ExpansionPack/examples/img/Grapple.png';		
		GDT.addPlatform(
			{
				id: '12111996-0000-0000-0001-DZJENGISKHAN',
				name: 'grMac',
				company: 'Grapple',
				startAmount: 2.6,
				unitsSold: 32.2,
				licencePrize: 40000,
				published: '16/8/1',
				platformRetireDate: '260/12/4',
				developmentCosts: 500,
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
								text: "Grapple, developer of the very successful Grapintosh, has announced a new platform called the grMac. Grapple implemented all the hardware in the screen and named it a 'All-In-One' computer.{n} The fact that the hardware is very compact, doesn't effect any of the power we know from Grapple. The grMac will be released {0}".localize().format(General.getETADescription('16/5/4', '16/8/1')),
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
		var icon = './mods/ExpansionPack/examples/img/3GS.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0001-0000-DZJENGISKHAN',
				name: '3GS',
				company: 'Ninvento',
				startAmount: 1.5,
				unitsSold: 3.583,
				licencePrize: 100000,
				published: '21/9/3',
				platformRetireDate: '24/5/1',
				developmentCosts: 80000,
				genreWeightings: [0.7, 1, 0.8, 1, 0.6, 1],
				audienceWeightings: [1, 0.8, 0.6],
				techLevel: 4,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0001-0000-DZJENGISKHAN',
						date: '1/1/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today Ninvento, known for the console GS, announced that they are going to release a new handheld console called the 3GS. This handheld console will have 3D animations and therefore will be the first in the handheld market.{n} Ninvento said the 3GS is will get released {0}.".localize().format(General.getETADescription('21/5/1', '21/9/3')),
								image: icon
							});
						}
					}
				]
			});
	};
			
	ExpPack.addPlatform2GS = function () {		
		var icon = './mods/ExpansionPack/examples/img/2GS.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0001-0001-DZJENGISKHAN',
				name: '2GS',
				company: 'Ninvento',
				startAmount: 2.125,
				unitsSold: 15.527,
				licencePrize: 250000,
				published: '21/4/2',
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
								text: "Today is the day that Ninvento has announced to make another handheld console following up the 3GS, the 2GS. However the 2GS has the same mechanics as the 3GS, it's featuring better graphics and therefore better gameplay also. The 2GS is said to be released {0}.".localize().format(General.getETADescription('21/1/4', '21/4/2')),
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
		var icon = './mods/ExpansionPack/examples/img/vivaPlaysystem.png';
		GDT.addPlatform(
			{
				id: '12111996-0000-0010-0000-DZJENGISKHAN',
				name: 'Viva Playsystem',
				company: 'Vonny',
				startAmount: 4.635,
				unitsSold: 5.430,
				licencePrize: 750000,
				published: '1/6/2',
				platformRetireDate: '29/2/1',
				developmentCosts: 300000,
				genreWeightings: [0.7, 0.8, 0.9, 1, 0.6, 1],
				audienceWeightings: [1, 0.8, 0.6],
				techLevel: 6,
				iconUri: icon,
				events: [
					{
						id: '12111996-1111-0010-0001-DZJENGISKHAN',
						date: '1/1/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Vony developer of the PPS platform has been spreading rumors that they are working on a new platform called 'Viva Playsystem' or 'VPS' in short.{n} They haven't released much info about the VPS but they claim that the new handheld console will be released {0}".localize().format(General.getETADescription('1/1/4', '1/6/2')), /*'22/3/4', '22/6/2'*/
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

				var msg = "You have almost finished {0}! Maybe you should give a party for the neighborhood to celebrate it? But it will cost some money ofcourse."
					.localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "Celebration party?".localize(),
					text: msg,
					options: ["Party time!", "Do nothing"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Party time!!".localize(),
						text: "The party was a massive succes. Everybody was really impressed by your work."
					});
					n.adjustCash(-500, "Party");
					n.adjustHype(5 + 10 * company.getRandom());

					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "No party".localize(),
						text: "Looks like things will be quite tonight."
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

				var msg = "Boss, the fans have discovered that were're developing {0}, and wondering what it's about. We could tell them, and get much needed hype. But we could go all out in telling them the details, or vaguely give them out. We could just ignore them, hoping this doesn't hurt the fan base too much."
					.localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "Give information?".localize(),
					text: msg,
					options: ["Give them what they want!", "Vaguely tell them", "Don't tell them!"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Give them what they want!".localize(),
						text: "The fans are excited about what you have told them and they are spreading your word across the world!."
					});
					n.adjustHype(5 + 6 * company.getRandom());
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Vaguely tell them".localize(),
						text: "The fans are excited about your information, but they also think you could have said a bit more."
					});
					n.adjustHype(5 + 3 * company.getRandom());
					return;
				}
				if (decision === 2) {
					var n = new Notification({
						header: "Don't tell them!".localize(),
						text: "The fans are a bit dissapointed in you :("
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
				
				return company.currentLevel == 1 && company.isGameProgressBetween(0.6, 0.9);
			},
		getNotification: function (company) {
				var game = company.currentGame;
	
				var msg = "While you were working on your game someone knocked on the door of the garage. It was a man who wanted to sell you a vacuum cleaner. Do you want to buy the vacuum cleaner for 4K?"
					.localize().format(game.title);
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
						text: "You buy the vacuum cleaner. After doing a garage clenup you win the prize for most clean gaming industry garage! This will most likely increase the hype for your game!"
					});
					n.adjustHype(5 + 10 * company.getRandom());
					
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "It's me again!".localize(),
						text: "'Hey! I'm back!' is what the guy said. This time he convinces you to buy a vacuum cleaner. Bye bye, 4000 dollars."
					});
					n.adjustCash(-4000, "Vacuum Cleaner");
					company.notifications.push(n);
					return;
				}
				if (decision === 2) {
					var n = new Notification({
						header: "The Vacuum Cleaner".localize(),
						text: "'After you denounced me I thought it was a good idea to give you a bad reputation with the media! This didn't work out well for me, though... You even got more hype for it!' was the last thing he said before walking away in an angry mood."
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
				return company.currenLevel == 2 && company.isGameProgressBetween(0.2, 0.9);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "It seems that kids in the neighbourhood have started chatting about your upcoming game {0}. Rumour has it, that Billy, your neighbours kid, snuck into the garage and spied on some of the design papers.{n}How he managed to do this is a mystery. You could swear you were sitting in the garage the entire time!\nHow do you want to react?\n\nYou could talk to the parents to get him punished, ignore the incident or maybe invite some of the neighbours over to show them more of the game."
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
						text: "You talk to the parents about Billy's actions and they promise it won't happen again."
					});
					n.adjustHype(5 + 10 * company.getRandom());

					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Vanished documents".localize(),
						text: "You were working on some intricate design documents the other day but now you can't find them anymore. Small foot prints on the floor suggest that someone might have taken them.\nUnfortunately you have to recreate the documents (-500 cr.) - This might have been Billy's work",
						weeksUntilFired: 1 + 2 * company.getRandom()
					});
					n.adjustCash(-500, "restoring documents");
					company.notifications.push(n);
					return;
				}
				if (decision === 2) {
					var n = new Notification({
						header: "Billy, the kid".localize(),
						text: "You invite Billy, his parents and a couple of other interested neighbours over and show them the game in-progress. The kids are super-excited and for weeks you hear them talk about it afterwards."
					});
					n.adjustHype(15 + 25 * company.getRandom());
					company.activeNotifications.addRange(n.split());
					return;
				}
			}
		};

		GDT.addEvent(billyBrakeIn);
	};
	/*  */		       
})();
