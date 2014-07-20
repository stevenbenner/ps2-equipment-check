/* exported Qualifications */

function Qualifications(skills, items) {
	var requirements = {
			'soldier': {
				meta: {
					passPercentage: 100
				},
				classes: {
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
							{ skill: skills.engineer.flakArmor, level: 3 },
							{ skill: skills.engineer.nanoArmorKit, level: 4 },
							{ skill: skills.engineer.tankMine, level: 1 }
						],
						equipment: []
					},
					'Medic': {
						certifications: [
							{ skill: skills.medic.flakArmor, level: 3 },
							{ skill: skills.medic.medicalApplicator, level: 4 }
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
				}
			},
			'veteran': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Heavy Assault': {
						certifications: [
							{ skill: skills.heavyAssault.resistShield, level: 1 },
							{ skill: skills.heavyAssault.antiVehicleGrenade, level: 1 },
							{ skill: skills.universal.medicalKit, level: 1 }
						],
						equipment: []
					},
					'Light Assault': {
						certifications: [
							{ skill: skills.lightAssault.c4, level: 2 },
							{ skill: skills.lightAssault.drifterJumpJets, level: 2 }
						],
						equipment: []
					},
					'Engineer': {
						certifications: [
							{ skill: skills.engineer.nanoArmorKit, level: 6 },
							{ skill: skills.engineer.claymoreMine, level: 2 },
							{ skill: skills.engineer.tankMine, level: 2 },
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
							{ skill: skills.medic.medicalApplicator, level: 6 },
							{ skill: skills.medic.nanoRegenDevice, level: 6 }
						],
						equipment: []
					},
					'Infiltrator': {
						certifications: [
							{ skill: skills.infiltrator.advancedEquipmentTerminalHacking, level: 3 }
						],
						equipment: []
					},
					'Sunderer': {
						certifications: [
							{ skill: skills.sunderer.vehicleAmmoDispenser, level: 1 },
							{ skill: skills.sunderer.blockadeArmor, level: 3 },
							{ skill: skills.sunderer.gateShieldDiffuser, level: 2 }
						],
						equipment: []
					},
					'Squad Leader': {
						certifications: [
							{ skill: skills.squadLeader.priorityDeployment, level: 2 }
						],
						equipment: []
					}
				}
			},
			'medic': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Loadout: Offensive Medic': {
						certifications: [
							{ skill: skills.medic.grenadeBandolier, level: 2 },
							{ skill: skills.medic.naniteReviveGrenade, level: 1 },
							{ skill: skills.medic.nanoRegenDevice, level: 6 },
							{ skill: skills.universal.medicalKit, level: 3 }
						],
						equipment: []
					},
					'Loadout: Defensive Medic': {
						certifications: [
							{ skill: skills.medic.flakArmor, level: 4 },
							{ skill: skills.medic.naniteReviveGrenade, level: 1 },
							{ skill: skills.medic.regenerationField, level: 5 },
							{ skill: skills.universal.medicalKit, level: 3 }
						],
						equipment: []
					}
				}
			},
			'engineer': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Loadout: Anti-Infantry MANA Turret': {
						certifications: [
							{ skill: skills.engineer.flakArmor, level: 4 },
							{ skill: skills.engineer.claymoreMine, level: 2 }
						],
						equipment: [
							items.weapon.trac5s
						]
					},
					'Loadout: Anti-Vehicle MANA Turret': {
						certifications: [
							{ skill: skills.engineer.flakArmor, level: 4 },
							{ skill: skills.engineer.tankMine, level: 2 },
							{ skill: skills.engineer.avManaTurret, level: 1 }
						],
						equipment: [
							items.weapon.trac5s,
							items.engineer.avManaTurret
						]
					}
				}
			},
			'lightAssault': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Loadout: Bounty Hunter': {
						certifications: [
							{ skill: skills.lightAssault.flakArmor, level: 4 },
							{ skill: skills.lightAssault.jumpJets, level: 6 },
							{ skill: skills.lightAssault.flashGrenade, level: 1 }
						],
						equipment: []
					},
					'Loadout: Death From Above': {
						certifications: [
							{ skill: skills.lightAssault.grenadeBandolier, level: 2 },
							{ skill: skills.lightAssault.drifterJumpJets, level: 5 },
							{ skill: skills.lightAssault.smokeGrenade, level: 1 }
						],
						equipment: []
					}
				}
			},
			'infiltrator': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Loadout: Close Quarters': {
						certifications: [
							{ skill: skills.infiltrator.flakArmor, level: 4 },
							{ skill: skills.infiltrator.grenadeBandolier, level: 2 },
							{ skill: skills.infiltrator.reconDetectDevice, level: 6 },
							{ skill: skills.infiltrator.claymoreMine, level: 2 },
							{ skill: skills.infiltrator.empGrenade, level: 1 }
						],
						equipment: [
							items.weapon.ns7pdw
						]
					},
					'Loadout: Assassin': {
						certifications: [
							{ skill: skills.infiltrator.ammunitionBelt, level: 3 },
							{ skill: skills.infiltrator.motionSpotter, level: 5 },
							{ skill: skills.infiltrator.claymoreMine, level: 2 },
							{ skill: skills.infiltrator.decoyGrenade, level: 1 },
							{ skill: skills.universal.medicalKit, level: 3 }
						],
						equipment: [
							items.weapon.rams
						]
					}
				}
			},
			'heavyAssault': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Loadout: Anti-Infantry': {
						certifications: [
							{ skill: skills.heavyAssault.grenadeBandolier, level: 2 },
							{ skill: skills.heavyAssault.flakArmor, level: 4 },
							{ skill: skills.heavyAssault.resistShield, level: 1 },
							{ skill: skills.heavyAssault.concussionGrenade, level: 1 },
							{ skill: skills.universal.medicalKit, level: 3 }
						],
						equipment: [
							items.weapon.decimator
						]
					},
					'Loadout: Anti-Armor': {
						certifications: [
							{ skill: skills.heavyAssault.flakArmor, level: 4 },
							{ skill: skills.heavyAssault.resistShield, level: 1 },
							{ skill: skills.heavyAssault.c4, level: 1 },
							{ skill: skills.heavyAssault.antiVehicleGrenade, level: 1 }
						],
						equipment: [
							items.weapon.skep,
							items.weapon.grounder
						]
					}
				}
			},
			'maxUnit': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Loadout: Anti-Infantry': {
						certifications: [
							{ skill: skills.max.kineticArmor, level: 5 },
							{ skill: skills.max.lockdown, level: 2 }
						],
						equipment: [
							items.max.leftMercy,
							items.max.rightMercy
						]
					},
					'Loadout: Anti-Armor': {
						certifications: [
							{ skill: skills.max.flakArmor, level: 5 },
							{ skill: skills.max.kineticArmor, level: 5 },
							{ skill: skills.max.lockdown, level: 2 }
						],
						equipment: [
							items.max.leftPounder,
							items.max.rightPounder
						]
					},
					'Loadout: Anti-Air': {
						certifications: [
							{ skill: skills.max.flakArmor, level: 5 },
							{ skill: skills.max.lockdown, level: 2 }
						],
						equipment: [
							items.max.leftBurster,
							items.max.rightBurster
						]
					}
				}
			},
			'basicTanks': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Prowler': {
						certifications: [
							{ skill: skills.prowler.anchoredMode, level: 1 }
						],
						equipment: [
							items.prowler.walker
						]
					},
					'Sunderer': {
						certifications: [
							{ skill: skills.sunderer.vehicleAmmoDispenser, level: 1 },
							{ skill: skills.sunderer.gateShieldDiffuser, level: 2 }
						],
						equipment: []
					}
				}
			},
			'sunderer': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Sunderer': {
						certifications: [
							{ skill: skills.sunderer.mineGuard, level: 4 },
							{ skill: skills.sunderer.blockadeArmor, level: 4 },
							{ skill: skills.sunderer.gateShieldDiffuser, level: 3 },
							{ skill: skills.sunderer.naniteProximityRepairSystem, level: 6 }
						],
						equipment: []
					}
				}
			},
			'prowler': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Prowler': {
						certifications: [
							{ skill: skills.prowler.anchoredMode, level: 4 },
							{ skill: skills.prowler.mineGuard, level: 4 }
						],
						equipment: [
							items.prowler.p2120ap,
							items.prowler.halberd
						]
					}
				}
			},
			'lightning': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Lightning': {
						certifications: [
							{ skill: skills.lightning.reinforcedTopArmor, level: 1 }
						],
						equipment: [
							items.lightning.skyguard
						]
					}
				}
			},
			'harasser': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Harasser': {
						certifications: [
							{ skill: skills.harasser.fireSuppressionSystem, level: 4 },
							{ skill: skills.harasser.compositeArmor, level: 4 },
							{ skill: skills.harasser.turbo, level: 5 }
						],
						equipment: [
							items.harasser.halberd
						]
					}
				}
			},
			'commander': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Squad Leader': {
						certifications: [
							{ skill: skills.squadLeader.commandCommChannel, level: 1 },
							{ skill: skills.squadLeader.requestReinforcements, level: 1 },
							{ skill: skills.squadLeader.rallyPointGreen, level: 1 },
							{ skill: skills.squadLeader.rallyPointOrange, level: 1 },
							{ skill: skills.squadLeader.rallyPointPurple, level: 1 },
							{ skill: skills.squadLeader.rallyPointYellow, level: 1 },
							{ skill: skills.squadLeader.priorityDeployment, level: 4 }
						],
						equipment: []
					}
				}
			}
		},
		echoHavoc = qual('Echo Havoc', null, null, true),
		max = qual('MAX', echoHavoc, requirements.maxUnit),
		heavyAssault = qual('Heavy Assault', max, requirements.heavyAssault),
		echoCovertOps = qual('Echo Covert Ops', null, null, true),
		infiltrator = qual('Infiltrator', echoCovertOps, requirements.infiltrator),
		lightAssault = qual('Light Assault', infiltrator, requirements.lightAssault),
		echoSpecialist = qual('Echo Specialist', null, null, true),
		engineer = qual('Engineer', echoSpecialist, requirements.engineer),
		combatMedic = qual('Combat Medic', engineer, requirements.medic),
		commander = qual('Commander', null, requirements.commander, true),
		sunderer = qual('Sunderer', [ echoSpecialist, echoCovertOps, echoHavoc ], requirements.sunderer),
		harasser = qual('Harasser', null, requirements.harasser),
		lightning = qual('Lightning', harasser, requirements.lightning),
		prowler = qual('Prowler', lightning, requirements.prowler),
		basicTanks = qual('Basic Tanks', [ sunderer, prowler ], requirements.basicTanks),
		veteran = qual('Veteran', [ combatMedic, lightAssault, heavyAssault, commander ], requirements.veteran, true),
		soldier = qual('Soldier', [ veteran, basicTanks ], requirements.soldier, true);

	addParentRelationships(soldier);

	return soldier;

	function qual(name, child, certs, isRank) {
		var obj = {};
		obj.name = name;
		if (child) {
			if ($.isArray(child)) {
				obj.child = child;
			} else {
				obj.child = [ child ];
			}
		}
		if (certs) {
			obj.cert = certs;
		}
		if (isRank) {
			obj.isRank = true;
		}
		return obj;
	}

	function addParentRelationships(rank, parent) {
		if (parent) {
			if (rank.parent) {
				rank.parent.push(parent);
			} else {
				rank.parent = [ parent ];
			}
		}
		if (rank.child) {
			$.each(rank.child, function() {
				addParentRelationships(this, rank);
			});
		}
	}
}
