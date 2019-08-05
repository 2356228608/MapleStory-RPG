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
		if (i > 0) // 避免1F重载浪费时间
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
	if (mapIds.indexOf(mapid) < 0) {
		playerExit(eim, player);
	} else {
		var level = (mapid - mapHall) / 1000;
		em.setProperty("state", level);
		switch (level) {
		case 1:
			if (em.getProperty("stage1_kill") == null)
				em.setProperty("stage1_kill", 0);
			if (em.getProperty("stage1_damage") == null)
				em.setProperty("stage1_damage", 0.0);
			break;
		case 3:
			// 会被剧情脚本卡住？
			scheduleNew("countItem3F", 30);
			if (em.getProperty("stage3_last_count") == null)
				em.setProperty("stage3_last_count", 0);
			break;
		}
		return 1;
	}
}

function playerDisconnected(eim, player) {
	return 0;
}

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, mapHall);
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", 0);
		em.setProperty("leader", "true");
	}
}

function monsterValue(eim, mobId) {
	em.broadcastServerMsg(em.getProperty("state") + "[monsterValue]=" + mobId);
	var curstage = em.getProperty("stage" + em.getProperty("state"));
	switch (em.getProperty("state")) {
	case "1":
		if (curstage != null && curstage.equals("clear"))
			break;
		var kilReq = 300;
		var kill = parseInt(em.getProperty("stage1_kill")) + 1;
		em.setProperty("stage1_kill", kill);
		eim.getPlayers().forEach(function (player) {
			var damage = parseFloat(em.getProperty("stage1_damage")) + player.getStat().getCurrentMaxBaseDamage() / 10000;
			em.setProperty("stage1_damage", damage);
			player.dropMessage(-1, "消灭古代绿水灵 " + (kill) + " / " + kilReq + "，累积冲击量 " + damage.toFixed(2) + " / 5000万");
		});
		if (kill >= kilReq || parseFloat(em.getProperty("stage1_damage")) > 5000) {
			em.setProperty("stage1", "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	}
	return 1;
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {
	em.broadcastServerMsg("[monsterDrop]=" + mob);
}

function monsterDamaged(eim, player, mobID, damage) {
	em.broadcastServerMsg("[monsterDamaged]=" + mobID);
}

function monsterKilled(eim, player, mobID) {
	em.broadcastServerMsg("[monsterKilled]=" + mobID);
}

var setupTask;

// 3F 收集龙蛋
function countItem3F() {
	var itemid = [4009237, 4009238];
	var reqNum = 1000;
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;

	em.getPlayersInMap(mapid).forEach(function (player) {
		var owns = player.getItemAmount(itemid[0]) + player.getItemAmount(itemid[1]);
		if (parseInt(em.getProperty("stage3_last_count")) == owns) {
			scheduleNew("countItem3F", 3);
			return;
		}
		em.setProperty("stage3_last_count", owns);
		player.dropMessage(-1, "古代乌龟蛋 " + owns + " / " + reqNum);
		if (owns < reqNum) {
			scheduleNew("countItem3F", 3);
			return;
		}
		em.setProperty("stage3", "clear");
		player.openNpc(2540005, "特效_完成");
		em.getMapFactoryMap(mapid).startMapEffect("哇！你真的收集到1000个啦？现在我们可以前往下一层了。", 5120061);
	});
}

function scheduleNew(funcName, seconds) {
	setupTask = em.scheduleAtTimestamp(funcName, java.lang.System.currentTimeMillis() + seconds * 1000);
}
