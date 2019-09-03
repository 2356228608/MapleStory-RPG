/*  This is originally mada by 娜娜
 *  This source is made by BMS Team
 *  功能：模板
 */

// 自定义复活次数
var reviveCount = 5;
// 涵盖地图，离开这个范围会离开事件
var mapIds = [867111060, 867111080, 867111100, 867111120, 867111140, 867111150, 867111170, 867111180, 867111200, 867111220, 867111240, 867111260, 867111270, 867111290, 867111300, 867111320, 867111340, 867111350];
var mapHall = 867110000;
var eventName = "副本_APORD飞船_剧情";

function init() {
	em.setProperty("leader", "true");
	em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("state", 1);
	em.setProperty("leader", "true");
	var eim = em.newInstance(eventName);
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(false);
	}
	return eim;
}

function playerEntry(eim, player) {
	if (cm.getQuestStatus(59728) == 1) {
		var map = eim.getMapInstance(0);
	} else if (cm.getQuestStatus(59729) == 1) { // [橡果侦探团]暴走青蛙嘟嘟？！
		var map = eim.getMapInstance(5);
	} else if (cm.getQuestStatus(59731) == 1) { // [橡果侦探团]克隆奈奈
		var map = eim.getMapInstance(8);
	} else if (cm.getQuestStatus(59732) == 1) { // [橡果侦探团]怪兽龟奈奈？！
		var map = eim.getMapInstance(12);
	} else if (cm.getQuestStatus(59734) == 1) { // [橡果侦探团]黑化白虎
		var map = eim.getMapInstance(17);
	} else {
		var map = eim.getMapInstance(0);
	}
	player.changeMap(map, map.getPortal(0));
	eim.startEventTimer(20 * 60 * 1000);
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
	em.setProperty("kill", "0");
	em.setProperty("clear", "0");
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
	// em.broadcastServerMsg("[monsterValue]=" + mobId);
	var kilReq = 10;
	eim.getPlayers().forEach(function (player) {
		var mapId = player.getMapId();
		if ((mapId == 867111060 || mapId == 867111080 || mapId == 867111100) && mobId != 9410859) {
			return;
		}
		var kill = parseInt(em.getProperty("kill")) + 1;
		em.setProperty("kill", kill);
		if (kill >= kilReq) {
			player.openNpc(2540005, "特效_完成_APORD飞船");
			em.setProperty("clear", "1");
		}
	});
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
