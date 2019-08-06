/*
 * 起源之塔
 */

var mapIds = new Array();
var mapHall = 992000000;
// 目前故障的楼层
var badMaps = [2, 4, 6, 16, 19, 21, 29, 37, 38, 42, 43, 46];

function init() {
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
	// 暂时很多地图有问题
	for (var i = 1; i <= 50; i++) {
		if (badMaps.indexOf(i) < 0) {
			mapIds.push(992000000 + i * 1000);
		}
	}
}

function setup(eim, leaderid) {
	em.setProperty("state", 1);
	em.setProperty("leader", "true");
	var eim = em.newInstance("Map_TowerOfOz");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		if (i != 1) // 加速载入，或者避免部分地图重载丢失
			map.resetFully();
		map.killAllMonsters(false);
	}
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	eim.startEventTimer(em.getProperty("time"));
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
		var level = (mapid - mapHall) / 1000;
		em.setProperty("state", level);
		switch (level) {
		case 1:
			initProp("stage1_kill", 0);
			initProp("stage1_damage", 0.0);
			break;
		case 3:
			initProp("stage3_last_egg_count", 0);
			initProp("stage3_bet_egg_on_left", 0);
			initProp("stage3_bet_egg_on_right", 0);
			initProp("stage3_winner", 0);
			// 背景事件
			scheduleNew("stage3_CountItem", 3);
			scheduleNew("stage3_Fight", randomNum(1 * 60, 3 * 60));
			break;
		case 6:
			initProp("stage6_kill", 0);
			break;
		case 7:
			initProp("stage7_count", 0);
			break;
		case 8:
			initProp("stage8_kill", 0);
			break;
		case 9:
			initProp("stage9_level", 0);
			initProp("stage9_fail", 0);
			for(var i=0;i<8;i++){
				initProp("stage9_puzzle_"+i, randomNum(0, 3));
			}
			break;
		}
}

function playerDisconnected(eim, player) {
	// todo 干脆放弃？
	em.broadcastServerMsg("[playerDisconnected]");
	on玩家退场(eim, player, false);
	return 0;
}

function scheduledTimeout(eim) {
	em.broadcastServerMsg("[scheduledTimeout]");
	on玩家退场(eim, eim.getPlayers().get(0), true);
}

function playerExit(eim, player) {
	em.broadcastServerMsg("[playerExit]");
	on玩家退场(eim, player, false);
}

