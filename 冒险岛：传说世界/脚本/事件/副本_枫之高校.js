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
	initPropArrayRandom("next_map", 3, 15, 1, 10);
	initPropArray("map", "", 1, 16);
	initProp("next_map_11", 1);
	initProp("next_map_12", 16);
	initProp("kill", 0);
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
	if (mapIds.indexOf(mapid) < 0) {
		on玩家退场(eim, player, false);
		return;
	}
	// 初始化变量
	if (player.getParty().getLeader().getId() == player.getId()) {
		em.setProperty("kill", 0);
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
	// em.broadcastServerMsg("[allMonstersDead]");
}

function monsterValue(eim, mobId) {
	// em.broadcastServerMsg("[monsterValue]=" + mobId);
	var kill = parseInt(em.getProperty("kill")) + 1;
	em.setProperty("kill", kill);
	eim.getPlayers().forEach(function (player) {
		if (player.getParty().getLeader().getId() != player.getId())
			return;
		var mapid = player.getMapId() - 744000000;
		if (mapid == 5) {
			var kilReq = 3;
		} else if (mapid == 6 || mapid == 10) {
			var kilReq = 20;
		} else if (mapid == 9) {
			var kilReq = 21;
		} else {
			var kilReq = 1;
		}
		if (kill < kilReq) {
			return;
		}
		var map = eim.getMapFactoryMap(mapid + 744000000);
		switch (mapid) {
		case 1:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("让我看看你从和朋友的对决那里学到了什么吧。", 5120120);
			break;
		case 2:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("让我看看你从和朋友的对决那里学到了什么吧。", 5120120);
			break;
		case 3:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("让我看看你从候补校长那里学到了什么吧。", 5120120);
			break;
		case 4:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			break;
		case 5:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("算你好运。居然躲掉接种预防针？下次不会放过你。", 5120120);
			break;
		case 6:
			em.setProperty("map_" + mapid, "done");
			break;
		case 7:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("让我看看你从库梅老师那里学到了什么吧", 5120120);
			break;
		case 8:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			break;
		case 9:
			em.setProperty("map_" + mapid, "done");
			break;
		case 10:
			map.spawnNpc(9330192, new java.awt.Point(390, 240));
			player.getMap().startSimpleMapEffect("全……全部力量结合起来。总……总有一天会成为朋友……", 5120066);
			break;
		case 11:
			map.spawnNpc(9330187, new java.awt.Point(276, 189));
			player.getMap().startSimpleMapEffect("授课已经结束了。接受物理老师的考核吧", 5120071);
			break;
		case 12:
			map.spawnNpc(9330188, new java.awt.Point(3, 58));
			player.getMap().startSimpleMapEffect("授课已经结束了。接受历史老师的考核吧", 5120070);
			break;
		case 13:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("呼~太手下留情了，下次一定要把你带走", 5120072);
			break;
		case 14:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("真是的……不允许有社员比社长还强。不准入社！", 5120075);
			break;
		case 15:
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			player.getMap().startSimpleMapEffect("不懂艺术……音乐部不需要你……", 5120074);
			break;
		case 16:
			player.getMap().startSimpleMapEffect("你今天的学习已经圆满结束了。可以放学了。", 5120120);
			map.spawnNpc(9330192, new java.awt.Point(177, 240));
			em.setProperty("state", 100);
			break;
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

function passRoom5() {
	var eim = em.getInstance("副本_枫之高校");
	var map = eim.getMapFactoryMap(5 + 744000000);
	map.spawnNpc(9330192, new java.awt.Point(177, 240));
}
