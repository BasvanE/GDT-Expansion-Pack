var ExpPack = {};
(function () {	
	/* Topics */
	ExpPack.addTopic = function () {
		GDT.addTopics([
		{
			id: "Assassin",
	    	name: "Assassin".localize("game topic"),
	    	genreWeightings: [1, 0.9, 0.8, 1, 1, 0.6],
	    	audienceWeightings: [0.6, 0.7, 1]
		}, {
	    	id: "Astronaut",
	    	name: "Astronaut".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, /* B */ {
	    	id: "Baking",
	    	name: "Baking".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.9, 1],
	    	audienceWeightings: [1, 0.9, 0.7]
		}, {
	    	id: "Board Game",
	    	name: "Board Game".localize("game topic"),
	    	genreWeightings: [0.8, 0.6, 0.7, 0.6, 0.9, 1],
	    	audienceWeightings: [1, 1, 0.8]
		}, /* C */ {
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
	    	id: "Construction",
	    	name: "Construction".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.7, 1, 0.9, 1],
	    	audienceWeightings: [1, 0.8, 0.7]
		}, {
	    	id: "Crime",
	    	name: "Crime".localize("game topic"),
	    	genreWeightings: [1, 0.8, 0.7, 1, 0.7, 0.9],
	    	audienceWeightings: [0.6, 0.8, 1]
		}, /* D */ {
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
		}, /* E */ {
	    	id: "Educational",
	    	name: "Educational".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
	    	audienceWeightings: [1, 0.8, 0.6]
		}, /* F */ {
	    	id: "Fairy Tale",
	    	name: "Fairy Tale".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.8, 0.8, 0.6, 1],
	    	audienceWeightings: [1, 0.8, 0.6]
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
	    	id: "Gods",
	    	name: "Gods".localize("game topic"),
	    	genreWeightings: [1, 1, 1, 0.7, 0.8, 0.6],
	    	audienceWeightings: [0.7, 1, 0.9]
		}, /* H */ {
	    	id: "Hide and Seek",
	    	name: "Hide and Seek".localize("game topic"),
	    	genreWeightings: [0.6, 1, 0.7, 0.8, 0.7, 1],
	    	audienceWeightings: [1, 0.9, 0.6]
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
		}, /* P */ {
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
		}, /* S */ {
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
	    	id: "Super Villain",
	    	name: "Super Villain".localize("game topic"),
	    	genreWeightings: [1, 0.7, 0.9, 0.7, 1, 0.8],
	    	audienceWeightings: [1, 0.8, 0.7]
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
	    }
	    ]);
	};
	/*  */    
	
	/* Platforms */
	ExpPack.addPlatform = function () {
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
						id: '12111996-00-00-001-DZJENGISKHAN',
						date: '1/5/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Grapple a new hardware manufacturer has announced a brand new computer called the Grapintosh. The Grapintosh comes with a new advanced operating system called Grap OS. Even though the new platform is a bit expensive, you get value for your money.".localize().format(General.getETADescription('1/5/1', '1/7/4')),
								image: icon
							});
						}
					}
				]
			});
			GDT.addPlatform(
			{
				id: 'grMac',
				name: 'grMac',
				company: 'Grapple',
				startAmount: 0.563,
				unitsSold: 1,
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
						id: '12111996-00-00-010-DZJENGISKHAN',
						date: '16/5/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple, developer of the very successful Grapintosh, has announced a new platform called the grMac. Grapple implemented all the hardware in the screen and named it a 'All-In-One' computer.{n} The fact that the hardware is very compact, doesn't effect any of the power we know from Grapple.".localize().format(General.getETADescription('16/5/4', '16/8/1')),
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
		var eventId = "12111996-0000-1111-0000-DZJENGISKHAN";
		
		var Celebration = {
			id: eventId,
			isRandom: false,
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
						header: "No party".localize(),//keep the header consistent with the prior part of the story
						text: "Looks like things will be quite tonight."
					});
					return;
				}
			}
		};
		GDT.addEvent(Celebration);
	};
	
	ExpPack.addEventCuriosity = function () {
		var eventId = "12111996-0000-1111-0001-DZJENGISKHAN";
		
		var fanCuriosity = {
			id: eventId,
			isRandom: false,
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
		var eventId = "12111996-0000-1111-0010-DZJENGISKHAN";
			
		var vacuumCleaner = {
			id: eventId,
			isRandom: false,
			maxTriggers: 1,
			trigger: function (company) {
				
				return company.currentLevel == 1 && company.isGameProgressBetween(0.2, 0.9);
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
					n.adjustHype(5 + 10 * company.getRandom());//increase hype between 5 and 15.
					
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
	/*  */		       
})();