function monsterValue(eim, mobId) {
	em.broadcastServerMsg("[monsterValue]=" + mobId);
	var state = parseInt(em.getProperty("state"));
	var curstage = em.getProperty("stage" + state);
	var mapid = state * 1000 + mapHall;
	switch (state) {
	case 1:
		var kilReq = 300;
		var kill = parseInt(em.getProperty("stage1_kill")) + 1;
		em.setProperty("stage1_kill", kill);
		eim.getPlayers().forEach(function (player) {
			var damage = parseFloat(em.getProperty("stage1_damage")) + player.getStat().getCurrentMaxBaseDamage() / 10000;
			em.setProperty("stage1_damage", damage);
			player.dropMessage(-1, "消灭古代绿水灵 " + (kill) + " / " + kilReq + "，累积冲击量 " + damage.toFixed(2) + "万 / 5000万");
		});
		if (kill >= kilReq || parseFloat(em.getProperty("stage1_damage")) > 5000) {
			em.setProperty("stage1", "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 6:
		var kilReq = 300;
		var kill = parseInt(em.getProperty("stage6_kill")) + 1;
		em.setProperty("stage6_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭绿水灵 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage6", "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 8:
		var kilReq = 100;
		var kill = parseInt(em.getProperty("stage8_kill")) + 1;
		em.setProperty("stage8_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭火山虫 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage8", "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	}
	return 1;
}

function monsterDrop(eim, player, mob) {
	em.broadcastServerMsg("[monsterDrop] " + mob);
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}

var setupTask;

// 3F 收集龙蛋
function stage3_CountItem() {
	var itemid = [4009237, 4009238];
	var reqNum = 1000;
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 3 * 1000 + mapHall)
		return;

	em.getPlayersInMap(mapid).forEach(function (player) {
		var owns = player.getItemAmount(itemid[0]) + player.getItemAmount(itemid[1]);
		if (parseInt(em.getProperty("stage3_last_egg_count")) == owns) {
			scheduleNew("stage3_CountItem", 3);
			return;
		}
		em.setProperty("stage3_last_egg_count", owns);
		player.dropMessage(-1, "古代乌龟蛋 " + owns + " / " + reqNum);
		if (owns < reqNum) {
			scheduleNew("stage3_CountItem", 3);
			return;
		} else {
			em.getMapFactoryMap(mapid).startMapEffect("哇！你真的收集到1000个啦？现在我们可以前往下一层了。", 5120061);
			em.setProperty("stage3", "clear");
			player.openNpc(2540005, "特效_完成");
		}
	});
}

// 3F 世纪对决
function stage3_Fight() {
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 3 * 1000 + mapHall) {
		return;
	}

	var winner = randomNum(1, 2) == 1 ? 2540012 : 2540014;
	em.setProperty("stage3_winner", winner);
	em.getPlayersInMap(mapid).forEach(function (player) {
		player.openNpc(winner, "起源之塔_3F_对决胜利");
	});

	scheduleNew("stage3_Fight", randomNum(1 * 60, 3 * 60));
}

// 7F 赶猴子
function stage7_Fight() {
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 7 * 1000 + mapHall) {
		return;
	}
	var eim = em.getInstance("Map_TowerOfOz");
	var map = eim.setInstanceMap(mapid);
	var mob;
	var count = parseInt(em.getProperty("stage7_count")) + 1;
	em.setProperty("stage7_count", count);
	if (count < 7) {
		var incoming = 2540000 + randomNum(1, 2);
		em.getPlayersInMap(mapid).forEach(function (player) {
			player.openNpc(incoming, "起源之塔_7F_赶猴子");
		});
		scheduleNew("stage7_Fight", randomNum(10, 20));
		for (var i = 0; i < count * 4 + 10; i++) {
			mob = em.getMonster(count % 2 == 0 ? 9309002 : 9309125);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(count % 2 == 0 ? (-1500 + i * 30) : (-200 - i * 30), 2300));
		}
	} else if (count == 7) { // 最后一轮
		em.getPlayersInMap(mapid).forEach(function (player) {
			player.openNpc(2540003, "起源之塔_7F_赶猴子");
		});
		scheduleNew("stage7_Fight", randomNum(10, 20));
		for (var i = 0; i < count * 2 + 10; i++) {
			mob = em.getMonster(i % 2 == 0 ? 9309002 : 9309125);
			map.spawnMonsterOnGroundBelow(mob, -1500 + i * 30, 2300);
			map.spawnMonsterOnGroundBelow(mob, -200 - i * 30, 2300);
		}
	} else { // 结束
		em.getPlayersInMap(mapid).forEach(function (player) {
			player.openNpc(2540004, "起源之塔_7F_赶猴子");
		});
	}
}

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
// 循环调动事件
function scheduleNew(funcName, seconds) {
	var setupTask = em.scheduleAtTimestamp(funcName, java.lang.System.currentTimeMillis() + seconds * 1000);
	return setupTask;
}
// 处理玩家退场
function on玩家退场(eim, player, isTimeout) {
	// 保存一部分数据，方便之后领取奖励
	var time = eim.getTimeLeft();
	var level = em.getProperty("state");
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
	// 清空玩家道具
	var itemid = [4009237, 4009238];
	player.removeItem(itemid[0], player.getItemAmount(itemid[0]));
	player.removeItem(itemid[1], player.getItemAmount(itemid[1]));
	// 记录本次通关数据
	em.setProperty("time" + player.getId(), time);
	em.setProperty("level" + player.getId(), level);
}
