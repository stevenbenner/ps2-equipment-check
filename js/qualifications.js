/* exported Qualifications */

function Qualifications(skills, items) {
	return {
		'soldier': {

			'Heavy Assault': {
				certifications: [
					{ skill: skills.heavyAssault.flakArmor, level: 3 }
				],
				equipment: []
			},

			'Light Assault': {
				certifications: [
					{ skill: skills.lightAssault.flakArmor, level: 3 }
				],
				equipment: []
			},

			'Engineer': {
				certifications: [
					{ skill: skills.engineer.tankMine, level: 1 }
				],
				equipment: []
			},

			'Medic': {
				certifications: [
					{ skill: skills.medic.flakArmor, level: 3 }
				],
				equipment: []
			},

			'Infiltrator': {
				certifications: [
					{ skill: skills.infiltrator.flakArmor, level: 3 }
				],
				equipment: []
			},

			'Sunderer': {
				certifications: [
					{ skill: skills.sunderer.advancedMobileStation, level: 1 }
				],
				equipment: []
			},

			'Squad Leader': {
				certifications: [
					{ skill: skills.squadLeader.priorityDeployment, level: 0 }
				],
				equipment: []
			}
		},

		'veteran': {

			'Heavy Assault': {
				certifications: [
					{ skill: skills.heavyAssault.flakArmor, level: 3 }
				],
				equipment: [
					items.weapon.t2
				]
			},

			'Light Assault': {
				certifications: [
					{ skill: skills.lightAssault.flakArmor, level: 3 },
					{ skill: skills.lightAssault.c4, level: 2 }
				],
				equipment: [
					items.weapon.trac5s,
				]
			},

			'Engineer': {
				certifications: [
					{ skill: skills.engineer.flakArmor, level: 3 },
					{ skill: skills.engineer.nanoArmorKit, level: 6 },
					{ skill: skills.engineer.tankMine, level: 2 },
					{ skill: skills.engineer.avManaTurret, level: 1 }
				],
				equipment: [
					items.weapon.trac5s,
					items.engineer.avManaTurret
				]
			},

			'Medic': {
				certifications: [
					{ skill: skills.medic.flakArmor, level: 3 },
					{ skill: skills.medic.medicalApplicator, level: 6 }
				],
				equipment: []
			},

			'Infiltrator': {
				certifications: [
					{ skill: skills.infiltrator.flakArmor, level: 3 },
					{ skill: skills.infiltrator.claymoreMine, level: 2 }
				],
				equipment: [
					items.weapon.pdw16,
					items.weapon.ns7pdw,
					items.weapon.rams
				]
			},

			'Sunderer': {
				certifications: [
					{ skill: skills.sunderer.vehicleAmmoDispenser, level: 1 },
					{ skill: skills.sunderer.mineGuard, level: 4 },
					{ skill: skills.sunderer.blockadeArmor, level: 3 },
					{ skill: skills.sunderer.advancedMobileStation, level: 1 },
					{ skill: skills.sunderer.vehicleStealth, level: 1 }
				],
				equipment: []
			},

			'Squad Leader': {
				certifications: [
					{ skill: skills.squadLeader.priorityDeployment, level: 2 }
				],
				equipment: []
			}

		},

		'echo squad': {

			'Heavy Assault': {
				certifications: [
					{ skill: skills.heavyAssault.flakArmor, level: 4 },
					{ skill: skills.heavyAssault.nanoweaveArmor, level: 4 },
					{ skill: skills.heavyAssault.resistShield, level: 1 },
					{ skill: skills.heavyAssault.concussionGrenade, level: 1 },
					{ skill: skills.heavyAssault.c4, level: 2 },
					{ skill: skills.universal.medicalKit, level: 3 },
					{ skill: skills.universal.restorationKit, level: 3 }
				],
				equipment: [
					items.weapon.t2,
					items.weapon.decimator
				]
			},

			'Light Assault': {
				certifications: [
					{ skill: skills.lightAssault.flakArmor, level: 4 },
					{ skill: skills.lightAssault.nanoweaveArmor, level: 4 },
					{ skill: skills.lightAssault.grenadeBandolier, level: 2 },
					{ skill: skills.lightAssault.c4, level: 2 },
					{ skill: skills.lightAssault.jumpJets, level: 6 },
					{ skill: skills.lightAssault.drifterJumpJets, level: 5 },
					{ skill: skills.lightAssault.flashGrenade, level: 1 },
				],
				equipment: [
					items.weapon.trac5s,
				]
			},

			'Engineer': {
				certifications: [
					{ skill: skills.engineer.flakArmor, level: 4 },
					{ skill: skills.engineer.nanoweaveArmor, level: 4 },
					{ skill: skills.engineer.nanoArmorKit, level: 6 },
					{ skill: skills.engineer.tankMine, level: 2 },
					{ skill: skills.engineer.avManaTurret, level: 1 },
					{ skill: skills.engineer.ammunitionPackage, level: 3 },
					{ skill: skills.engineer.stickyGrenade, level: 1 }
				],
				equipment: [
					items.weapon.trac5s,
					items.engineer.avManaTurret
				]
			},

			'Medic': {
				certifications: [
					{ skill: skills.medic.flakArmor, level: 4 },
					{ skill: skills.medic.nanoweaveArmor, level: 4 },
					{ skill: skills.medic.medicalApplicator, level: 6 },
					{ skill: skills.medic.nanoRegenDevice, level: 6 },
					{ skill: skills.medic.naniteReviveGrenade, level: 1 },
					{ skill: skills.medic.naniteHealingGrenade, level: 1 },
					{ skill: skills.medic.c4, level: 2 },
					{ skill: skills.universal.medicalKit, level: 3 },
					{ skill: skills.universal.restorationKit, level: 3 }
				],
				equipment: []
			},

			'Infiltrator': {
				certifications: [
					{ skill: skills.infiltrator.flakArmor, level: 4 },
					{ skill: skills.infiltrator.nanoweaveArmor, level: 4 },
					{ skill: skills.infiltrator.reconDetectDevice, level: 6 },
					{ skill: skills.infiltrator.advancedEquipmentTerminalHacking, level: 3 },
					{ skill: skills.infiltrator.claymoreMine, level: 2 },
					{ skill: skills.infiltrator.empGrenade, level: 1 }
				],
				equipment: [
					items.weapon.pdw16,
					items.weapon.ns7pdw,
					items.weapon.rams
				]
			},

			'MAX': {
				certifications: [
					{ skill: skills.max.flakArmor, level: 5 },
					{ skill: skills.max.kineticArmor, level: 5 },
					{ skill: skills.max.lockdown, level: 2 }
				],
				equipment: [
					items.max.leftMercy,
					items.max.rightMercy,
					items.max.leftFracture,
					items.max.rightFracture
				]
			},

			'Squad Leader': {
				certifications: [
					{ skill: skills.squadLeader.priorityDeployment, level: 4 }
				],
				equipment: []
			}

		},

		'echo vehicle': {

			'Sunderer': {
				certifications: [
					{ skill: skills.sunderer.vehicleAmmoDispenser, level: 1 },
					{ skill: skills.sunderer.mineGuard, level: 4 },
					{ skill: skills.sunderer.blockadeArmor, level: 3 },
					{ skill: skills.sunderer.advancedMobileStation, level: 1 },
					{ skill: skills.sunderer.gateShieldDiffuser, level: 3 },
					{ skill: skills.sunderer.vehicleStealth, level: 4 },
					{ skill: skills.sunderer.naniteProximityRepairSystem, level: 6 }
				],
				equipment: []
			},

			'Prowler': {
				certifications: [
					{ skill: skills.prowler.anchoredMode, level: 4 },
					{ skill: skills.prowler.reinforcedSideArmor, level: 1 }
				],
				equipment: []
			},

			'Harasser': {
				certifications: [
					{ skill: skills.harasser.compositeArmor, level: 4 }
				],
				equipment: []
			},

			'Mosquito': {
				certifications: [
					{ skill: skills.mosquito.acquisitionTimer, level: 6 },
					{ skill: skills.mosquito.scoutRadar, level: 4 }
				],
				equipment: [
					items.mosquito.m18rotary,
					items.mosquito.hellfireRocketPods
				]
			},

			'Liberator': {
				certifications: [
					{ skill: skills.liberator.acquisitionTimer, level: 6 },
					{ skill: skills.liberator.naniteAutoRepair, level: 5 }
				],
				equipment: []
			}

		}
	};
}
