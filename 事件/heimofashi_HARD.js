/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  脚本功能：觉醒希拉-普通
 *  地图ID:
//'黎曼 : 黑暗王座'
 *  @Author 娜娜
 */

var Mapid;
var modified;
var bossmapid = 450013200;
var addMonsterTask;

function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(level, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	var eim = em.newInstance("juexingxila_NORMAL");
	var map = eim.setInstanceMap(bossmapid);
	map.resetFully();
	map.killAllMonsters(true);
	var mob = em.getMonster(8880405);
	var modified = em.newMonsterStats();
	modified.setOHp(1000000000);
	modified.setOMp(mob.getMobMaxMp());
	modified.setOExp(2000000000);
	mob.getStats().setLevel(250);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-430, 266));

	//var mob1 = em.getMonster(8644612);
	//eim.registerMonster(mob1);
	//map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(561, 29));


	//map.spawnNpc(9400154, new java.awt.Point(1551,47));


	addFirstMonsters(eim);
	eim.startEventTimer(1000 * 60 * 30); //10 min
	return eim;
}

//第一阶段
function addFirstMonsters(eim) {
	var random = new java.util.Random();
	var count = random.nextInt(1) + 1;
	var mapForMob = eim.getMapInstance(bossmapid);
	for (var i = 0; i < count; i++) {
		var position = random.nextInt(400);
		var mobid = 9010010;
		var modified = em.newMonsterStats();
		var mob = em.getMonster(mobid);
		modified.setOHp(4000000);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(position, 266));

		var mobid1 = 9300855;
		var modified1 = em.newMonsterStats();
		var mob1 = em.getMonster(mobid);
		modified1.setOHp(4000000);
		mob1.setOverrideStats(modified);
		eim.registerMonster(mob1);
		mapForMob.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(position, 266));
	}
	var time = random.nextInt(3) + 2;
	addMonsterTask = em.schedule("addFirstMonsters", 1000 * 5 * time, eim);
	mapForMob.startMapEffect("当心 - 将召唤她的部下了 请注意 注意 注意.", 5120124);
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	map.startMapEffect("觉醒希拉:已经好久没有人来寻si了,你是第一人！", 5120161);
	player.dropMessage(6, "[觉醒希拉-普通] 已开始挑战。");
}

function playerRevive(eim, player) {
	return false;
}

function changedMap(eim, player, mapid) {

	if (mapid == bossmapid) {
		Mapid = mapid;
		eim.schedule("end", 1000 * 0);
		if (addMonsterTask != null) {
			//addMonsterTask.cancel(true);
			//addMonsterTask = null;
		}
		//addSecondMonsters(eim);
	} else {
		eim.worldSpouseMessage(0x24, "[觉醒希拉-普通] 已退出挑战,副本空闲,强者可以去挑战。");
		eim.unregisterPlayer(player);
		if (eim.getPlayerCount() <= 0) {
			eim.disposeIfPlayerBelow(100, 910000000);
		}
		if (addMonsterTask != null) {
			addMonsterTask.cancel(true);
			addMonsterTask = null;
		}
	}
}

function playerDisconnected(eim, player) {
	eim.disposeIfPlayerBelow(100, 910000000);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
	return 0;
}

function monsterValue(eim, mobid) {
	switch (mobid) {
	case 8880405:
		var map = eim.getMapInstance(bossmapid);
		map.spawnNpc(3003533, new java.awt.Point(-430, 266));
		map.startMapEffect("觉醒希拉已击败,请和NPC对话领取奖励吧.", 5120161);
		eim.broadcastPlayerMsg(6, "觉醒希拉已击败,请和NPC对话领取奖励吧.。");
		map.killAllMonsters(true);
		if (addMonsterTask != null) {
			addMonsterTask.cancel(true);
			addMonsterTask = null;
		}
		break;
	}
	return 1;
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}
function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 910000000);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}

function allMonstersDead(eim) {
	var map = eim.getMapInstance(0);
	if (eim.getMapInstance(0).getAllMonstersThreadsafe().size() == 0) {
		eim.broadcastPlayerMsg(6, "嘿~，不要再打了！！！领取你应得的奖励吧。");
	}
}

function end(eim) {
	var map = eim.getMapFactoryMap(Mapid);
	//map.startMapEffect("危险快躲到魔法阵里来" ,5121052);
}

function end1(eim) {
	var map = eim.getMapFactoryMap(Mapid);
	map.startMapEffect("注意！该区域很快就会被毒液填满！！", 5121052);
	map.spawnNpc(3003251, new java.awt.Point(-238, 35));
	eim.startEventTimer(1000 * 60 * 5); //5 min
}

function monsterDrop(eim, player, mob) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
