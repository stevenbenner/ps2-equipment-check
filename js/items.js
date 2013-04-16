// item definitions - tr specific
// how to find item id example:
//     http://census.soe.com/get/ps2-beta/item?name.en=^Medical%20Applicator&c:start=0&c:limit=25&c:show=name.en,classes_list,faction
var items = {
	class: {
		engineer: {
			avManaTurret: 71564,
			flakArmor: [
				8121,
				8122,
				8123,
				8124,
				8125
			]
		},
		heavyAssault: {
			flakArmor: [
				7693,
				7694,
				7695,
				7696,
				7697
			]
		},
		infiltrator: {
			flakArmor: [
				8116,
				8117,
				8118,
				8119,
				8120
			]
		},
		lightAssault: {
			flakArmor: [
				7659,
				7660,
				7661,
				7662,
				7663
			]
		},
		medic: {
			medicalApplicator: [
				94,
				1608,
				1609,
				1610,
				1611,
				1612
			]
		}
	},
	consumable: {
		claymore: 429,
		c4: 432,
		tankMine: 650,
		reviveGrenade: 884,
		concussionGrenade: 1096,
		flashGrenade: 7755,
		empGrenade: 50051
	},
	vehicle: {
		lightning: {
			skyguard: 3108,
			fireSuppression: [
				3113,
				3114,
				3115,
				3116
			],
			mineGuard: [
				3139,
				3140,
				3141,
				3142
			]
		},
		prowler: {
			walker: 4003,
			p2120he: 4009,
			ranger: 4010,
			halberd: 4015,
			vulcan: 4029,
			anchoredMode: [
				4030,
				4031,
				4032,
				4033
			],
			mineGuard: [
				4050,
				4051,
				4052,
				4053
			]
		},
		sunderer: {
			ams: 2996,
			frontBulldog: 2832,
			rearBulldog: 2835,
			frontFury: 2874,
			rearFury: 2877,
			frontWalker: 3082,
			rearWalker: 3085,
			frontRanger: 3088,
			rearRanger: 3091,
			ammoDispenser: [
				2830,
				2961,
				2962,
				2963
			],
			mineGuard: [
				2845,
				3017,
				3018,
				3019
			],
			proximityRepair: [
				2964,
				2965,
				2966,
				2967,
				2968,
				2969
			]
		}
	},
	weapon: {
		trac5s: {
			id: 7192,
			grenadeLauncher: 9322,
			smokeLauncher: 9329,
			hsnv: 9323,
			suppressor: 9330
		},
		m77: 25000,
		tsar: 25001,
		ksr: 25002,
		sr7: 25003,
		rams: 25004,
		smg46: 28000,
		pdw16: 28001,
		t2: 34002,
		skep: 34003
	}
};
