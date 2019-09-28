/*
 *  功能：路西德副本(普通)
 *  Form: 芬芬时尚潮流
 */
//自定义复活次数
var reviveCount = 10;

var map1id = 450004100; //播放动画
var map2id = 450004150; //梦幻森林 路西德1阶段
var map3id = 450004200; //噩耗的时间塔
var map4id = 450004250; //第二阶段
var map5id = 450004300; //奖励地图
//死亡之后或者时间到了之后回去的地图
var BackMap = 450004000;

var dropItems = new Array(8880167,
		//怪物ID，物品ID，爆率，最小值，最大值
		new Array(8880167, 1004808, 50, 1, 1), //神秘之影战士帽
		new Array(8880167, 1004809, 50, 1, 1), //神秘之影法师帽
		new Array(8880167, 1004810, 50, 1, 1), //神秘之影弓箭手帽
		new Array(8880167, 1004811, 50, 1, 1), //神秘之影飞侠帽
		new Array(8880167, 1004812, 50, 1, 1), //神秘之影海盗帽
		new Array(8880167, 1102940, 50, 1, 1), //神秘之影战士披风
		new Array(8880167, 1102941, 50, 1, 1), //神秘之影法师披风
		new Array(8880167, 1102942, 50, 1, 1), //神秘之影弓箭手披风
		new Array(8880167, 1102943, 50, 1, 1), //神秘之影飞侠披风
		new Array(8880167, 1102944, 50, 1, 1), //神秘之影海盗披风
		new Array(8880167, 1082695, 50, 1, 1), //神秘之影战士手套
		new Array(8880167, 1082696, 50, 1, 1), //神秘之影法师手套
		new Array(8880167, 1082697, 50, 1, 1), //神秘之影弓箭手手套
		new Array(8880167, 1082698, 50, 1, 1), //神秘之影飞侠手套
		new Array(8880167, 1082699, 50, 1, 1), //神秘之影海盗手套
		new Array(8880167, 1053063, 50, 1, 1), //神秘之影战士套装
		new Array(8880167, 1053064, 50, 1, 1), //神秘之影法师套装
		new Array(8880167, 1053065, 50, 1, 1), //神秘之影弓箭手套装
		new Array(8880167, 1053066, 50, 1, 1), //神秘之影飞侠套装
		new Array(8880167, 1053067, 50, 1, 1), //神秘之影海盗套装
		new Array(8880167, 1073158, 50, 1, 1), //神秘之影战士鞋
		new Array(8880167, 1073159, 50, 1, 1), //神秘之影法师鞋
		new Array(8880167, 1073160, 50, 1, 1), //神秘之影弓箭手鞋
		new Array(8880167, 1073161, 50, 1, 1), //神秘之影飞侠鞋
		new Array(8880167, 1073162, 50, 1, 1), //神秘之影海盗鞋
		new Array(8880167, 1212120, 10, 1, 1), //神秘之影双头杖
		new Array(8880167, 1222113, 10, 1, 1), //神秘之影灵魂手铳
		new Array(8880167, 1232113, 10, 1, 1), //神秘之影亡命剑
		new Array(8880167, 1242121, 10, 1, 1), //神秘之影能量剑
		new Array(8880167, 1242122, 10, 1, 1), //神秘之影能量剑
		new Array(8880167, 1262039, 10, 1, 1), //神秘之影ESP限制器
		new Array(8880167, 1272017, 10, 1, 1), //神秘之影锁链
		new Array(8880167, 1282017, 10, 1, 1), //神秘之影魔力手套
		new Array(8880167, 1302343, 10, 1, 1), //神秘之影单手剑
		new Array(8880167, 1312203, 10, 1, 1), //神秘之影斧
		new Array(8880167, 1322255, 10, 1, 1), //神秘之影锤
		new Array(8880167, 1332279, 10, 1, 1), //神秘之影匕首
		new Array(8880167, 1342104, 10, 1, 1), //神秘之影刃
		new Array(8880167, 1362140, 10, 1, 1), //神秘之影手杖
		new Array(8880167, 1372228, 10, 1, 1), //神秘之影短杖
		new Array(8880167, 1382265, 10, 1, 1), //神秘之影长杖
		new Array(8880167, 1402259, 10, 1, 1), //神秘之影双手剑
		new Array(8880167, 1412181, 10, 1, 1), //神秘之影双手战斧
		new Array(8880167, 1422189, 10, 1, 1), //神秘之影双手锤
		new Array(8880167, 1432218, 10, 1, 1), //神秘之影长枪
		new Array(8880167, 1442274, 10, 1, 1), //神秘之影矛
		new Array(8880167, 1452257, 10, 1, 1), //神秘之影弓
		new Array(8880167, 1462243, 10, 1, 1), //神秘之影弩
		new Array(8880167, 1472265, 10, 1, 1), //神秘之影拳套
		new Array(8880167, 1482221, 10, 1, 1), //神秘之影指节
		new Array(8880167, 1492235, 10, 1, 1), //神秘之影短枪
		new Array(8880167, 1522143, 10, 1, 1), //神秘之影双弩枪
		new Array(8880167, 1532150, 10, 1, 1), //神秘之影攻城炮
		new Array(8880167, 1582023, 10, 1, 1), //神秘之影机甲枪
		new Array(8880167, 1690204, 10, 1, 1), //神秘之影武器
		new Array(8880167, 1690321, 10, 1, 1), //神秘之影鞋子
		new Array(8880167, 1690322, 10, 1, 1), //神秘之影手套
		new Array(8880167, 1690323, 10, 1, 1), //神秘之影披风
		new Array(8880167, 1542117, 10, 1, 1), //神秘之影武士刀
		new Array(8880167, 1552119, 10, 1, 1), // 神秘之影折扇
		new Array(8880167, 1252098, 10, 1, 1) //神秘之影魔法槌
	);

