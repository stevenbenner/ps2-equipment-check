var qualifications = {

	alpha: {

		lightAssault: function(equip) {
			var cell = $('<td>')
				qualified = equip.has(items.consumable.c4) && equip.has(items.class.lightAssault.flakArmor[2]); //equip.hsnv && equip.suppressor && equip.laflaklevel >= 3;

			cell.text(qualified ? 'Light Assault Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + equip.get(items.consumable.c4).name.en + ' ]'));
				if (equip.has(items.consumable.flashGrenade)) {
					cell.append($('<span>').text('[ ' + equip.get(items.consumable.flashGrenade).name.en + ' ]'));
				}
				cell.append($('<span>').text('[ ' + equip.get(items.class.lightAssault.flakArmor).name.en + ' ]'));
			}

			return cell;
		},

		infiltrator: function(equip) {
			var cell = $('<td>')
				qualified = false, //equip.hsnv && equip.suppressor && (equip.m77 || equip.tsar || equip.sr7 || equip.rams) && (equip.smg46 || equip.pdw),
				sniperRifles = [],
				smgs = [];

			if (equip.has(items.class.infiltrator.flakArmor[2])) {
				if (equip.has(items.weapon.m77) ||
					equip.has(items.weapon.tsar) ||
					equip.has(items.weapon.sr7) ||
					equip.has(items.weapon.rams)) {
					qualified = true;
				}
				if (equip.has(items.weapon.smg46) ||
					equip.has(items.weapon.pdw16)) {
					qualified = true;
				}
			}

			// bolt action sniper rifles
			if (equip.has(items.weapon.m77)) {
				sniperRifles.push(equip.get(items.weapon.m77).name.en);
			}
			if (equip.has(items.weapon.tsar)) {
				sniperRifles.push(equip.get(items.weapon.tsar).name.en);
			}
			if (equip.has(items.weapon.sr7)) {
				sniperRifles.push(equip.get(items.weapon.sr7).name.en);
			}
			if (equip.has(items.weapon.rams)) {
				sniperRifles.push(equip.get(items.weapon.rams).name.en);
			}

			// sub-machine guns
			if (equip.has(items.weapon.smg46)) {
				smgs.push(equip.get(items.weapon.smg46).name.en);
			}
			if (equip.has(items.weapon.pdw16)) {
				smgs.push(equip.get(items.weapon.pdw16).name.en);
			}

			cell.text(qualified ? 'Infiltrator Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				if (sniperRifles.length > 0) {
					cell.append($('<span>').text('[ ' + sniperRifles.join(' | ') + ' ]'));
				}
				if (smgs.length > 0) {
					cell.append($('<span>').text('[ ' + smgs.join(' | ') + ' ]'));
				}
				//if (equip.scope12x) {
				//	cell.append($('<span>').text('[ LRO (12x) ]'));
				//}
				if (equip.has(items.consumable.empGrenade)) {
					cell.append($('<span>').text('[ ' + equip.get(items.consumable.empGrenade).name.en + ' ]'));
				}
				if (equip.has(items.consumable.claymore)) {
					cell.append($('<span>').text('[ ' + equip.get(items.consumable.claymore).name.en + ' ]'));
				}
				cell.append($('<span>').text('[ ' + equip.get(items.class.infiltrator.flakArmor).name.en + ' ]'));
			}

			return cell;
		},

		engineer: function(equip) {
			var cell = $('<td>')
				qualified = false; //equip.hsnv && equip.suppressor && equip.trac5s && equip.tankmine && equip.ubgrenade && equip.ubsmoke;

			if (equip.has(items.weapon.trac5s) &&
				equip.has(items.weapon.trac5s.hsnv) &&
				equip.has(items.weapon.trac5s.suppressor) &&
				equip.has(items.weapon.trac5s.grenadeLauncher) &&
				equip.has(items.weapon.trac5s.smokeLauncher) &&
				equip.has(items.consumable.tankMine) &&
				equip.has(items.class.engineer.flakArmor[2])) {
				qualified = true;
			}

			cell.text(qualified ? 'Engineer Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + equip.get(items.weapon.trac5s).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.weapon.trac5s.hsnv).name.en + ' | ' + equip.get(items.weapon.trac5s.suppressor).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.weapon.trac5s.grenadeLauncher).name.en + ' | ' + equip.get(items.weapon.trac5s.smokeLauncher).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.consumable.tankMine).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.class.engineer.flakArmor).name.en + ' ]'));
			}

			return cell;
		},

		medic: function(equip) {
			var cell = $('<td>')
				qualified = equip.has(items.class.medic.medicalApplicator[3]); //equip.hsnv && equip.suppressor && equip.medtoollevel >= 4;

			cell.text(qualified ? 'Medic Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + equip.get(items.class.medic.medicalApplicator).name.en + ' ]'));
				if (equip.has(items.consumable.reviveGrenade)) {
					cell.append($('<span>').text('[ ' + equip.get(items.consumable.reviveGrenade).name.en + ' ]'));
				}
			}

			return cell;
		},

		sunderer: function(equip) {
			var cell = $('<td>')
				qualified = false, //equip.ams && equip.sundyminelevel >= 3 && (equip.sundyprimebulldog || equip.sundyprimefury) && (equip.sundysecondbulldog || equip.sundysecondfury),
				primaryWeapons = [],
				secondaryWeapons = [];

			if (equip.has(items.vehicle.sunderer.ams) &&
				equip.has(items.vehicle.sunderer.mineGuard[2]) &&
				(equip.has(items.vehicle.sunderer.frontBulldog) || equip.has(items.vehicle.sunderer.frontFury)) &&
				(equip.has(items.vehicle.sunderer.rearBulldog) || equip.has(items.vehicle.sunderer.rearFury))) {
				qualified = true;
			}

			// primary weapons
			if (equip.has(items.vehicle.sunderer.frontBulldog)) {
				primaryWeapons.push(equip.get(items.vehicle.sunderer.frontBulldog).name.en);
			}
			if (equip.has(items.vehicle.sunderer.frontFury)) {
				primaryWeapons.push(equip.get(items.vehicle.sunderer.frontFury).name.en);
			}

			// secondary weapons
			if (equip.has(items.vehicle.sunderer.rearBulldog)) {
				secondaryWeapons.push(equip.get(items.vehicle.sunderer.rearBulldog).name.en);
			}
			if (equip.has(items.vehicle.sunderer.rearFury)) {
				secondaryWeapons.push(equip.get(items.vehicle.sunderer.rearFury).name.en);
			}

			cell.text(qualified ? 'Sunderer Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + primaryWeapons.join(' | ') + ' ]'));
				cell.append($('<span>').text('[ ' + secondaryWeapons.join(' | ') + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.sunderer.ams).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.sunderer.mineGuard).name.en + ' ]'));
			}

			return cell;
		}

	},

	bravo: {

		heavyAssault: function(equip) {
			var cell = $('<td>')
				qualified = false, //equip.skep || equip.t2,
				rockets = [];

			if (equip.has(items.class.heavyAssault.flakArmor[2])) {
				if (equip.has(items.weapon.skep) || equip.has(items.weapon.t2)) {
					qualified = true;
				}
			}

			// rocket launchers
			if (equip.has(items.weapon.skep)) {
				rockets.push(equip.get(items.weapon.skep).name.en);
			}
			if (equip.has(items.weapon.t2)) {
				rockets.push(equip.get(items.weapon.t2).name.en);
			}

			cell.text(qualified ? 'Heavy Assault Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + rockets.join(' | ') + ' ]'));
				if (equip.has(items.consumable.concussionGrenade)) {
					cell.append($('<span>').text('[ ' + equip.get(items.consumable.concussionGrenade).name.en + ' ]'));
				}
				cell.append($('<span>').text('[ ' + equip.get(items.class.heavyAssault.flakArmor).name.en + ' ]'));
			}

			return cell;
		},

		engineer: function(equip) {
			var cell = $('<td>')
				qualified = false; //equip.hsnv && equip.suppressor && equip.trac5s && equip.tankmine && equip.ubgrenade && equip.ubsmoke && equip.avmana;

			if (equip.has(items.weapon.trac5s) &&
				equip.has(items.weapon.trac5s.grenadeLauncher) &&
				equip.has(items.weapon.trac5s.smokeLauncher) &&
				equip.has(items.consumable.tankMine) &&
				equip.has(items.class.engineer.avManaTurret) &&
				equip.has(items.class.engineer.flakArmor[2])) {
				qualified = true;
			}

			cell.text(qualified ? 'Engineer Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + equip.get(items.weapon.trac5s).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.weapon.trac5s.grenadeLauncher).name.en + ' | ' + equip.get(items.weapon.trac5s.smokeLauncher).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.consumable.tankMine).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.class.engineer.avManaTurret).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.class.engineer.flakArmor).name.en + ' ]'));
			}

			return cell;
		},

		medic: function(equip) {
			var cell = $('<td>')
				qualified = equip.has(items.class.medic.medicalApplicator[3]); //equip.hsnv && equip.suppressor && equip.medtoollevel >= 4;

			cell.text(qualified ? 'Medic Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + equip.get(items.class.medic.medicalApplicator).name.en + ' ]'));
				if (equip.has(items.consumable.reviveGrenade)) {
					cell.append($('<span>').text('[ ' + equip.get(items.consumable.reviveGrenade).name.en + ' ]'));
				}
			}

			return cell;
		},

		prowler: function(equip) {
			var cell = $('<td>')
				qualified = false, //equip.p2120he && equip.anchorlevel >= 2 && equip.prowlerminelevel >= 3 && (equip.prowlerwalker || equip.prowlerranger || equip.halberd || equip.vulcan),
				secondaryWeapons = [];

			if (equip.has(items.vehicle.prowler.p2120he) &&
				equip.has(items.vehicle.prowler.anchoredMode[1]) &&
				equip.has(items.vehicle.prowler.mineGuard[2])) {
				if (equip.has(items.vehicle.prowler.walker) ||
					equip.has(items.vehicle.prowler.ranger) ||
					equip.has(items.vehicle.prowler.halberd) ||
					equip.has(items.vehicle.prowler.vulcan)) {
					qualified = true;
				}
			}

			// secondary weapons
			if (equip.has(items.vehicle.prowler.walker)) {
				secondaryWeapons.push(equip.get(items.vehicle.prowler.walker).name.en);
			}
			if (equip.has(items.vehicle.prowler.ranger)) {
				secondaryWeapons.push(equip.get(items.vehicle.prowler.ranger).name.en);
			}
			if (equip.has(items.vehicle.prowler.halberd)) {
				secondaryWeapons.push(equip.get(items.vehicle.prowler.halberd).name.en);
			}
			if (equip.has(items.vehicle.prowler.vulcan)) {
				secondaryWeapons.push(equip.get(items.vehicle.prowler.vulcan).name.en);
			}

			cell.text(qualified ? 'Prowler Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.prowler.p2120he).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + secondaryWeapons.join(' | ') + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.prowler.anchoredMode).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.prowler.mineGuard).name.en + ' ]'));
			}

			return cell;
		},

		sunderer: function(equip) {
			var cell = $('<td>')
				qualified = false, //equip.ams && (equip.ammodispenser >= 1 || equip.proxrepair >= 5) && (equip.sundyprimewalker || equip.sundyprimeranger) && (equip.sundysecondwalker || equip.sundysecondranger),
				primaryWeapons = [],
				secondaryWeapons = [];

			if (equip.has(items.vehicle.sunderer.ams) &&
				(equip.has(items.vehicle.sunderer.ammoDispenser[0]) || equip.has(items.vehicle.sunderer.proximityRepair[4])) &&
				(equip.has(items.vehicle.sunderer.frontWalker) || equip.has(items.vehicle.sunderer.frontRanger)) &&
				(equip.has(items.vehicle.sunderer.rearWalker) || equip.has(items.vehicle.sunderer.rearRanger))) {
				qualified = true;
			}

			// primary weapons
			if (equip.has(items.vehicle.sunderer.frontWalker)) {
				primaryWeapons.push(equip.get(items.vehicle.sunderer.frontWalker).name.en);
			}
			if (equip.has(items.vehicle.sunderer.frontRanger)) {
				primaryWeapons.push(equip.get(items.vehicle.sunderer.frontRanger).name.en);
			}

			// secondary weapons
			if (equip.has(items.vehicle.sunderer.rearWalker)) {
				secondaryWeapons.push(equip.get(items.vehicle.sunderer.rearWalker).name.en);
			}
			if (equip.has(items.vehicle.sunderer.rearRanger)) {
				secondaryWeapons.push(equip.get(items.vehicle.sunderer.rearRanger).name.en);
			}

			cell.text(qualified ? 'Sunderer Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + primaryWeapons.join(' | ') + ' ]'));
				cell.append($('<span>').text('[ ' + secondaryWeapons.join(' | ') + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.sunderer.ams).name.en + ' ]'));
				if (equip.has(items.vehicle.sunderer.ammoDispenser[0])) {
					cell.append($('<span>').text('[ ' + equip.get(items.vehicle.sunderer.ammoDispenser).name.en + ' ]'));
				}
				if (equip.has(items.vehicle.sunderer.proximityRepair[4])) {
					cell.append($('<span>').text('[ ' + equip.get(items.vehicle.sunderer.proximityRepair).name.en + ' ]'));
				}
			}

			return cell;
		},

		lightning: function(equip) {
			var cell = $('<td>')
				qualified = false; //equip.skyguard && equip.lightningfirelevel >= 3 && equip.lightningminelevel >= 3;

			if (equip.has(items.vehicle.lightning.skyguard) &&
				equip.has(items.vehicle.lightning.fireSuppression[2]) &&
				equip.has(items.vehicle.lightning.mineGuard[2])) {
				qualified = true;
			}

			cell.text(qualified ? 'Lightning Equipped' : 'Not Equipped');
			cell.addClass(qualified ? 'ok' : 'notok');

			if (qualified) {
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.lightning.skyguard).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.lightning.fireSuppression).name.en + ' ]'));
				cell.append($('<span>').text('[ ' + equip.get(items.vehicle.lightning.mineGuard).name.en + ' ]'));
			}

			return cell;
		}

	},
/*
	charlie: {
		engineer: function(equip) {
			return $('<td>').text('---');
		},
		mosquito: function(equip) {
			return $('<td>').text('---');
		}
	},

	delta: {
		max: function(equip) {
			return $('<td>').text('---');
		},
		engineer: function(equip) {
			return $('<td>').text('---');
		},
		medic: function(equip) {
			return $('<td>').text('---');
		}
	}
*/
};
