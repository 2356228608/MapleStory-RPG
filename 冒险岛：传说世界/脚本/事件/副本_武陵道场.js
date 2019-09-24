/**
-- BMS 事件脚本演示模板 ---------------------------------------------------------------------------
会自动加载事件文件夹内脚本，不需要额外配置
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 自定义复活次数
var reviveCount = 5;
// 涵盖地图，离开这个范围会离开事件
var mapIds = new Array();
// 大厅，离开后传送到这里
var mapHall = 925020001;
var mapHead = 925070000;
// 事件名称
var eventName = "副本_武陵道场";
/**
入场：发两个时间包（JAVA），召唤怪物（JAVA），提示（JS）
清场：开门，暂停计时，效果
上楼：给点数，提示 dojang_next.js dojang_up.js（JAVA）
 **/
function init() {
	em.setProperty("leader", "true");
	em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("state", 1);
	em.setProperty("leader", "true");
	var eim = em.newInstance(eventName);
	for (var i = 1; i <= 63; i++) {
		mapIds.push(mapHead + i * 100);
	}
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(true);
	}
	initProp("stage", 0);
	return eim;
}

function playerEntry(eim, player) {
	player.setReviveCount(-100);
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	eim.startEventTimer(15 * 60 * 1000);
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
	// 初始化变量
	em.setProperty("clear", "false");
	em.setProperty("kill", 0);
	em.setProperty("stage", (mapid - mapHead) / 100);
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
	// em.broadcastServerMsg("[allMonstersDead]");
}

function monsterValue(eim, mobId) {
	em.broadcastServerMsg("[monsterValue]=" + mobId);
	var mapId = parseInt(em.getProperty("stage"));
	var kilReq = 1;
	if (mapId <= 20) {
		kilReq = 1;
	} else if (mapId < 30) {
		kilReq = 6;
	} else if (mapId == 30) {
		kilReq = 1;
	} else if (mapId <= 35) {
		kilReq = 2;
	} else if (mapId < 40) {
		kilReq = 3;
	} else if (mapId <= 44) {
		kilReq = 1;
	} else if (mapId == 45) {
		kilReq = 2;
	} else if (mapId <= 49) {
		kilReq = 1;
	} else if (mapId == 50) {
		kilReq = 2;
	}
	var kill = parseInt(em.getProperty("kill")) + 1;
		em.setProperty("kill", kill);
	em.broadcastServerMsg("[mapId] " + mapId);
	if (kill >= kilReq) {
		eim.getPlayers().forEach(function (player) {
			player.openNpc(2540005, "特效_完成_武陵道场");
		});
		// +10s
		eim.restartEventTimer(Math.min(15 * 60 * 1000, eim.getTimeLeft() + 10 * 1000));
		em.setProperty("clear", "true");
	} else if (mapId > 30 && mapId < 40 && mapId != 33 && mapId != 36 && mapId != 39) {
		// 得刷好几次
		var map = em.getMapFactoryMap(mapHead + mapId * 100);
		var mob = em.getMonster(9305600 + mapId - 1);
		em.broadcastServerMsg("[mob] " + (9305600 + mapId - 1));
		map.spawnMonsterWithEffect(mob, 15, new java.awt.Point(randomNum(-200, 350), 7), true);
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
		player.openNpc(2540005, "特效_超时_武陵道场");
		scheduleNew("waitAndLeave", 2);
	} else {
		eim.disposeIfPlayerBelow(0, 0);
	}
	// 清空配置文件
	em.getProperties().clear();
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
	eim.unregisterPlayer(player);
}

function waitAndLeave() {
	eim.disposeIfPlayerBelow(100, mapHall);
}
