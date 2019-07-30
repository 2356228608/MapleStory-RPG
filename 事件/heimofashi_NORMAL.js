﻿/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  脚本功能： 黑魔法师BOSS
 *  @Author 娜娜
 */
var mapIds = [450013810, 450013300, 450013500, 450013750];

//自定义复活次数
var reviveCount = 5;
var next = 0;

var random = new java.util.Random();
function init() {
	em.setProperty("state", "0");
	em.setProperty("state1", "0");
	em.setProperty("leader", "true");
}

function setup(level, leaderid) {
	//em.setProperty("state", "1");
	next = 1;
	var eim = em.newInstance("BossBlackMage_HARD");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetPQ(level);
		map.resetFully();
		map.killAllMonsters(true);
	}
	//  eim.schedule("summonFall", 5000);
	eim.startEventTimer(60 * 1000 * 60); //60分钟
	startOnePart(eim);
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
	var map = eim.getMapFactoryMap(450012500);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function scheduledTimeout(eim) {
	end(eim);
}

function changedMap(eim, player, mapid) {
	if (mapid != mapIds[0] && mapid != mapIds[1] && mapid != mapIds[2] && mapid != mapIds[3]) {
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			em.setProperty("state", "0");
			em.setProperty("state1", "0");
			em.setProperty("leader", "true");
		}
		eim.worldSpouseMessage(0x24, "[黑魔法师BOSS] 已退出挑战,副本空闲,强者可以去挑战。");
	}
}

function playerDisconnected(eim, player) {
	return 0;
}

function monsterValue(eim, mobid) {
	var map = eim.getMapInstance(450013810);
	switch (mobid) {
	case 8880500:
		map.killMonster(8880513);
		if (eim.getMapInstance(0).getAllMonstersThreadsafe().size() == 0) {
			eim.broadcastPlayerMsg(6, "已通过第1关.");
			Exit(eim);
		}
		break;
	case 8880501:
		map.killMonster(8880514);
		if (eim.getMapInstance(0).getAllMonstersThreadsafe().size() == 0) {
			eim.broadcastPlayerMsg(6, "已通过第1关.");
			Exit(eim);
		}
		break;
	default:
		Exit(eim);
		break;
	}
	return 1;
}

function Exit(eim) {
	switch (next) {
	case 1:
		//eim.broadcastPlayerMsg(6, "startTwoPart."+startTwoPart);
		var map2 = eim.getMapInstance(mapIds[1]);
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			eim.getPlayers().get(i).changeMap(map2, map2.getPortal(0));
		}

		startTwoPart(eim);
		break;
	case 2:
		var map3 = eim.getMapInstance(mapIds[2]);
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			eim.getPlayers().get(i).changeMap(map3, map3.getPortal(0));
		}
		startThreePart(eim);
		break;
	case 3:
		var map4 = eim.getMapInstance(mapIds[3]);
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			eim.getPlayers().get(i).changeMap(map4, map4.getPortal(0));
		}
		startFourPart(eim);
		break;
	case 4:
		var map = eim.getMapInstance(450013750);
		map.spawnNpc(3003533, new java.awt.Point(128, 218));
		map.startMapEffect("黑魔法师已击败,请和NPC对话领取奖励吧.", 5120161);
		eim.broadcastPlayerMsg(6, "黑魔法师已击败,请和NPC对话领取奖励吧.。");
		map.killAllMonsters(true);
		//if (addMonsterTask != null) {
		//	addMonsterTask.cancel(true);
		//	addMonsterTask = null;
		//}
		break;
	}
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function allMonstersDead(eim) {}

function showTopMapOne(eim) { //
	var state = em.getProperty("state");
	if (state == "1") {
		var count = random.nextInt(3) + 5;
		eim.showMapEventEffect(mapIds[0], 1, count);
	}
}

function showTopMapTwoA(eim) { //
	var state = em.getProperty("state");
	var time = 20000;
	if (state == "2") {
		eim.showMapEventEffect(mapIds[1], 4, 8);
		eim.schedule("showTopMapTwoA", time);
	}
}

function showTopMapTwoB(eim) { //
	var state = em.getProperty("state");
	var time = 35000;
	if (state == "2") {
		eim.showMapEventEffect(mapIds[1], 5, 14);
		eim.schedule("showTopMapTwoB", time);
	}
}

function showTopMapTwoC(eim) { //
	var state = em.getProperty("state");
	if (state == "1") {
		var count = random.nextInt(3) + 1;
		eim.showMapEventEffect(mapIds[1], 1, count);
	}
}

function showTopMapThreeA(eim) { //
	var state = em.getProperty("state");
	var time = 8000;
	if (state == "3") {
		eim.showMapEventEffect(mapIds[2], 6, 10);

		eim.schedule("showTopMapThreeA", time);
	}
}
function showTopMapThreeB(eim) { //
	var state = em.getProperty("state");
	var time = 15000;
	if (state == "3") {
		eim.showMapEventEffect(mapIds[2], 7, 8);
		eim.schedule("showTopMapThreeB", time);
	}
}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}

function monsterDrop(eim, player, mob) {}

