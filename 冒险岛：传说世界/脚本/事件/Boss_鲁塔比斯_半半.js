/*
 * 半半
 */
var mapIds = [105200100, 105200110];

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
	var eim = em.newInstance("Boss_鲁塔比斯_半半");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(true);
	}
	eim.startEventTimer(15 * 60 * 1000); //15分钟
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
		player.updateInfoQuest(30009, "clear=clear");
		player.updateInfoQuest(30014, "clear=clear");
		player.updateAchievement(708, 0, "mob_kill", 1, 10);
		player.updateAchievement(709, 0, "mob_kill", 1, 100);
		player.updateAchievement(710, 0, "mob_kill", 1, 1000);
		player.updateAchievement(711, 0, "mob_kill", 1, 1000);
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
