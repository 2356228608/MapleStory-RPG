/*
 *
 * by Jessefjxm
 */
var mapIds = new Array();
var mapHall = 993001000;

function init() {
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
	em.setProperty("state", 1);
	em.setProperty("leader", "true");
	var eim = em.newInstance("小游戏_控制之神");
	for (var i = 1; i <= 40; i++) {
		mapIds.push(mapHall + i * 10);
		var map = eim.setInstanceMap(mapHall + i * 10);
		em.setProperty("state_" + i, 0);
	}
	return eim;
}

function playerEntry(eim, player) {
	var id = parseInt(player.getInfoQuest(18837).substr(8)) - 1;
	var map = eim.getMapInstance(id);
	player.changeMap(map, map.getPortal(0));
	player.setReviveCount(-1);
	//eim.startEventTimer(10 * 60 * 1000);
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
	var level = Math.round((mapid - 993001000) / 10);
	if (level == 8) {
		scheduleNew("level" + level + "_stone", 0);
	} else if (level == 9) {
		scheduleNew("level" + level + "_platform", 0);
		em.setProperty("level" + level + "_switch", 0);
	} else if (level == 10) {
		scheduleNew("level" + level + "_platform", 0);
	} else if (level == 12) {
		scheduleNew("level" + level + "_stone", 0);
	} else if (level == 14) {
		scheduleNew("level" + level + "_platform", 0);
	} else if (level == 17) {
		scheduleNew("level" + level + "_stone", 0);
	} else if (level == 18) {
		em.setProperty("level" + level + "_count", 0);
		em.setProperty("level" + level + "_switch", -1);
	} else if (level == 32) {
		scheduleNew("level" + level + "_platform", 0);
		em.setProperty("level" + level + "_switch", 0);
	} else if (level == 34) {
		scheduleNew("level" + level + "_stone", 0);
	} else if (level == 36) {
		scheduleNew("level" + level + "_platform", 0);
		em.setProperty("level" + level + "_switch", 0);
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

function allMonstersDead(eim) {
	var state = em.getProperty("state");
	if (state.equals("1")) {
		em.setProperty("state", "2");
	} else if (state.equals("2")) {
		em.setProperty("state", "3");
	}
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

function level8_stone() {
	var level = 8;
	var mapid = 993001000 + level * 10;
	if (em.getPlayersInMap(mapid).size() == 0) {
		return;
	}
	em.getMapFactoryMap(mapid).obtacleFall(6, 4, 1);
	scheduleNew("level" + level + "_stone", 5);
}

function level9_platform() {
	var level = 9;
	var mapid = 993001000 + level * 10;
	if (em.getPlayersInMap(mapid).size() == 0) {
		return;
	}
	var pos = [[[-2912, -400], [-2912, -128]], [[-305, -531], [-305, -220]]];
	var speed = [[0, 5], [0, 5]];

	var cur = parseInt(em.getProperty("level" + level + "_switch"));
	var next = (cur + 1) % 2;
	for (var i = 0; i <= 1; i++) {
		em.broadcastServerMsg("[CP_Urus_DynamicObjMove] " + pos[i][cur][0] + ", " + pos[i][cur][1] + ", " + pos[i][next][0] + ", " + pos[i][next][1] + ", " + pos[i][cur][0] + ", " + pos[i][cur][1] + ", " + 1 + ", " + Math.pow(-1, cur) * speed[i][0] + ", " + Math.pow(-1, cur) * speed[i][1] + ", " + "updown" + i);
		em.getMapFactoryMap(mapid).CP_Urus_DynamicObjMove(pos[i][cur][0], pos[i][cur][1], pos[i][next][0], pos[i][next][1], pos[i][cur][0], pos[i][cur][1], 1, Math.pow(-1, cur) * speed[i][0], Math.pow(-1, cur) * speed[i][1], "updown" + i);
	}
	em.setProperty("level" + level + "_switch", next);
	scheduleNew("level" + level + "_platform", 4);
}

function level32_platform() {
	var level = 32;
	var mapid = 993001000 + level * 10;
	if (em.getPlayersInMap(mapid).size() == 0) {
		return;
	}
	var pos = [[[-3084, -304], [-3084, 166]], [[-2427, -304], [-2427, 166]], [[-2165, -304], [-2165, 166]]];
	var speed = [[0, 6], [0, 5], [0, 5]];

	var cur = parseInt(em.getProperty("level" + level + "_switch"));
	var next = (cur + 1) % 2;
	for (var i = 0; i <= 2; i++) {
		em.getMapFactoryMap(mapid).CP_Urus_DynamicObjMove(pos[i][cur][0], pos[i][cur][1], pos[i][next][0], pos[i][next][1], pos[i][cur][0], pos[i][cur][1], 1, Math.pow(-1, cur) * speed[i][0], Math.pow(-1, cur) * speed[i][1], "updown" + (i + 1));
	}
	em.setProperty("level" + level + "_switch", next);
	scheduleNew("level" + level + "_platform", 8);
}

function level36_platform() {
	var level = 36;
	var mapid = 993001000 + level * 10;
	if (em.getPlayersInMap(mapid).size() == 0) {
		return;
	}
	var pos = [[[-3156, -480], [-3156, 227]], [[-2156, -480], [-2156, 227]]];
	var speed = [[0, 7], [0, 7]];

	var cur = parseInt(em.getProperty("level" + level + "_switch"));
	var next = (cur + 1) % 2;
	for (var i = 0; i <= 1; i++) {
		em.getMapFactoryMap(mapid).CP_Urus_DynamicObjMove(pos[i][cur][0], pos[i][cur][1], pos[i][next][0], pos[i][next][1], pos[i][cur][0], pos[i][cur][1], 1, Math.pow(-1, cur) * speed[i][0], Math.pow(-1, cur) * speed[i][1], "updown" + (i + 1));
	}
	em.setProperty("level" + level + "_switch", next);
	scheduleNew("level" + level + "_platform", 12);
}

function level12_stone() {
	var level = 12;
	var mapid = 993001000 + level * 10;
	if (em.getPlayersInMap(mapid).size() == 0) {
		return;
	}
	em.getMapFactoryMap(mapid).obtacleFall(6, 4, 1);
	scheduleNew("level" + level + "_stone", 5);
}

function level17_stone() {
	var level = 17;
	var mapid = 993001000 + level * 10;
	if (em.getPlayersInMap(mapid).size() == 0) {
		return;
	}
	em.getMapFactoryMap(mapid).obtacleFall(6, 4, 1);
	scheduleNew("level" + level + "_stone", 5);
}

function level34_stone() {
	var level = 34;
	var mapid = 993001000 + level * 10;
	if (em.getPlayersInMap(mapid).size() == 0) {
		return;
	}
	em.getMapFactoryMap(mapid).obtacleFall(6, 4, 1);
	scheduleNew("level" + level + "_stone", 5);
}
