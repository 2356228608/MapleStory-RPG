/*
 * 大运动会 枫之校园高手 [普通模式]
 */
var mapIds = [744000001, 744000002, 744000003, 744000004, 744000005, 744000006, 744000007, 744000008, 744000009, 744000010, 744000011, 744000012, 744000013, 744000014, 744000015, 744000016];
var mapHall = 744000000;

function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
	em.setProperty("state", 1);
	em.setProperty("leader", "true");
	var eim = em.newInstance("副本_枫之高校");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(false);
	}
	// 初始化变量
	initPropArray("kill", 0, 1, 16)
	initPropArrayRandom("next_map", 3, 15, 1, 10);
	initPropArray("map", "clear", 1, 16)
	initProp("next_map_11", 1);
	initProp("next_map_12", 16);
	return eim;
}

function setupOld(level, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	var eim = em.newInstance("副本_枫之高校");
	var map = eim.setInstanceMap(744000008);
	map.resetFully();

	var map1 = eim.setInstanceMap(744000014);
	map1.resetFully();
	var mob = em.getMonster(9410183);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map1.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

	var map2 = eim.setInstanceMap(744000013);
	map2.resetFully();
	var mob = em.getMonster(9410182);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

	var map3 = eim.setInstanceMap(744000015);
	map3.resetFully();
	var mob = em.getMonster(9410183);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map3.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

	var map4 = eim.setInstanceMap(744000003);
	map4.resetFully();
	var mob = em.getMonster(9410178);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map4.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

	var map5 = eim.setInstanceMap(744000002);
	map5.resetFully();
	var mob = em.getMonster(9410179);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map5.spawnMonsterOnGroundBelow(mob, new java.awt.Point(70, 240));

	var map6 = eim.setInstanceMap(744000006);
	map6.resetFully();
	for (var i = 9410147; i <= 9410151; i++) {
		var mob = em.getMonster(i);
		mob.changeLevel(level);
		eim.registerMonster(mob);
		var modified = em.newMonsterStats();
		modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
		mob.setOverrideStats(modified);
		map6.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
	}

	var map7 = eim.setInstanceMap(744000007);
	map7.resetFully();
	var mob = em.getMonster(9410171);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map7.spawnMonsterOnGroundBelow(mob, new java.awt.Point(70, 240));

	var map8 = eim.setInstanceMap(744000010);
	map8.resetFully();
	var mob = em.getMonster(9410173);
	var mob1 = em.getMonster(9410174);
	var mob2 = em.getMonster(9410175);
	var mob3 = em.getMonster(9410176);
	mob.changeLevel(level);
	mob1.changeLevel(level);
	mob2.changeLevel(level);
	mob3.changeLevel(level);
	mob.setHp(5000000 * 50);
	mob1.setHp(200000000 * 50);
	mob2.setHp(200000000 * 50);
	mob3.setHp(200000000 * 50);
	eim.registerMonster(mob);
	eim.registerMonster(mob1);
	eim.registerMonster(mob2);
	eim.registerMonster(mob3);
	map8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(80, 240));
	map8.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(150, 240));
	map8.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(220, 240));
	map8.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(290, 240));
	for (var i = 0; i < 10; i++) {
		var mob = em.getMonster(9410190);
		mob.changeLevel(level);
		var modified = em.newMonsterStats();
		modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		map8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
	}

	var map9 = eim.setInstanceMap(744000009);
	map9.resetFully();
	for (var i = 9410187; i <= 9410189; i++) {
		var mob = em.getMonster(i);
		mob.changeLevel(level);
		var modified = em.newMonsterStats();
		modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		map9.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
	}

	var map10 = eim.setInstanceMap(744000011);
	map10.resetFully();
	var mob = em.getMonster(9410180);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map10.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

	var map11 = eim.setInstanceMap(744000012);
	map11.resetFully();
	var mob = em.getMonster(9410181);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map11.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

	var map12 = eim.setInstanceMap(744000001);
	map12.resetFully();
	eim.getMapFactory().getMap(744000001).killAllMonsters(false);
	for (var i = 9410162; i <= 9410165; i++) {
		var mob = em.getMonster(i);
		mob.changeLevel(level);
		var modified = em.newMonsterStats();
		modified.setOHp(mob.getMobMaxHp() * 10000);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		map12.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));
	}
	map12.spawnNpc(9330192, new java.awt.Point(-160, 240));

	var map13 = eim.setInstanceMap(744000004);
	map13.resetFully();
	var mob = em.getMonster(9410177);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 22000000 * 50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map13.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 240));

	eim.startEventTimer(1000 * 60 * 5); //5 min
	return eim;
}

