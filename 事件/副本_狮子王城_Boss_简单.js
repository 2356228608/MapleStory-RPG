/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  功能：狮子王 普通
 *  @Author 娜娜
 */

//自定义复活次数
var reviveCount = 5;
var mapIds = [211070100, 211070101, 211070110];
var mapHall = 211070000;

function init() {
	em.setProperty("leader", "true");
	em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");
	var eim = em.newInstance("副本_狮子王城_Boss_简单");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(false);
	}
	eim.getMapInstance(0).spawnNpc(2161000, new java.awt.Point(-4, -181));
	eim.startEventTimer(1800000); // 1 hr
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		var map = player.getMap();
		player.eventRevive();
		player.changeMap(map, map.getPortal(0));
		return true;
	}
	player.addHP(50);
	var map = eim.getMapFactoryMap(mapIds[1]);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, mapHall);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
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

function monsterValue(eim, mobId) {
	return 1;
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.restReviveCount();
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function end(eim) {
	if (eim.disposeIfPlayerBelow(100, mapIds[1])) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function clearPQ(eim) {
	end(eim);
}

function allMonstersDead(eim) {
	eim.startEventTimer(5*60*1000);
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function pickUpItem(eim, player, itemID) {}
function monsterDrop(eim, player, mob) {}
function allMonstersDead(eim) {
	// 杀掉超级怪物
	eim.getPlayers().get(0).getMap().killAllMonsters(true);
}
