var qualifications = {

	'alpha squad': {

		lightAssault: [
			{
				item: items.class.lightAssault.flakArmor,
				level: 3,
				required: true,
				group: 'equipment'
			},
			{
				item: items.consumable.c4,
				required: true,
				group: 'consumable'
			},
			{
				item: items.consumable.flashGrenade,
				required: false,
				group: 'consumable'
			}
		],

		infiltrator: [
			{
				item: items.class.infiltrator.flakArmor,
				level: 3,
				required: true,
				group: 'equipment'
			},
			{
				item: [
					items.weapon.m77,
					items.weapon.tsar,
					items.weapon.sr7,
					items.weapon.rams
				],
				required: true,
				group: 'sniper'
			},
			{
				item: [
					items.weapon.smg46,
					items.weapon.pdw16
				],
				required: true,
				group: 'smg'
			},
			{
				item: items.consumable.claymore,
				required: false,
				group: 'consumable'
			},
			{
				item: items.consumable.empGrenade,
				required: false,
				group: 'consumable'
			}
		],

		engineer: [
			{
				item: items.class.engineer.flakArmor,
				level: 3,
				required: true,
				group: 'equipment'
			},
			{
				item: items.weapon.trac5s,
				required: true,
				group: 'weapon'
			},
			{
				item: items.weapon.trac5s.hsnv,
				required: true,
				group: 'weapon-attachment'
			},
			{
				item: items.weapon.trac5s.suppressor,
				required: true,
				group: 'weapon-attachment'
			},
			{
				item: items.weapon.trac5s.grenadeLauncher,
				required: true,
				group: 'weapon-launcher'
			},
			{
				item: items.weapon.trac5s.smokeLauncher,
				required: true,
				group: 'weapon-launcher'
			},
			{
				item: items.consumable.tankMine,
				required: true,
				group: 'consumable'
			}
		],

		medic: [
			{
				item: items.class.medic.medicalApplicator,
				level: 4,
				required: true,
				group: 'weapon'
			},
			{
				item: items.consumable.reviveGrenade,
				required: false,
				group: 'consumable'
			}
		],

		sunderer: [
			{
				item: [
					items.vehicle.sunderer.frontBulldog,
					items.vehicle.sunderer.frontFury
				],
				required: true,
				group: 'front-weapon'
			},
			{
				item: [
					items.vehicle.sunderer.rearBulldog,
					items.vehicle.sunderer.rearFury
				],
				required: true,
				group: 'rear-weapon'
			},
			{
				item: items.vehicle.sunderer.ams,
				required: true,
				group: 'utility-slot'
			},
			{
				item: items.vehicle.sunderer.mineGuard,
				level: 3,
				required: true,
				group: 'defense-slot'
			}
		]

	},

	'bravo squad': {

		heavyAssault: [
			{
				item: items.class.heavyAssault.flakArmor,
				level: 3,
				required: true,
				group: 'equipment'
			},
			{
				item: [
					items.weapon.skep,
					items.weapon.t2
				],
				required: true,
				group: 'rocket-launcher'
			},
			{
				item: items.consumable.concussionGrenade,
				required: false,
				group: 'consumable'
			}
		],

		engineer: [
			{
				item: items.class.engineer.flakArmor,
				level: 3,
				required: true,
				group: 'equipment'
			},
			{
				item: items.weapon.trac5s,
				required: true,
				group: 'weapon'
			},
			{
				item: items.weapon.trac5s.hsnv,
				required: true,
				group: 'weapon-attachment'
			},
			{
				item: items.weapon.trac5s.suppressor,
				required: true,
				group: 'weapon-attachment'
			},
			{
				item: items.weapon.trac5s.grenadeLauncher,
				required: true,
				group: 'weapon-launcher'
			},
			{
				item: items.weapon.trac5s.smokeLauncher,
				required: true,
				group: 'weapon-launcher'
			},
			{
				item: items.class.engineer.avManaTurret,
				required: true,
				group: 'turret'
			},
			{
				item: items.consumable.tankMine,
				required: true,
				group: 'consumable'
			}
		],

		medic: [
			{
				item: items.class.medic.medicalApplicator,
				level: 4,
				required: true,
				group: 'weapon'
			},
			{
				item: items.consumable.reviveGrenade,
				required: false,
				group: 'consumable'
			}
		],

		prowler: [
			{
				item: items.vehicle.prowler.p2120he,
				required: true,
				group: 'primary'
			},
			{
				item: [
					items.vehicle.prowler.walker,
					items.vehicle.prowler.ranger,
					items.vehicle.prowler.halberd,
					items.vehicle.prowler.vulcan
				],
				required: true,
				group: 'secondary'
			},
			{
				item: items.vehicle.prowler.anchoredMode,
				level: 2,
				required: true,
				group: 'utility-slot'
			},
			{
				item: items.vehicle.prowler.mineGuard,
				level: 3,
				required: true,
				group: 'defense-slot'
			}
		],

		sunderer: [
			{
				item: [
					items.vehicle.sunderer.frontWalker,
					items.vehicle.sunderer.frontRanger
				],
				required: true,
				group: 'front-weapon'
			},
			{
				item: [
					items.vehicle.sunderer.rearWalker,
					items.vehicle.sunderer.rearRanger
				],
				required: true,
				group: 'rear-weapon'
			},
			{
				item: items.vehicle.sunderer.ams,
				required: true,
				group: 'utility-slot'
			},
			{
				item: [
					{
						item: items.vehicle.sunderer.ammoDispenser,
						level: 1
					},
					{
						item: items.vehicle.sunderer.proximityRepair,
						level: 5
					}
				],
				required: true,
				group: 'defense-slot'
			}
		],

		lightning: [
			{
				item: items.vehicle.lightning.skyguard,
				required: true,
				group: 'primary'
			},
			{
				item: items.vehicle.lightning.fireSuppression,
				level: 3,
				required: true,
				group: 'utility-slot'
			},
			{
				item: items.vehicle.lightning.mineGuard,
				level: 3,
				required: true,
				group: 'defense-slot'
			}
		]

	}

};
