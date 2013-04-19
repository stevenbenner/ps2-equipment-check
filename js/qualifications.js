var qualifications = {

	'alpha squad': {

		'Light Assault': [
			{
				item: items.lightAssault.flakArmor,
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

		'Infiltrator': [
			{
				item: items.infiltrator.flakArmor,
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

		'Engineer': [
			{
				item: items.engineer.flakArmor,
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

		'Medic': [
			{
				item: items.medic.medicalApplicator,
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

		'Sunderer': [
			{
				item: [
					items.sunderer.frontBulldog,
					items.sunderer.frontFury
				],
				required: true,
				group: 'front-weapon'
			},
			{
				item: [
					items.sunderer.rearBulldog,
					items.sunderer.rearFury
				],
				required: true,
				group: 'rear-weapon'
			},
			{
				item: items.sunderer.ams,
				required: true,
				group: 'utility-slot'
			},
			{
				item: items.sunderer.mineGuard,
				level: 3,
				required: true,
				group: 'defense-slot'
			}
		]

	},

	'bravo squad': {

		'Heavy Assault': [
			{
				item: items.heavyAssault.flakArmor,
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

		'Engineer': [
			{
				item: items.engineer.flakArmor,
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
				item: items.engineer.avManaTurret,
				required: true,
				group: 'turret'
			},
			{
				item: items.consumable.tankMine,
				required: true,
				group: 'consumable'
			}
		],

		'Medic': [
			{
				item: items.medic.medicalApplicator,
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

		'Prowler': [
			{
				item: items.prowler.p2120he,
				required: true,
				group: 'primary'
			},
			{
				item: [
					items.prowler.walker,
					items.prowler.ranger,
					items.prowler.halberd,
					items.prowler.vulcan
				],
				required: true,
				group: 'secondary'
			},
			{
				item: items.prowler.anchoredMode,
				level: 2,
				required: true,
				group: 'utility-slot'
			},
			{
				item: items.prowler.mineGuard,
				level: 3,
				required: true,
				group: 'defense-slot'
			}
		],

		'Sunderer': [
			{
				item: [
					items.sunderer.frontWalker,
					items.sunderer.frontRanger
				],
				required: true,
				group: 'front-weapon'
			},
			{
				item: [
					items.sunderer.rearWalker,
					items.sunderer.rearRanger
				],
				required: true,
				group: 'rear-weapon'
			},
			{
				item: items.sunderer.ams,
				required: true,
				group: 'utility-slot'
			},
			{
				item: [
					{
						item: items.sunderer.ammoDispenser,
						level: 1
					},
					{
						item: items.sunderer.proximityRepair,
						level: 5
					}
				],
				required: true,
				group: 'defense-slot'
			}
		],

		'Lightning': [
			{
				item: items.lightning.skyguard,
				required: true,
				group: 'primary'
			},
			{
				item: items.lightning.fireSuppression,
				level: 3,
				required: true,
				group: 'utility-slot'
			},
			{
				item: items.lightning.mineGuard,
				level: 3,
				required: true,
				group: 'defense-slot'
			}
		]

	}

};
