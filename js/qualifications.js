/* exported qualifications */

var qualifications = {

	'alpha squad': {

		'Light Assault': {
			certifications: [
				{ skill: skills.lightAssault.flakArmor, level: 3 },
				{ skill: skills.lightAssault.c4, level: 1 },
				{ skill: skills.lightAssault.flashGrenade, level: 1 },
			],
			equipment: [
			]
		},

		'Infiltrator': {
			certifications: [
				{ skill: skills.infiltrator.flakArmor, level: 3 },
				{ skill: skills.infiltrator.claymoreMine, level: 2 },
				{ skill: skills.infiltrator.empGrenade, level: 1 }
			],
			equipment: [
				items.weapon.m77,
				items.weapon.tsar,
				items.weapon.sr7,
				items.weapon.rams,
				items.weapon.smg46,
				items.weapon.pdw16
			]
		},

		'Engineer': {
			certifications: [
				{ skill: skills.engineer.flakArmor, level: 3 },
				{ skill: skills.engineer.tankMine, level: 1 },
				{ skill: skills.engineer.avManaTurret, level: 1 }
			],
			equipment: [
				items.weapon.trac5s,
			]
		},

		'Medic': {
			certifications: [
				{ skill: skills.medic.medicalApplicator, level: 4 },
				{ skill: skills.medic.naniteReviveGrenade, level: 1 }
			],
			equipment: [
			]
		},

		'Sunderer': {
			certifications: [
				{ skill: skills.sunderer.mineGuard, level: 3 },
				{ skill: skills.sunderer.advancedMobileStation, level: 1 }
			],
			equipment: [
				items.sunderer.frontBulldog,
				items.sunderer.rearBulldog,
				items.sunderer.frontFury,
				items.sunderer.rearFury
			]
		},

	},

	'bravo squad': {

		'Heavy Assault': {
			certifications: [
				{ skill: skills.heavyAssault.flakArmor, level: 3 },
				{ skill: skills.heavyAssault.concussionGrenade, level: 1 }
			],
			equipment: [
				items.weapon.t2,
				items.weapon.skep
			]
		},

		'Engineer': {
			certifications: [
				{ skill: skills.engineer.flakArmor, level: 3 },
				{ skill: skills.engineer.tankMine, level: 1 }
			],
			equipment: [
				items.weapon.trac5s,
				items.engineer.avManaTurret
			]
		},

		'Medic': {
			certifications: [
				{ skill: skills.medic.medicalApplicator, level: 4 },
				{ skill: skills.medic.naniteReviveGrenade, level: 1 }
			],
			equipment: [
			]
		},

		'Prowler': {
			certifications: [
				{ skill: skills.prowler.anchoredMode, level: 2 },
				{ skill: skills.prowler.mineGuard, level: 3 }
			],
			equipment: [
				items.prowler.p2120he,
				items.prowler.walker,
				items.prowler.ranger,
				items.prowler.halberd,
				items.prowler.vulcan
			]
		},

		'Sunderer': {
			certifications: [
				{ skill: skills.sunderer.advancedMobileStation, level: 1 },
				{ skill: skills.sunderer.vehicleAmmoDispenser, level: 1 },
				{ skill: skills.sunderer.naniteProximityRepairSystem, level: 6 }
			],
			equipment: [
				items.sunderer.frontWalker,
				items.sunderer.frontRanger,
				items.sunderer.rearWalker,
				items.sunderer.rearRanger
			]
		},

		'Lightning': {
			certifications: [
				{ skill: skills.lightning.fireSuppression, level: 3 },
				{ skill: skills.lightning.mineGuard, level: 3 }
			],
			equipment: [
				items.lightning.skyguard
			]
		}

	}

};
