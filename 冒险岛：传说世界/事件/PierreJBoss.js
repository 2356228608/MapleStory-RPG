/*
 * 进阶皮埃尔
 */

var mapIds = [105200610];

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
	var eim = em.newInstance("Pierre1");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(true);
		if (i == 0) {
			var mob = em.getMonster(8900000);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100,400));
		}
	}
	// 娜娜忘了在服务端里加进阶了
	eim.startEventTimer(30 * 60 * 1000); //30分钟
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	map.startMapEffect("欢迎你来参加皮埃尔的茶会！", 5120030);
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
	if (mobId == 8900100 || mobId == 8900101 || mobId == 8900102 || mobId == 8900000 || mobId == 8900001 || mobId == 8900002) {
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			eim.getPlayers().get(i).updateInfoQuest(30010, "clear=clear");
			eim.getPlayers().get(i).updateInfoQuest(30016, "clear=clear");
		}
	}
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
