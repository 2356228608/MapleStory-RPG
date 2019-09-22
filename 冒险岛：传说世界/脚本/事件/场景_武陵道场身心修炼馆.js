var setupTask;
var mapIds = [925080000];
var mapHall = 925020001;

function init() {}

function start() {
	em.getPlayersInMap(mapIds[0]).forEach(function (player) {
		var data = getData(player, 18766, ["Time", "enterTime"]);
		data[0][1] = parseInt(data[0][1]) - 10;
		saveData(player, 18766, data); ;
		player.gainExp(player.getNeededExp() / 10000, true, false, true);
		player.dropMessage(5, "还能在身心修炼馆内待上 " + parseInt(data[0][1] / 60) + "分钟。");
	});
	setupTask = scheduleNew("start", 10);
}

function setup(eim, leaderid) {
	var eim = em.newInstance("场景_武陵道场身心修炼馆");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
	}
	setupTask = scheduleNew("start", 10);
	return eim;
}

function playerEntry(eim, player) {}

function playerRevive(eim, player) {
	return false;
}

function changedMap(eim, player, mapid) {
	// em.broadcastServerMsg("[changedMap]");
	if (mapIds.indexOf(mapid) < 0) {
		on玩家退场(eim, player, false);
		return;
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

function monsterValue(eim, mobId) {
	// em.broadcastServerMsg("[monsterValue]=" + mobId);
	return 1;
}

function monsterDrop(eim, player, mob) {
	// em.broadcastServerMsg("[monsterDrop] " + mob);
}

function allMonstersDead(eim) {}

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
function cancelSchedule() {
	setupTask.cancel(true);
}

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
function scheduleNew(funcName, seconds) {
	var setupTask = em.schedule(funcName, seconds * 1000);
	return setupTask;
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

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], "0"]);
	}
	if (str == null)
		return;
	str.split(";").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split("=");
		if (typeof(v) == "undefined" || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = "";
	data.forEach(function (e, i) {
		str += e[0] + "=" + e[1] + ((i < data.length - 1) ? ";" : "");
	});
	manager.updateInfoQuest(quest, str);
}
