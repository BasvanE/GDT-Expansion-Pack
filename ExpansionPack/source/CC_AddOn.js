var CusCom = {};
(function () {
	var curPage = 0;
	var Parts = {};
	p = Parts;
	
	/* OS */
		/* Vindows */
		p.VindowsVista = {
			id: "Vindows Vista",
			name: "Vindows Vista".localize(),
			engineCost: 0.5E4,
			v: 1,
			techLevel : 1,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Vindows".localize(),
			group: "Operating System"
		};
		p.Vindows7Starter = {
			id: "Vindows 7 Starter",
			name: "Vindows 7 Starter".localize(),
			engineCost: 1.5E4,
			v: 4,
			techLevel : 2,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Vindows".localize(),
			group: "Operating System"
		};
		p.Vindows7HomeBasic = {
			id: "Vindows 7 Home Basic",
			name: "Vindows 7 Home Basic".localize(),
			engineCost: 2E4,
			v: 6,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Vindows".localize(),
			group: "Operating System"
		};
		p.Vindows7HomePremium = {
			id: "Vindows 7 Home Premium",
			name: "Vindows 7 Home Premium".localize(),
			engineCost: 4E4,
			v: 8,
			techLevel : 4,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Vindows".localize(),
			group: "Operating System"
		};
		p.Vindows7Ultimate = {
			id: "Vindows 7 Ultimate",
			name: "Vindows 7 Ultimate".localize(),
			engineCost: 6E4,
			v: 10,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Vindows".localize(),
			group: "Operating System"
		};
		p.Vindows8 = {
			id: "Vindows 8",
			name: "Vindows 8".localize(),
			engineCost: 6.5E4,
			v: 8,
			techLevel : 4,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Vindows".localize(),
			group: "Operating System"
		};
		p.Vindows81 = {
			id: "Vindows 8.1",
			name: "Vindows 8.1".localize(),
			engineCost: 8E4,
			v: 12,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Vindows".localize(),
			group: "Operating System"
		};
		/*  */
		
		/* OS Y */
		p.OSY100 = {
			id: "OS Y Cheetah",
			name: "OS Y Cheetah".localize(),
			engineCost: 2E4,
			v: 4,
			techLevel : 2,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Grapple".localize(),
			group: "Operating System"
		};
		p.OSY102 = {
			id: "OS Y Tiger",
			name: "OS Y Tiger".localize(),
			engineCost: 3.5E4,
			v: 6,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Grapple".localize(),
			group: "Operating System"
		};
		p.OSY106 = {
			id: "OS Y Snow Leopard",
			name: "OS Y Snow Leopard".localize(),
			engineCost: 5E4,
			v: 8,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Grapple".localize(),
			group: "Operating System"
		};
		p.OSY108 = {
			id: "OS Y Mountain Lion",
			name: "OS Y Mountain Lion".localize(),
			engineCost: 7.5E4,
			v: 10,
			techLevel : 6,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Grapple".localize(),
			group: "Operating System"
		};
		p.OSY109 = {
			id: "OS Y Mavericks",
			name: "OS Y Mavericks".localize(),
			engineCost: 9E4,
			v: 12,
			techLevel : 7,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Grapple".localize(),
			group: "Operating System"
		};
		/*  */
		
		/* Penguin */
		p.Penguin = {
			id: "Penguin",
			name: "Penguin".localize(),
			engineCost: 1E2,
			v: 4,
			techLevel : 1,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Operating System",
			categoryDisplayName: "Penguin".localize(),
			group: "Operating System"
		};
		/*  */
	
	p.osParts = [p.VindowsVista, p.Vindows7Starter, p.Vindows7HomeBasic, p.Vindows7HomePremium, p.Vindows7Ultimate, p.Vindows8, p.Vindows81, p.OSY100, p.OSY102, p.OSY106, p.OSY108, p.OSY109, p.Penguin];
	/*  */
	
	/* CPU */
		/* Outtel */
		p.Outteli3 = {
			id: "Outtel i3 Processor",
			name: "Outtel i3 Processor".localize(),
			engineCost: 2E4,
			v: 2,
			techLevel : 2,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
				},
			consolePart : true,
			category: "CPU",
			categoryDisplayName: "Outtel".localize(),
			group: "CPU"
		};
		p.Outteli5 = {
			id: "Outtel i5 Processor",
			name: "Outtel i5 Processor".localize(),
			engineCost: 3.5E4,
			v: 3,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
				},
			consolePart : true,
			category: "CPU",
			categoryDisplayName: "Outtel".localize(),
			group: "CPU"
		};
		p.Outteli7 = {
			id: "Outtel i7 Processor",
			name: "Outtel i7 Processor".localize(),
			engineCost: 5E4,
			v: 5,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
				},
			consolePart : true,
			category: "CPU",
			categoryDisplayName: "Outtel".localize(),
			group: "CPU"
		};
		p.Outteli7E = {
			id: "Outtel i7 Extreme Processor",
			name: "Outtel i7 Extreme Processor".localize(),
			engineCost: 7E4,
			v: 12,
			techLevel : 7,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
				},
			consolePart : true,
			category: "CPU",
			categoryDisplayName: "Outtel".localize(),
			group: "CPU"
		};
		/*  */
		
		/* AMD */
			p.ANDK7 = {
				id: "AND K7 Series",
				name: "AND K7 Series".localize(),
				engineCost: 2E4,
				v: 2,
				techLevel : 1,
				canResearch: function (company) {
					return !company.flags.customHardwareResearched;
					},
				consolePart : true,
				category: "CPU",
				categoryDisplayName: "AND".localize(),
				group: "CPU"
			};
			p.ANDK8 = {
				id: "AND K8 Series",
				name: "AND K8 Series".localize(),
				engineCost: 3E4,
				v: 4,
				techLevel : 2,
				canResearch: function (company) {
					return !company.flags.customHardwareResearched;
					},
				consolePart : true,
				category: "CPU",
				categoryDisplayName: "AND".localize(),
				group: "CPU"
			};
			p.ANDK9 = {
				id: "AND K9 Series",
				name: "AND K9 Series".localize(),
				engineCost: 5.5E4,
				v: 6,
				techLevel : 4,
				canResearch: function (company) {
					return !company.flags.customHardwareResearched;
					},
				consolePart : true,
				category: "CPU",
				categoryDisplayName: "AND".localize(),
				group: "CPU"
			};
			p.ANDK10 = {
				id: "AND K10 Series",
				name: "AND K10 Series".localize(),
				engineCost: 6.5E4,
				v: 10,
				techLevel : 6,
				canResearch: function (company) {
					return !company.flags.customHardwareResearched;
					},
				consolePart : true,
				category: "CPU",
				categoryDisplayName: "AND".localize(),
				group: "CPU"
			};
		/*  */
		
	p.CPUParts = [p.Outteli3, p.Outteli5, p.Outteli7, p.Outteli7E, p.ANDK7, p.ANDK8, p.ANDK9, p.ANDK10];
	/*  */
	
	/* Motherboard */
		/* Esus */
		p.EsusA88 = {
			id: "Esus A88 Series",
			name: "Esus A88 Series".localize(),
			engineCost: 4.5E4,
			v: 8,
			techLevel : 2,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "Esus".localize(),
			group: "Motherboard"
		};
		p.EsusZ87 = {
			id: "Esus Z87 Series",
			name: "Esus Z87 Series".localize(),
			engineCost: 5E4,
			v: 8,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "Esus".localize(),
			group: "Motherboard"
		};
		p.EsusTUF = {
			id: "Esus TUF Series",
			name: "Esus TUF Series".localize(),
			engineCost: 7E4,
			v: 10,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "Esus".localize(),
			group: "Motherboard"
		};
		p.EsusROG = {
			id: "Esus ROG Series",
			name: "Esus ROG Series".localize(),
			engineCost: 8.5E4,
			v: 12,
			techLevel : 7,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "Esus".localize(),
			group: "Motherboard"
		};
		/*  */
		
		/* QBit */
		p.QBitIP43 = {
			id: "QBit IP43",
			name: "QBit IP43".localize(),
			engineCost: 3E4,
			v: 4,
			techLevel : 1,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "QBit".localize(),
			group: "Motherboard"
		};
		p.QBitIP35PE = {
			id: "QBit IP35 Pro XE",
			name: "QBit IP35 Pro XE".localize(),
			engineCost: 5E4,
			v: 6,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "QBit".localize(),
			group: "Motherboard"
		};
		p.QBitAS78H = {
			id: "QBit A-S78H",
			name: "QBit A-S78H".localize(),
			engineCost: 5.5E4,
			v: 6,
			techLevel : 4,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "QBit".localize(),
			group: "Motherboard"
		};
		p.QBitAN78GS = {
			id: "QBit A-N78GS",
			name: "QBit A-N78GS".localize(),
			engineCost: 7E4,
			v: 8,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "QBit".localize(),
			group: "Motherboard"
		};
		p.QBitAN78HD = {
			id: "QBit A-N78HD",
			name: "QBit A-N78HD".localize(),
			engineCost: 8E4,
			v: 10,
			techLevel : 6,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Motherboard",
			categoryDisplayName: "QBit".localize(),
			group: "Motherboard"
		};
		/*  */
	
		p.MBParts = [p.EsusA88, p.EsusZ87, p.EsusTUF, p.EsusROG, p.QBitIP43, p.QBitIP35PE, p.QBitAS78H, p.QBitAN78GS, p.QBitAN78HD];
	/*  */
	
	/* GPU */
		/* Ividia */
		p.IvidiaGeForce210 = {
			id: "Ividia GeForce 210",
			name: "Ividia GeForce 210".localize(),
			engineCost: 0.75E4,
			v: 2,
			techLevel : 1,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ividia".localize(),
			group: "GPU"
		};
		p.IvidiaGT610 = {
			id: "Ividia GeForce GT 610",
			name: "Ividia GeForce GT 610".localize(),
			engineCost: 2E4,
			v: 4,
			techLevel : 2,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ividia".localize(),
			group: "GPU"
		};
		p.IvidiaGT640 = {
			id: "Ividia GeForce GT 640",
			name: "Ividia GeForce GT 610".localize(),
			engineCost: 4E4,
			v: 6,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ividia".localize(),
			group: "GPU"
		};
		p.IvidiaGTX690 = {
			id: "Ividia GeForce GTX 690",
			name: "Ividia GeForce GTX 690".localize(),
			engineCost: 6.5E4,
			v: 8,
			techLevel : 4,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ividia".localize(),
			group: "GPU"
		};
		p.IvidiaGTX780 = {
			id: "Ividia GeForce GTX 780",
			name: "Ividia GeForce GTX 780".localize(),
			engineCost: 8E4,
			v: 10,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ividia".localize(),
			group: "GPU"
		};
		p.IvidiaGTXTITAN = {
			id: "Ividia GeForce GTX TITAN",
			name: "Ividia GeForce GTX TITAN".localize(),
			engineCost: 10E4,
			v: 12,
			techLevel : 7,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ividia".localize(),
			group: "GPU"
		};
		/* Ita Radeon */
		p.ItaRadeonR400 = {
			id: "Ita Radeon R400 Series",
			name: "Ita Radeon R400 Series".localize(),
			engineCost: 1.5E4,
			v: 2,
			techLevel : 1,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ita Radeon".localize(),
			group: "GPU"
		};
		p.ItaRadeonR500 = {
			id: "Ita Radeon R500 Series",
			name: "Ita Radeon R500 Series".localize(),
			engineCost: 3E4,
			v: 4,
			techLevel : 2,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ita Radeon".localize(),
			group: "GPU"
		};
		p.ItaRadeonR500 = {
			id: "Ita Radeon R500 Series",
			name: "Ita Radeon R500 Series".localize(),
			engineCost: 4.5E4,
			v: 6,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ita Radeon".localize(),
			group: "GPU"
		};
		p.ItaRadeonR600 = {
			id: "Ita Radeon R600 Series",
			name: "Ita Radeon R600 Series".localize(),
			engineCost: 6E4,
			v: 8,
			techLevel : 4,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ita Radeon".localize(),
			group: "GPU"
		};
		p.ItaRadeonR700 = {
			id: "Ita Radeon R700 Series",
			name: "Ita Radeon R700 Series".localize(),
			engineCost: 8E4,
			v: 10,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ita Radeon".localize(),
			group: "GPU"
		};
		p.ItaRadeonR800 = {
			id: "Ita Radeon R800 Series",
			name: "Ita Radeon R800 Series".localize(),
			engineCost: 9.5E4,
			v: 12,
			techLevel : 7,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "GPU",
			categoryDisplayName: "Ita Radeon".localize(),
			group: "GPU"
		};
		/*  */
		
	p.GPUParts = [p.IvidiaGeForce210, p.IvidiaGT610, p.IvidiaGT640, p.IvidiaGTX690, p.IvidiaGTX780, p.IvidiaGTXTITAN, p.ItaRadeonR400, p.ItaRadeonR500, p.ItaRadeonR600, p.ItaRadeonR700, p.ItaRadeonR800];
	/*  */
	
	/* RAM */
	p.TwoGBRAM = {
		id: "2 GB RAM",
		name: "2 GB RAM".localize(),
		engineCost: 0.5E4,
		v: 1,
			techLevel : 1,
		canResearch: function (company) {
			return !company.flags.customHardwareResearched;
		},
		consolePart : true,
		category: "RAM",
		categoryDisplayName: "RAM".localize(),
		group: "RAM"
	};
	p.FourGBRAM = {
		id: "4 GB RAM",
		name: "4 GB RAM".localize(),
		engineCost: 1E4,
		v: 2,
			techLevel : 2,
		canResearch: function (company) {
			return !company.flags.customHardwareResearched;
		},
		consolePart : true,
		category: "RAM",
		categoryDisplayName: "RAM".localize(),
		group: "RAM"
	};
	p.EightGBRAM = {
		id: "8 GB RAM",
		name: "8 GB RAM".localize(),
		engineCost: 2E4,
		v: 4,
			techLevel : 3,
		canResearch: function (company) {
			return !company.flags.customHardwareResearched;
		},
		consolePart : true,
		category: "RAM",
		categoryDisplayName: "RAM".localize(),
		group: "RAM"
	};
	p.STGBRAM = {
		id: "16 GB RAM",
		name: "16 GB RAM".localize(),
		engineCost: 4E4,
		v: 6,
			techLevel : 4,
		canResearch: function (company) {
			return !company.flags.customHardwareResearched;
		},
		consolePart : true,
		category: "RAM",
		categoryDisplayName: "RAM".localize(),
		group: "RAM"
	};
	p.TTGBRAM = {
		id: "32 GB RAM",
		name: "32 GB RAM".localize(),
		engineCost: 7E4,
		v: 8,
			techLevel : 5,
		canResearch: function (company) {
			return !company.flags.customHardwareResearched;
		},
		consolePart : true,
		category: "RAM",
		categoryDisplayName: "RAM".localize(),
		group: "RAM"
	};
	p.SFGBRAM = {
		id: "64 GB RAM",
		name: "64 GB RAM".localize(),
		engineCost: 9E4,
		v: 10,
			techLevel : 6,
		canResearch: function (company) {
			return !company.flags.customHardwareResearched;
		},
		consolePart : true,
		category: "RAM",
		categoryDisplayName: "RAM".localize(),
		group: "RAM"
	};
	p.OTEGBRAM = {
		id: "128 GB RAM",
		name: "128 GB RAM".localize(),
		engineCost: 12E4,
		v: 12,
			techLevel : 7,
		canResearch: function (company) {
			return !company.flags.customHardwareResearched;
		},
		consolePart : true,
		category: "RAM",
		categoryDisplayName: "RAM".localize(),
		group: "RAM"
	};
	
	p.RAMParts = [p.TwoGBRAM, p.FourGBRAM, p.EightGBRAM, p.STGBRAM, p.TTGBRAM, p.SFGBRAM, p.OTEGBRAM];
	/*  */
	
	/* Storage */
		/* HDD */
		p.HDD250GB = {
			id: "HDD 250 GB",
			name: "HDD 250 GB".localize(),
			engineCost: 1E4,
			v: 2,
			techLevel : 1,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "HDD".localize(),
			group: "Storage"
		};
		p.HDD500GB = {
			id: "HDD 500 GB",
			name: "HDD 500 GB".localize(),
			engineCost: 2.25E4,
			v: 4,
			techLevel : 3,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "HDD".localize(),
			group: "Storage"
		};
		p.HDD750GB = {
			id: "HDD 750 GB",
			name: "HDD 750 GB".localize(),
			engineCost: 4.5E4,
			v: 6,
			techLevel : 4,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "HDD".localize(),
			group: "Storage"
		};
		p.HDD1TB = {
			id: "HDD 1 TB",
			name: "HDD 1 TB".localize(),
			engineCost: 7E4,
			v: 8,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "HDD".localize(),
			group: "Storage"
		};
		p.HDD2TB = {
			id: "HDD 2 TB",
			name: "HDD 2 TB".localize(),
			engineCost: 9E4,
			v: 10,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "HDD".localize(),
			group: "Storage"
		};
		/*  */
		
		/* SSD */
		p.SSD30GB = {
			id: "SSD 30 GB",
			name: "SSD 30 GB".localize(),
			engineCost: 2.5E4,
			v: 4,
			techLevel : 2,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "SSD".localize(),
			group: "Storage"
		};
		p.SSD60GB = {
			id: "SSD 60 GB",
			name: "SSD 60 GB".localize(),
			engineCost: 5.5E4,
			v: 6,
			techLevel : 4,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "SSD".localize(),
			group: "Storage"
		};
		p.SSD120GB = {
			id: "SSD 120 GB",
			name: "SSD 120 GB".localize(),
			engineCost: 7.75E4,
			v: 8,
			techLevel : 5,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "SSD".localize(),
			group: "Storage"
		};
		p.SSD240GB = {
			id: "SSD 240 GB",
			name: "SSD 240 GB".localize(),
			engineCost: 10E4,
			v: 10,
			techLevel : 6,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "SSD".localize(),
			group: "Storage"
		};
		p.SSD580GB = {
			id: "SSD 580 GB",
			name: "SSD 580 GB".localize(),
			engineCost: 12E4,
			v: 12,
			techLevel : 7,
			canResearch: function (company) {
				return !company.flags.customHardwareResearched;
			},
			consolePart : true,
			category: "Storage",
			categoryDisplayName: "SSD".localize(),
			group: "Storage"
		};		
		/*  */
		
	p.storageParts = [p.HDD250GB, p.HDD500GB, p.HDD750GB, p.HDD1TB, p.HDD2TB, p.SSD30GB, p.SSD60GB, p.SSD120GB, p.SSD240GB, p.SSD580GB];
	/*  */
	
	p.allComputerParts = function () {
		return p.osParts.concat(p.CPUParts).concat(p.MBParts).concat(p.GPUParts).concat(p.RAMParts).concat(p.storageParts)
	};
	
	var menuItems = [];
		
	var original_PopupMenu = UI._showContextMenu;
	var new_initPopupMenu = function (type, menuItems, x, y) {
		var company = GameManager.company;
		var currentZone = company.flags.currentZone;
		var project = currentZone === 0 ? GameManager.currentHwProject : GameManager.currentRnDProject;
		var isBusy = project != null;
		if (currentZone === 0)
			if (GameManager.canDevelopConsole())
				menuItems.push({
					label : "Develop Computer...".localize("menu item"),
					action : function () {
						curPage = 0;
						Sound.click();
						Tutorial.devConsole();
						company.notifications.push(new Notification("{DevelopComputer}", "", "", 0));
						GameManager.showPendingNotifications()
					}
				});			
		original_PopupMenu(type, menuItems, x, y);
	};
	UI._showContextMenu = new_initPopupMenu;
	
	var original_showNotification = UI._showNotification;
	var new_showNotification = function (notification, callback) {
		switch (notification.header) {
		case "{DevelopComputer}":
			UI.showDevelopComputerMenu(notification, callback);
		break;
		};
		
		original_showNotification(notification, callback);
	};
	
	UI._showNotification = new_showNotification;
	
	var MAX_QA_BUDGET = 2E7;
	var selectedComputerFeatures;
	
	$('#resources').append('<div id="createComputerMenu" class="tallWindow windowBorder"></div>');
	var div = $('#createComputerMenu');
	div.append('<div></div>');
	
	document.getElementById("createComputerMenu").innerHTML = '<div class="dialogScreenContainer tallWindow">' +
		'<div class="windowCostLabel"></div>' +
		'<div class="dialogScreen1">' +
			'<div class="dialogScreen1Title windowTitle">Custom Computer</div>' +
			'<div class="dialogScreen1ContentContainer">' +
				'<input class="computerName" type="text" value="" maxlength="30" style="font-size: 22pt" required />' +
				'<div class="computerSliderContainer"></div>' +
				'<div class="centeredButtonWrapper" style="margin- +top: 20px">' +
					'<h2>Quality Assurance Budget</h2>' +
					'<div class="computerQASlider"></div>' +
				'</div>' +
			'</div>' +
			'<div onClick="nextPage()" class="dialogNextButton baseButton disabledButton">Next</div>' +
		'</div>' +
		'<div class="dialogScreen2">' +
			'<div onClick="prevPage()"  class="dialogBackButton fontCharacterButton icon-arrow-left"></div>' +
			'<div class="dialogScreen2Title windowTitle">Operating System</div>' +
			'<div class="featureSelectionContainer2" style="margin: 40px 20px 20px 20px; padding-right: 20px; height: 430px; overflow: scroll; overflow-x: hidden; overflow-y: auto;"></div>' +
			'<div onClick="nextPage()" class="dialogNextButton baseButton disabledButton">Next</div>' +
		'</div>' +
		'<div class="dialogScreen3" style="margin-left: 100%;height: 100%;position: absolute;top: 0px">' +
			'<div onClick="prevPage()"  class="dialogBackButton fontCharacterButton icon-arrow-left"></div>' +
			'<div class="dialogScreen3Title windowTitle" style="width: 500px">CPU</div>' +
			'<div class="featureSelectionContainer3" style="margin: 40px 20px 20px 20px; padding-right: 20px; height: 430px; overflow: scroll; overflow-x: hidden; overflow-y: auto;"></div>' +
			'<div onClick="nextPage()" class="dialogNextButton baseButton disabledButton">Next</div>' +
		'</div>' +
		'<div class="dialogScreen4" style="margin-left: 100%;height: 100%;position: absolute;top: 0px">' +
			'<div onClick="prevPage()" class="dialogBackButton fontCharacterButton icon-arrow-left"></div>' +
			'<div class="dialogScreen4Title windowTitle" style="width: 500px">Motherboard</div>' +
			'<div class="featureSelectionContainer4" style="margin: 40px 20px 20px 20px; padding-right: 20px; height: 430px; overflow: scroll; overflow-x: hidden; overflow-y: auto;"></div>' +
			'<div onClick="nextPage()" class="dialogNextButton baseButton disabledButton">Next</div>' +
		'</div>' +
		'<div class="dialogScreen5" style="margin-left: 100%;height: 100%;position: absolute;top: 0px">' +
			'<div onClick="prevPage()" class="dialogBackButton fontCharacterButton icon-arrow-left"></div>' +
			'<div class="dialogScreen5Title windowTitle" style="width: 500px">GPU</div>' +
			'<div class="featureSelectionContainer5" style="margin: 40px 20px 20px 20px; padding-right: 20px; height: 430px; overflow: scroll; overflow-x: hidden; overflow-y: auto;"></div>' +
			'<div onClick="nextPage()" class="dialogNextButton baseButton disabledButton">Next</div>' +
		'</div>' +
		'<div class="dialogScreen6" style="margin-left: 100%;height: 100%;position: absolute;top: 0px">' +
			'<div onClick="prevPage()" class="dialogBackButton fontCharacterButton icon-arrow-left"></div>' +
			'<div class="dialogScreen6Title windowTitle" style="width: 500px">RAM</div>' +
			'<div class="featureSelectionContainer6" style="margin: 40px 20px 20px 20px; padding-right: 20px; height: 430px; overflow: scroll; overflow-x: hidden; overflow-y: auto;"></div>' +
			'<div onClick="nextPage()" class="dialogNextButton baseButton disabledButton">Next</div>' +
		'</div>' +
		'<div class="dialogScreen7" style="margin-left: 100%;height: 100%;position: absolute;top: 0px">' +
			'<div onClick="prevPage()" class="dialogBackButton fontCharacterButton icon-arrow-left"></div>' +
			'<div class="dialogScreen7Title windowTitle" style="width: 500px">Storage</div>' +
			'<div class="featureSelectionContainer7" style="margin: 40px 20px 20px 20px; padding-right: 20px; height: 430px; overflow: scroll; overflow-x: hidden; overflow-y: auto;"></div>' +
			'<div class="centeredButtonWrapper">' +
				'<div onClick="UI.createConsoleClick()" class="okButton selectorButton windowMainActionButton orangeButton windowLargeOkButton">Start Development</div>' +
			'</div>' +
		'</div>' +
	'</div>' +
	
	'<div class="selectionOverlayContainer">' +
	 	'<div class="overlayTitle windowTitle smallerWindowTitle"></div>' +
	 	'<div class="listContainer"></div>' +
	 '</div>';
	
	UI.showDevelopComputerMenu = function (notification, callback) {
		$(".selectionOverlayContainer").hide();
		var menu = $("#createComputerMenu");
		menu.find(".computerName")[0].value = "Computer Name".localize();
		UI.maxFont(menu.find(".dialogScreen1Title"), 34, 50);
		UI.maxFont(menu.find(".dialogScreen2Title"), 34, 50);
		UI.maxFont(menu.find(".dialogScreen3Title"), 34, 50);
		UI.maxFont(menu.find(".dialogScreen4Title"), 34, 50);
		UI.maxFont(menu.find(".dialogScreen5Title"), 34, 50);
		UI.maxFont(menu.find(".dialogScreen6Title"), 34, 50);
		UI.maxFont(menu.find(".dialogScreen7Title"), 34, 50);
		UI.maxFont(menu.find(".windowMainActionButton"), 34, 50);
		var options = {};
		options.disableCheckForNotifications = true;
		options.close = true;
		options.onClose =
		function () {
			saveSelectedComputerSettings();
			GameManager.company.activeNotifications.remove(notification);
			GameManager.resume(true);
			if (callback)
				callback()
		};
		menu.find(".dialogNextButton").clickExcl(function () {
			$("#createComputerMenu").find(".dialogNextButton").effect("shake", {
				times : 2,
				distance : 5
			}, 50)
		});
		menu.find(".dialogBackButton").clickExcl(function () {
			Sound.click();
			saveSelectedComputerSettings();
			if (curPage == 0)
			{
				$("#createComputerMenu").find(".dialogScreen1").transition({
					"margin-left" : 0
				});
				$("#createComputerMenu").find(".dialogScreen2").transition({
					"margin-left" : "100%"
				});
				$("#createComputerMenu").find(".dialogScreen3").transition({
					"margin-left" : "200%"
				});
				$("#createComputerMenu").find(".dialogScreen4").transition({
					"margin-left" : "300%"
				});
				$("#createComputerMenu").find(".dialogScreen5").transition({
					"margin-left" : "400%"
				});
				$("#createComputerMenu").find(".dialogScreen6").transition({
					"margin-left" : "500%"
				});
				$("#createComputerMenu").find(".dialogScreen7").transition({
					"margin-left" : "600%"
				});
			};
			if (curPage == 1)
			{
				$("#createComputerMenu").find(".dialogScreen1").transition({
					"margin-left" : "-100%"
				});
				$("#createComputerMenu").find(".dialogScreen2").transition({
					"margin-left" : 0
				});
				$("#createComputerMenu").find(".dialogScreen3").transition({
					"margin-left" : "100%"
				});
				$("#createComputerMenu").find(".dialogScreen4").transition({
					"margin-left" : "200%"
				});
				$("#createComputerMenu").find(".dialogScreen5").transition({
					"margin-left" : "300%"
				});
				$("#createComputerMenu").find(".dialogScreen6").transition({
					"margin-left" : "400%"
				});
				$("#createComputerMenu").find(".dialogScreen7").transition({
					"margin-left" : "500%"
				});
			};
			if (curPage == 2)
			{
				$("#createComputerMenu").find(".dialogScreen1").transition({
					"margin-left" : "-200%"
				});
				$("#createComputerMenu").find(".dialogScreen2").transition({
					"margin-left" : "-100%"
				});
				$("#createComputerMenu").find(".dialogScreen3").transition({
					"margin-left" : 0
				});
				$("#createComputerMenu").find(".dialogScreen4").transition({
					"margin-left" : "100%"
				});
				$("#createComputerMenu").find(".dialogScreen5").transition({
					"margin-left" : "200%"
				});
				$("#createComputerMenu").find(".dialogScreen6").transition({
					"margin-left" : "300%"
				});
				$("#createComputerMenu").find(".dialogScreen7").transition({
					"margin-left" : "400%"
				});
			};
			if (curPage == 3)
			{
				$("#createComputerMenu").find(".dialogScreen1").transition({
					"margin-left" : "-300%"
				});
				$("#createComputerMenu").find(".dialogScreen2").transition({
					"margin-left" : "-200%"
				});
				$("#createComputerMenu").find(".dialogScreen3").transition({
					"margin-left" : "-100%"
				});
				$("#createComputerMenu").find(".dialogScreen4").transition({
					"margin-left" : 0
				});
				$("#createComputerMenu").find(".dialogScreen5").transition({
					"margin-left" : "100%"
				});
				$("#createComputerMenu").find(".dialogScreen6").transition({
					"margin-left" : "200%"
				});
				$("#createComputerMenu").find(".dialogScreen7").transition({
					"margin-left" : "300%"
				});
			};
			if (curPage == 4)
			{
				$("#createComputerMenu").find(".dialogScreen1").transition({
					"margin-left" : "-400%"
				});
				$("#createComputerMenu").find(".dialogScreen2").transition({
					"margin-left" : "-300%"
				});
				$("#createComputerMenu").find(".dialogScreen3").transition({
					"margin-left" : "-200%"
				});
				$("#createComputerMenu").find(".dialogScreen4").transition({
					"margin-left" : "-100%"
				});
				$("#createComputerMenu").find(".dialogScreen5").transition({
					"margin-left" : 0
				});
				$("#createComputerMenu").find(".dialogScreen6").transition({
					"margin-left" : "100%"
				});
				$("#createComputerMenu").find(".dialogScreen7").transition({
					"margin-left" : "200%"
				});
			};
			if (curPage == 5)
			{
				$("#createComputerMenu").find(".dialogScreen1").transition({
					"margin-left" : "-500%"
				});
				$("#createComputerMenu").find(".dialogScreen2").transition({
					"margin-left" : "-400%"
				});
				$("#createComputerMenu").find(".dialogScreen3").transition({
					"margin-left" : "-300%"
				});
				$("#createComputerMenu").find(".dialogScreen4").transition({
					"margin-left" : "-200%"
				});
				$("#createComputerMenu").find(".dialogScreen5").transition({
					"margin-left" : "-100%"
				});
				$("#createComputerMenu").find(".dialogScreen6").transition({
					"margin-left" : 0
				});
				$("#createComputerMenu").find(".dialogScreen7").transition({
					"margin-left" : "100%"
				});
			};
		});
		var sliderContainer = menu.find(".computerQASlider");
		sliderContainer.empty();
		var slider = $('<div class="budgetSlider"></div>').slider({
				orientation : "horizontal",
				range : "min",
				min : 0,
				max : 100,
				value : 0,
				animate : "fast",
				slide : function (event, ui) {
					var target = $(ui.handle).closest(".budgetSlider");
					if (!target.hasClass("budgetSlider"))
						throw "couldn't find target slider";
					target.slider("value", ui.value);
					updateComputerCost()
				}
			});
		sliderContainer.append(slider);
		var sliderContainer = menu.find(".computerSliderContainer");
		sliderContainer.empty();
		var slider = $('<div class="consoleVariationContainer royalSlider rsDefaultInv"></div>');
		sliderContainer.append(slider);
		var version = GameManager.company.licencedPlatforms.count(function (p) {
				return p.isCustom
			}) + 1;
		var consoles = getUnusedCustomConsoles();
		for (var i = 0; i < consoles.length; i++) {
			var item = $("<div><img src='mods/ExpansionPack/source/img/{0}' style='width:200px;'/><div class='sliderTabCaption rsTmb'>".format(consoles[i]) + PlatformShim.toStaticHtml("Variation {0}".localize().format(i + 1)) + "</div></div>");
			slider.append(item)
		}
		if (PlatformShim.ISWIN8)
			slider.gdSlider();
		options.onOpen = function () {
			if (!PlatformShim.ISWIN8)
				slider.gdSlider();
			updateConsoleInfo();
			updateComputerCost()
		};
		var okButton = menu.find(".okButton");
		okButton.clickExcl(function () {
			var computerCost = updateComputerCost();
			Sound.click();
			if (computerCost > GameManager.company.cash) {
				okButton.parent().effect("shake", {
					times : 2,
					distance : 5
				}, 50);
				$(".simplemodal-data").find(".windowCostLabel").effect("pulsate", {
					times : 2
				});
				return
			}
			okButton.off("click");
			var name = menu.find(".computerName")[0].value;
			var icon = menu.find(".rsActiveSlide img").attr("src");
			var featuresWithTechLevel = selectedComputerFeatures.filter(function (f) {
					return f.techLevel != undefined
				});
			var techLevel = featuresWithTechLevel.average(function (f) {
					return f.techLevel
				});
			var cost = Math.floor(techLevel * 300);
			var qF = menu.find(".budgetSlider").slider("value") / 100;
			var project = {
				id : "custom computer",
				pointsCost : cost,
				name : name,
				iconUri : icon,
				targetZone : 0,
				techLevel : techLevel,
				version : version,
				variation : getVariation(icon),
				qF : qF,
				feature : selectedComputerFeatures.map(function (f) {
					return f.id
				})
			};
			GameManager.company.adjustCash(-computerCost,
				"{0} costs".localize().format(name));
			GameManager.startComputerProject(project);
			UI.closeModal()
		});
		UI.showModalContent("#createComputerMenu", options)
	};
	var getVariation = function (icon) {
		return parseInt(icon.slice(38, 39))
	};
	var getUnusedCustomConsoles = function () {
		var consoles = [];
		for (var i = 1; i < 7; i++) {
			if (GameManager.company.flags["computer" + i + "Used"])
				continue;
			else
				consoles = consoles.concat(["case" + i + "V1.png", "case" +
							i + "V2.png", "case" + i + "V3.png"]);
			if (consoles.length === 6)
				break
		}
		if (consoles.length === 0) {
			for (var i = 1; i < 5; i++)
				GameManager.company.flags["computer" + i + "Used"] = undefined;
			return getUnusedCustomConsoles()
		}
		return consoles
	};
	var updateConsoleInfo = function () {
		var modalContent = $(".simplemodal-data");
		var enabled = true;
		var nextButton = modalContent.find(".dialogNextButton");
		if (enabled) {
			nextButton.clickExcl(function () {
				Sound.click();
				PlatformShim.execUnsafeLocalFunction(function () {
					if (curPage == 1)
						updateConsoleFeatureList();
					updateComputerCost();
				});
				if (curPage == 1)
				{
					$("#createComputerMenu").find(".dialogScreen1").transition({
						"margin-left" : "-200%"
					});
					$("#createComputerMenu").find(".dialogScreen2").transition({
						"margin-left" : 0
					});
					$("#createComputerMenu").find(".dialogScreen3").transition({
						"margin-left" : "200%"
					});
					$("#createComputerMenu").find(".dialogScreen4").transition({
						"margin-left" : "400%"
					});
					$("#createComputerMenu").find(".dialogScreen5").transition({
						"margin-left" : "600%"
					});
					$("#createComputerMenu").find(".dialogScreen6").transition({
						"margin-left" : "800%"
					});
					$("#createComputerMenu").find(".dialogScreen7").transition({
						"margin-left" : "1000%"
					});
				};
				if (curPage == 2)
				{
					$("#createComputerMenu").find(".dialogScreen1").transition({
						"margin-left" : "-400%"
					});
					$("#createComputerMenu").find(".dialogScreen2").transition({
						"margin-left" : "-200%"
					});
					$("#createComputerMenu").find(".dialogScreen3").transition({
						"margin-left" : 0
					});
					$("#createComputerMenu").find(".dialogScreen4").transition({
						"margin-left" : "200%"
					});
					$("#createComputerMenu").find(".dialogScreen5").transition({
						"margin-left" : "400%"
					});
					$("#createComputerMenu").find(".dialogScreen6").transition({
						"margin-left" : "600%"
					});
					$("#createComputerMenu").find(".dialogScreen7").transition({
						"margin-left" : "800%"
					});
				};
				if (curPage == 3)
				{
					$("#createComputerMenu").find(".dialogScreen1").transition({
						"margin-left" : "-600%"
					});
					$("#createComputerMenu").find(".dialogScreen2").transition({
						"margin-left" : "-400%"
					});
					$("#createComputerMenu").find(".dialogScreen3").transition({
						"margin-left" : "-200%"
					});
					$("#createComputerMenu").find(".dialogScreen4").transition({
						"margin-left" : 0
					});
					$("#createComputerMenu").find(".dialogScreen5").transition({
						"margin-left" : "200%"
					});
					$("#createComputerMenu").find(".dialogScreen6").transition({
						"margin-left" : "400%"
					});
					$("#createComputerMenu").find(".dialogScreen7").transition({
						"margin-left" : "600%"
					});
				};
				if (curPage == 4)
				{
					$("#createComputerMenu").find(".dialogScreen1").transition({
						"margin-left" : "-800%"
					});
					$("#createComputerMenu").find(".dialogScreen2").transition({
						"margin-left" : "-600%"
					});
					$("#createComputerMenu").find(".dialogScreen3").transition({
						"margin-left" : "-400%"
					});
					$("#createComputerMenu").find(".dialogScreen4").transition({
						"margin-left" : "-200%"
					});
					$("#createComputerMenu").find(".dialogScreen5").transition({
						"margin-left" : 0
					});
					$("#createComputerMenu").find(".dialogScreen6").transition({
						"margin-left" : "200%"
					});
					$("#createComputerMenu").find(".dialogScreen7").transition({
						"margin-left" : "400%"
					});
				};
				if (curPage == 5)
				{
					$("#createComputerMenu").find(".dialogScreen1").transition({
						"margin-left" : "-1000%"
					});
					$("#createComputerMenu").find(".dialogScreen2").transition({
						"margin-left" : "-800%"
					});
					$("#createComputerMenu").find(".dialogScreen3").transition({
						"margin-left" : "-600%"
					});
					$("#createComputerMenu").find(".dialogScreen4").transition({
						"margin-left" : "-400%"
					});
					$("#createComputerMenu").find(".dialogScreen5").transition({
						"margin-left" : "-200%"
					});
					$("#createComputerMenu").find(".dialogScreen6").transition({
						"margin-left" : 0
					});
					$("#createComputerMenu").find(".dialogScreen7").transition({
						"margin-left" : "200%"
					});
				};
				if (curPage == 6)
				{
					$("#createComputerMenu").find(".dialogScreen1").transition({
						"margin-left" : "-1200%"
					});
					$("#createComputerMenu").find(".dialogScreen2").transition({
						"margin-left" : "-1000%"
					});
					$("#createComputerMenu").find(".dialogScreen3").transition({
						"margin-left" : "-800%"
					});
					$("#createComputerMenu").find(".dialogScreen4").transition({
						"margin-left" : "-600%"
					});
					$("#createComputerMenu").find(".dialogScreen5").transition({
						"margin-left" : "-400%"
					});
					$("#createComputerMenu").find(".dialogScreen6").transition({
						"margin-left" : "-200%"
					});
					$("#createComputerMenu").find(".dialogScreen7").transition({
						"margin-left" : 0
					});
				};
			});
			nextButton.removeClass("baseButton").addClass("selectorButton").addClass("orangeButton")
		} else
			nextButton.removeClass("selectorButton").removeClass("orangeButton").addClass("baseButton").addClass("disabledButton").clickExcl(function () {
				nextButton.effect("shake", {
					times : 2,
					distance : 5
				}, 50)
			})
	};
	var updateConsoleFeatureList = function () {
		var modalContent =
			$(".simplemodal-data");
		
		var featureContainer1 = modalContent.find(".featureSelectionContainer2");
		var featureContainer2 = modalContent.find(".featureSelectionContainer3");
		var featureContainer3 = modalContent.find(".featureSelectionContainer4");
		var featureContainer4 = modalContent.find(".featureSelectionContainer5");
		var featureContainer5 = modalContent.find(".featureSelectionContainer6");
		var featureContainer6 = modalContent.find(".featureSelectionContainer7");
		
		var company = GameManager.company;
		
		var allAvailableGameFeatures = p.osParts.concat(p.CPUParts, p.GPUParts, p.MBParts, p.RAMParts, p.storageParts);
		
		featureContainer1.empty();
		featureContainer2.empty();
		featureContainer3.empty();
		featureContainer4.empty();
		featureContainer5.empty();
		featureContainer6.empty();
			
		selectedComputerFeatures = [];
		var category = null;
		var categoryDisplayName = null;
		var groups =
			[];
		var toggleSelectFeature = function (element, feature) {
			if (!element.hasClass("selectedFeature")) {
				if (feature.group) {
					var groupClass = ".radioButton" + groups.indexOf(feature.group);
					
					featureContainer1.find(groupClass).removeClass("selectedFeature");
					featureContainer2.find(groupClass).removeClass("selectedFeature");
					featureContainer3.find(groupClass).removeClass("selectedFeature");
					featureContainer4.find(groupClass).removeClass("selectedFeature");
					featureContainer5.find(groupClass).removeClass("selectedFeature");
					featureContainer6.find(groupClass).removeClass("selectedFeature");
					
					var features2Remove = selectedComputerFeatures.filter(function (f) {
							return f.group === feature.group
						});
					for (var i = 0; i < features2Remove.length; i++)
						selectedComputerFeatures.remove(features2Remove[i])
				}
				element.addClass("selectedFeature");
				selectedComputerFeatures.push(feature);
				UI._updateGameDefinitionCost()
			} else {
				if (feature.group === "Operating System" || feature.group === "CPU" || feature.group === "GPU")
					return;
				element.removeClass("selectedFeature");
				selectedComputerFeatures.remove(feature)
			}
			updateComputerCost()
		};
		for (var i = 0; i < allAvailableGameFeatures.length; i++) {
			var feature = allAvailableGameFeatures[i];
			
			if (feature.categoryDisplayName != categoryDisplayName) {
				if (feature.category == "Operating System")
					featureContainer1.append($('<div class="featureSelectionCategoryHeading">{0}</div>'.format(feature.categoryDisplayName ? feature.categoryDisplayName : feature.category)));		
				if (feature.category == "CPU")
					featureContainer2.append($('<div class="featureSelectionCategoryHeading">{0}</div>'.format(feature.categoryDisplayName ? feature.categoryDisplayName : feature.category)));
				if (feature.category == "Motherboard")
					featureContainer3.append($('<div class="featureSelectionCategoryHeading">{0}</div>'.format(feature.categoryDisplayName ? feature.categoryDisplayName : feature.category)));
				if (feature.category == "GPU")
					featureContainer4.append($('<div class="featureSelectionCategoryHeading">{0}</div>'.format(feature.categoryDisplayName ? feature.categoryDisplayName : feature.category)));
				if (feature.category == "RAM")
					featureContainer5.append($('<div class="featureSelectionCategoryHeading">{0}</div>'.format(feature.categoryDisplayName ? feature.categoryDisplayName : feature.category)));
				if (feature.category == "Storage")
					featureContainer6.append($('<div class="featureSelectionCategoryHeading">{0}</div>'.format(feature.categoryDisplayName ? feature.categoryDisplayName : feature.category)));
				
				categoryDisplayName = feature.categoryDisplayName
			}
			var element = UI.generateFeatureElement(feature);
			element.find(".featureContent").text("{0} ({1})".format(feature.name,
					UI.getShortNumberString(Research.getEngineCost(feature) * 100)));
			if (feature.group) {
				if (groups.indexOf(feature.group) == -1)
					groups.push(feature.group);
				var groupClass = "radioButton" + groups.indexOf(feature.group);
				element.addClass(groupClass)
			}
			(function (element, feature) {
				element.clickExcl(function () {
					toggleSelectFeature(element, feature)
				})
			})(element, feature);
			
			if (feature.category == "Operating System")
				featureContainer1.append(element);
			if (feature.category == "CPU")
				featureContainer2.append(element);
			if (feature.category == "Motherboard")
				featureContainer3.append(element);
			if (feature.category == "GPU")	
				featureContainer4.append(element);
			if (feature.category == "RAM")	
				featureContainer5.append(element);
			if (feature.category == "Storage")	
				featureContainer6.append(element);
			
			if (GameManager.uiSettings.selectedComputerFeatures && GameManager.uiSettings.selectedComputerFeatures.indexOf(feature.id) != -1)
				toggleSelectFeature(element,
					feature);
			else if (!selectedComputerFeatures.some(function (f) {
					return f.category === "Operating System"
				}))
				toggleSelectFeature(element, feature)
		}
	};
	var getConsoleCosts = function () {
		if (!selectedComputerFeatures || selectedComputerFeatures.length == 0)
			return 0;
		return selectedComputerFeatures.sum(function (f) {
			return Research.getEngineCost(f) * 100
		})
	};
	var updateComputerCost = function () {
		var modalContent = $(".simplemodal-data");
		var cost = 1E6;
		cost += getConsoleCosts();
		var value = modalContent.find(".budgetSlider").slider("value");
		var qACost = customEase(costSliderEase, 1, MAX_QA_BUDGET / 1E6, value / 100);
		qACost = Math.floor(qACost);
		qACost *= 1E6;
		cost += qACost;
		var costElement = modalContent.find(".windowCostLabel");
		costElement.empty().append($("<span>{0}</span>".format("Cost: {0}".localize().format(UI.getShortNumberString(cost))))).textfill({
			maxFontPixels : 20,
			maxHeightPts : 37
		});
		return cost
	};
	function costSliderEase(t, b, c, d) {
		var ts = (t /= d) * t;
		var tc = ts * t;
		return b + c * (-0.5 * tc * ts + 3 * ts * ts + -3.5 * tc + 2 * ts)
	}
	function customEase(method, from, to, t) {
		var factor =
			method(t, 0, 1, 1);
		return from + (to - from) * factor
	}
	var saveSelectedComputerSettings = function () {
		if (selectedComputerFeatures)
			GameManager.uiSettings.selectedComputerFeatures = selectedComputerFeatures.map(function (f) {
					return f.id
				})
	};
	UI.createConsoleClick = function () {
		Sound.click()
	}
	nextPage = function () {
		curPage ++;
	}
	prevPage = function () {
		curPage --;
	};
	GameManager.startComputerProject = function (project) {
		var zone = project.targetZone;
		var currentComputerProject = {};
		if (project.id === "custom computer")
			$.extend(currentComputerProject, project);
		$.extend(currentComputerProject, {
			id : project.id,
			name : project.name,
			progress : 0,
			startPoints : project.pointsCost,
			remainingPoints : project.pointsCost,
			iconUri : project.iconUri,
			targetZone : zone,
			startTime : GameManager.gameTime
		});
		GameManager.currentHwProject = currentComputerProject;
		VisualsManager.putConsoleToPedestal()
	};
	GameManager.finishProject = function (project) {
		if (GameManager.currentHwProject == project)
			GameManager.currentHwProject = null;
		else if (GameManager.currentRnDProject == project)
			GameManager.currentRnDProject = null;
		if (project.id === "custom console") {
			GameManager.finishCustomConsole(project);
			VisualsManager.putConsoleToPedestal()
		} else if (project.id === "custom computer") {
			GameManager.finishCustomComputer(project);
			VisualsManager.putConsoleToPedestal()
		} else {
			Research.bigProjects.first(function (p) {
				return p.id == project.id
			}).complete(GameManager.company);
			ghg4.ghg5("project complete", {
				id : project.id
			})
		}
	};
	
	GameManager.finishCustomComputer = function (project) {
		var company = GameManager.company;
		if (!company)
			return;
		company.flags["computer" + project.variation + "Used"] = true;
		var duration = GameManager.gameTime - project.startTime;
		var week = company.currentWeek;
		var normalizedWeek = week / GameManager.flags.gameLengthModifier;
		var published = company.getDate(normalizedWeek);
		var factor = 1.1;
		var newestTechLevel = company.availablePlatforms.concat(company.licencedPlatforms).max(function (p) {
				return p.techLevel
			});
		var isGoodTech = project.techLevel >= newestTechLevel;
		var diff = project.techLevel - newestTechLevel;
		factor += diff / 5;
		var qF = project.qF;
		var diff = qF * 10 - project.techLevel;
		factor += (diff / 20).clamp(-0.2, 0.2);
		var featureValues = project.feature.map(function (id) {
				return p.allComputerParts().first(function (r) {
					return r.id === id
				})
			}).filter(function (f) {
				return f.category != "Operating System".localize() && f.category != "CPU".localize() && f.category != "Motherboard".localize() && f.category != "GPU".localize() && f.category != "RAM".localize() && f.category != "Storage".localize()
			}).sum(function (f) {
				return f.v
			});
		var goodFeatureValue = 22;
		var featureFactor = featureValues / goodFeatureValue;
		factor = factor * 0.7 + 0.3 * featureFactor;
		if (factor > 1) {
			var rest = factor - 1;
			factor = 1 + rest * 0.3
		}
		var startAmount = Platforms.allPlatforms.filter(function (p) {
				return p.techLevel <= project.techLevel
			}).max(function (p) {
				return p.startAmount
			});
		startAmount *= factor;
		var unitsSold = Platforms.allPlatforms.filter(function (p) {
				return p.techLevel <= project.techLevel
			}).max(function (p) {
				return Platforms.getMarketSizeForWeek(p, company.currentWeek + 144, company)
			});
		unitsSold /= 5E6;
		unitsSold *= factor;
		var computer = {
			id : GameManager.getGUID(),
			isCustom : true,
			iconUri : project.iconUri,
			name : project.name,
			company : company.name,
			published : "{0}/{1}/{2}".format(published.year, published.month, published.week),
			developmentCosts : 0,
			genreWeightings : GameManager.getCalculatedPlatformGenreWeightings(),
			audienceWeightings : GameManager.getCalculatedPlatformAudienceWeightings(),
			techLevel : project.techLevel,
			isGoodTech : isGoodTech,
			featureFactor : featureFactor,
			startAmount : startAmount,
			unitsSold : unitsSold,
			qF : qF,
			successFactor : factor,
			version : project.version
		};
		var customComputer = company.licencedPlatforms.filter(function (p) {
				return p.isCustom &&
				!p.saleCancelled
			});
		for (var i = 0; i < customComputer.length; i++)
			customComputer[i].saleCancelled = true;
		company.licencedPlatforms.push(computer);
		Media.createConsoleStartStory(computer);
		Tutorial.consoleReleased(1.4)
	};
})();
