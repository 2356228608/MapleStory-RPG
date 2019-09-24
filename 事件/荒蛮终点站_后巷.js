/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var reviveCount = 5;
var mapIds = [940200600];
var mapHall = 940200502;
var eventName = "荒蛮终点站_后巷";

function init() {
	em.setProperty("leader", "true");
	em.setProperty("state", "0");
}

function monsterDrop(eim, player, mob) {
}
function setup(eim, leaderid) {
	em.setProperty("state", 1);
	em.setProperty("leader", "true");
	var eim = em.newInstance(eventName);
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(true);
		map.respawn(false);

	}

	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	eim.startEventTimer(1000 * 60 * 10);
}

function playerRevive(eim, player) {
	return false;
}

function monsterValue(eim, mobId) {
	var state = parseInt(em.getProperty("state"));
	var curstage = em.getProperty("stage" + state);
	var mapid = state * 1000 + mapHall;
	switch (state) {
	case 1:
		var kilReq = 30;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			var damage = parseFloat(em.getProperty("stage1_damage")) + player.getStat().getCurrentMaxBaseDamage() / 10000;
			em.setProperty("stage1_damage", damage);
			player.dropMessage(-1, "消灭数量："+(kill)+"/30");
		});
		//击杀达标时
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(0, "荒蛮终点站_后巷end");
			});
			//em.getMapFactoryMap(mapid).getWeatherEffectNotice("你现在可以前往下一层了。", 147, 30000, 1);
		}
		break;
	}
}

function changedMap(eim, player, mapid) {
	// em.broadcastServerMsg("[changedMap]");
	if (mapIds.indexOf(mapid) < 0) {
		on玩家退场(eim, player, false);
		return;
	}
	// 初始化变量
	var level = (mapHall - mapHall)+1;
	em.setProperty("state", level);
	switch (level) {
	case 1:
		initProp("stage" + level + "_kill", 0);
		initProp("stage" + level + "_damage", 0.0);
		break;
	}
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

