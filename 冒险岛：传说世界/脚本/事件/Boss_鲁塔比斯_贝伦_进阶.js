/*
 * 进阶贝伦
 */

var mapIds = [105200800, 105200810];

//自定义复活次数
var reviveCount = 5;
var next = 0;

function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	var eim = em.newInstance("Belen1");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(true);
	}
	/*var mob = em.getMonster(8930000);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-209, 443));*/
	eim.startEventTimer(30 * 60 * 1000); //30分钟
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount); //地图复活次数
	player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		player.eventRevive();
		player.changePortal(0);
		return true;
	}
	player.addHP(50);
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function changedMap(eim, player, mapid) {
	if (mapIds.indexOf(mapid) < 0) {
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
		}
	}
}

function playerDisconnected(eim, player) {
	return 0;
}

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 105200000);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function monsterValue(eim, mobId) {
	var teamMembers = eim.getPlayerCount();
	eim.getPlayers().forEach(function (player) {
		player.updateInfoQuest(30012, "clear=clear");
		player.updateInfoQuest(30021, "clear=clear");
		player.updateAchievement(735, 0, "mob_kill", 1, 1);
		player.updateAchievement(736, 0, "mob_kill", 1, 10);
		player.updateAchievement(737, 0, "mob_kill", 1, 100);
		player.updateAchievement(738, 0, "mob_kill", 1, 100);
		//  组队通关
		if (teamMembers == 1) {
			player.finishAchievement(739);
		} else if (teamMembers == 4) {
			player.gainAchievement(740, 0, "mob_kill=1");
		} else if (teamMembers == 5) {
			player.gainAchievement(740, 1, "mob_kill=1");
		} else if (teamMembers == 6) {
			player.gainAchievement(740, 2, "mob_kill=1");
		}
		// 限时通关
		if (30 * 60 * 1000 - eim.getTimeLeft() < 5 * 60 * 1000) {
			player.finishAchievement(741);
		}
	});
	return 1;
}

function allMonstersDead(eim) {
	var state = em.getProperty("state");
	if (state.equals("1")) {
		em.setProperty("state", "2");
	} else if (state.equals("2")) {
		em.setProperty("state", "3");
	}
}

function playerRevive(eim, player) {
	return false;
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {}
function pickUpItem(eim, player, itemID) {}