//初始化
function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

//实例
function setup(level, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	var eim = em.newInstance("Boss_噩梦时间塔_路西德_普通");
	var map1 = eim.setInstanceMap(map1id);
	var map2 = eim.setInstanceMap(map2id);
	var map3 = eim.setInstanceMap(map3id);
	var map4 = eim.setInstanceMap(map4id);
	var map5 = eim.setInstanceMap(map5id);
	map1.resetFully();
	map2.resetFully();
	map3.resetFully();
	map4.resetFully();
	map5.resetFully();
	eim.setProperty("stop", "0");
	eim.setProperty("phase", "0");
	eim.setProperty("summom", "0");
	eim.startEventTimer(30 * 60 * 1000);
	return eim;
}

//玩家进入
function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	if (player.isAdmin()) {
		reviveCount = 50;
	}
	player.setReviveCount(reviveCount);
	player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
	switch (mapid) {
	case map1id:
		break;
	case map2id:
		break;
	case map3id:
		break;
	case map4id:
		break;
	case map5id:
		break;
	default:
		player.dropMessage(-1, "已经退出本次副本");
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
		}

		break;
	}
}

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, BackMap);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function monsterValue(eim, mobid) {
	var state = em.getProperty("state");
	switch (mobid) {
	case 8880140:
		if (state.equals("1")) {
			em.setProperty("state", "2");
			eim.setProperty("phase", "1");
			eim.schedule("warpNext", 1000 * 4);
		}
		break;
	case 8880150:
		if (state.equals("2")) {
			em.setProperty("state", "4");
			eim.setProperty("phase", "2");
			eim.schedule("warpNext", 1000 * 4);
		}
		var teamMembers = eim.getPlayerCount();
		eim.getPlayers().forEach(function (player) {
			player.updateAchievement(825, 0, "mob_kill", 1, 1);
			player.updateAchievement(826, 0, "mob_kill", 1, 10);
			player.updateAchievement(827, 0, "mob_kill", 1, 100);
			player.updateAchievement(828, 0, "mob_kill", 1, 100);
		});
		break;
	}
	return 1;
}

function allMonstersDead(eim) {}

function cancelSchedule() {}

function playerDead(eim, player) {}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		var map = eim.getMapInstance(0);
		player.eventRevive(map, map.getPortal(0), true, new java.awt.Point(23, 48));
		return true;
	}
	player.addHP(50);
	var map = eim.getMapFactoryMap(BackMap);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function warpNext(eim) {
	var map;
	var state = parseInt(em.getProperty("state"));
	for (var i = 0; i < eim.getPlayers().size(); i++) {
		map = eim.getMapInstance(state);
		if (map != null) {
			eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
		}
	}
}

/*function summonButterfly(eim) {
var state = parseInt(em.getProperty("state"));
var map = eim.getMapInstance(state - 1);
var count = parseInt(eim.getProperty("count"));
if (eim.getProperty("stop").equals("0")) {
if (map != null) {
map.onButterfly();
//if (state == 4) {
//map.brokenSteps();
//}
eim.schedule("summonButterfly", 3500);
}
}
}*/

function dragon(eim) {
	/*var state = parseInt(em.getProperty("state"));
	var map = eim.getMapInstance(state);
	if (eim.getProperty("phase").equals("0")) {
	if (map != null) {
	map.startMapEffect("路西德召唤出了强大的召唤兽！", 5120124);
	//map.onDragon(1, 2308, 30, 2308, -688, false);
	}
	eim.schedule("dragon", 1000 * 60 * 2);
	} else if (eim.getProperty("phase").equals("1")) {
	map = eim.getMapInstance(state + 1);
	if (map != null) {
	map.startMapEffect("路西德召唤出了强大的召唤兽！", 5120124);
	var Left = true; //是否在左边
	var posxLT = 0;
	var posyLT = -650;
	var LeftX = -50;
	var LeftY = 395;
	//map.onDragon(2, posxLT, posyLT, LeftX, LeftY, Left);
	}
	eim.schedule("dragon", 1000 * 60 * 1);
	}*/
}

function pickupItem(eim, player, itemID) {}

function monsterDamaged(eim, player, mobID, damage) {}

function monsterKilled(eim, player, mobID) {}

function monsterDrop(eim, player, mob) {
	var mobid = mob.getId();
	var toDrop = new Array();
	for (var i = 0; i < dropItems.length; i++) {
		if (mobid != dropItems[i][0])
			continue;
		var chance = random(1, 100); //爆率
		if (chance < dropItems[i][2]) {
			var minQuantity = dropItems[i][3];
			var maxQuantity = dropItems[i][4];
			var quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1) + minQuantity);
			toDrop.push(new Array(dropItems[i][1], quantity)); //载入暴率数组
		}
	}
	for (var i = 0; i < toDrop.length; i++) {
		if (player.getMap() != null) {
			player.getMap().spawnMobDrop(em.newItem(toDrop[i][0], 0, toDrop[i][1]), mob.getPosition(), mob, player, 0, 0);
		}
	}
}

function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