function playerEntry(eim, player) {
	var first = parseInt(em.getProperty("next_map_1"));
	var map = eim.getMapInstance(first - 1);
	player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
	return false;
}

function changedMap(eim, player, mapid) {
	// em.broadcastServerMsg("[changedMap]");
	if (mapIds.indexOf(mapid) < 0) {
		on玩家退场(eim, player, false);
		return;
	}
	eim.startEventTimer(5 * 60 * 1000);
}

function playerDisconnected(eim, player) {
	// todo 干脆放弃？
	// em.broadcastServerMsg("[playerDisconnected]");
	on玩家退场(eim, player, false);
	return 0;
}

function scheduledTimeout(eim) {
	// em.broadcastServerMsg("[scheduledTimeout]");
	on玩家退场(eim, eim.getPlayers().get(0), true);
}

function playerExit(eim, player) {
	// em.broadcastServerMsg("[playerExit]");
	on玩家退场(eim, player, false);
}

function allMonstersDead(eim) {
	em.broadcastServerMsg("[allMonstersDead]");
}

function monsterValue(eim, mobId) {
	// em.broadcastServerMsg("[monsterValue]=" + mobId);
	var kilReq = 1;
	var kill = parseInt(em.getProperty("kill")) + 1;
	em.setProperty("kill", kill);
	if (kill >= kilReq) {
		//map12.spawnNpc(9330192, new java.awt.Point(-160, 240));
		eim.getPlayers().forEach(function (player) {
			player.openNpc(2540005, "特效_完成");
		});
		em.setProperty("state", 10);
	}
	return 1;
}

function monsterDrop(eim, player, mob) {
	// em.broadcastServerMsg("[monsterDrop] " + mob);
}

function allMonstersDead(eim) {
	// em.broadcastServerMsg("[allMonstersDead] ");
}

function playerRevive(eim, player) {
	return false;
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {
	// em.broadcastServerMsg("[playerDead]");
}
function cancelSchedule() {}

var setupTask;

// ===================== 功能类方法 ======================

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}

// 初始化参数
function initProp(name, val) {
	if (em.getProperty(name) == null)
		em.setProperty(name, val);
}
function initPropArray(name, val, startI, endI) {
	for (var i = startI; i <= endI; i++) {
		if (em.getProperty(name + "_" + i) == null)
			em.setProperty(name + "_" + i, val);
	}
}
// 随机数序列
function initPropArrayRandom(name, min, max, startI, endI) {
	var arr = new Array();
	var maxTimes = endI - startI + 1;
	var canRepeat = (max - min) < (endI - startI) ? true : false;
	do {
		var num = randomNum(min, max);
		if (canRepeat || arr.indexOf(num) < 0) { //数组中不存在
			arr.push(num);
			maxTimes--;
		}
	} while (maxTimes);
	for (var i = startI; i <= endI; i++) {
		if (em.getProperty(name + "_" + i) == null)
			em.setProperty(name + "_" + i, arr[i - 1]);
	}
}
// 循环调动事件
function scheduleNew(funcName, seconds) {
	var setupTask = em.schedule(funcName, seconds * 1000);
	return setupTask;
}
// 处理玩家退场
function on玩家退场(eim, player, isTimeout) {
	// ????
	if (isTimeout) {
		eim.disposeIfPlayerBelow(100, mapHall);
	} else {
		eim.disposeIfPlayerBelow(0, 0);
	}
	// 清空配置文件
	em.getProperties().clear();
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
	eim.unregisterPlayer(player);
}