function pickUpItem(eim, player, itemID) {}

function startOnePart(eim) {
	var mapForMob = eim.getMapInstance(mapIds[0]);
	var mobid = 8880501; //黑
	var mob = em.getMonster(mobid);
	var modified = em.newMonsterStats();
	modified.setOHp(10000000000); //200万亿
	modified.setOMp(mob.getMobMaxMp() * 2);
	mob.getStats().setPhysicalAttack(499999999); //物理伤害
	mob.getStats().setMagicAttack(499999999); //魔攻伤害
	mob.getStats().setAcc(500000);
	mob.getStats().setPDRate(50);
	mob.getStats().setMDRate(50);
	mob.getStats().setLevel(220);
	mob.setOverrideStats(modified);
	//mob.disableSpawnRevives();
	eim.registerMonster(mob);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-306, 85));

	mobid = 8880500; //白
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(10000000000); //200万亿200000000000000
	modified.setOMp(mob.getMobMaxMp() * 2);
	mob.getStats().setPhysicalAttack(499999999); //物理伤害
	mob.getStats().setMagicAttack(499999999); //魔攻伤害
	mob.getStats().setAcc(500000);
	mob.getStats().setPDRate(50);
	mob.getStats().setMDRate(50);
	mob.getStats().setLevel(220);
	mob.setOverrideStats(modified);
	//mob.disableSpawnRevives();
	eim.registerMonster(mob);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(358, 85));
	//showTopMapOne(eim);
}

function startTwoPart(eim) {
	//em.setProperty("state", "2");
	next = 2;
	var mapForMob = eim.getMapInstance(mapIds[1]);
	var mobid = 8880502; //老黑
	var mob = em.getMonster(mobid);
	var modified = em.newMonsterStats();
	modified.setOHp(10000000000000); //1000万亿
	modified.setOMp(mob.getMobMaxMp() * 2);
	mob.getStats().setPhysicalAttack(499999999); //物理伤害
	mob.getStats().setMagicAttack(499999999); //魔攻伤害
	mob.getStats().setAcc(500000);
	mob.getStats().setPDRate(50);
	mob.getStats().setMDRate(50);
	mob.getStats().setLevel(220);
	mob.setOverrideStats(modified);
	//mob.disableSpawnRevives();
	eim.registerMonster(mob);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-11, 85));
	//showTopMapTwoA(eim);
	//showTopMapTwoB(eim);
	//showTopMapTwoC(eim);
	//eim.showMapEventEffect(mapIds[1],2,1);
}

function startThreePart(eim) {
	//em.setProperty("state", "3");
	next = 3;
	var mapForMob = eim.getMapInstance(mapIds[2]);

	var mobid = 8880504; //
	var mob = em.getMonster(mobid);
	var modified = em.newMonsterStats();
	modified.setOHp(10000000000000); //1000万亿1000000000000000
	modified.setOMp(mob.getMobMaxMp() * 2);
	mob.getStats().setPhysicalAttack(499999999); //物理伤害
	mob.getStats().setMagicAttack(499999999); //魔攻伤害
	mob.getStats().setAcc(500000);
	mob.getStats().setPDRate(50);
	mob.getStats().setMDRate(50);
	mob.getStats().setLevel(220);
	mob.setOverrideStats(modified);
	//mob.disableSpawnRevives();
	eim.registerMonster(mob);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100, 85));

	//  mobid = 8880520;//
	//  mob = em.getMonster(mobid);
	//  modified = em.newMonsterStats();
	// modified.setOHp(300000000000000);//1000万亿1000000000000000
	// modified.setOMp(mob.getMobMaxMp() * 2);
	// mob.getStats().setPhysicalAttack(499999999);//物理伤害
	// mob.getStats().setMagicAttack(499999999);//魔攻伤害
	// mob.getStats().setAcc(500000);
	// mob.getStats().setPDRate(50);
	// mob.getStats().setMDRate(50);
	// mob.getStats().setLevel(220);
	// mob.setOverrideStats(modified);
	// mob.disableSpawnRevives();
	// eim.registerMonster(mob);
	// mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100, 85));
	//showTopMapThreeA(eim);
	//showTopMapThreeB(eim);
}

function startFourPart(eim) {
	//em.setProperty("state", "4");
	next = 4;
	var mapForMob = eim.getMapInstance(mapIds[3]);

	var mobid = 8880504; //白云老黑
	var mob = em.getMonster(mobid);
	var modified = em.newMonsterStats();
	modified.setOHp(10000000000000); //100万亿
	modified.setOMp(mob.getMobMaxMp() * 2);
	mob.getStats().setPhysicalAttack(499999999); //物理伤害
	mob.getStats().setMagicAttack(499999999); //魔攻伤害
	mob.getStats().setAcc(500000);
	mob.getStats().setPDRate(50);
	mob.getStats().setMDRate(50);
	mob.getStats().setLevel(220);
	mob.setOverrideStats(modified);
	//mob.disableSpawnRevives();
	eim.registerMonster(mob);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(128, 218));
	//eim.showMapEventEffect(mapIds[3],3,1);
	//eim.showMapEventEffect(mapIds[3],8,1);
}
