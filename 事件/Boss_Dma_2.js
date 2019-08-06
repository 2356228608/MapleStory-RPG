/** This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：功能:戴米安[简单]
 *  @Author 娜娜 
 */

var mobid;
var mob;
var stats;
var modified;
var MaxRandom;
var ostats;
var victor;
var DPS = 1000000;
var EXP = 500000000;

var rand = Math.floor(Math.random() * 800);

//死亡之后或者时间到了之后回去的地图
var BackMap = 105300303;

//事件复活次数
var reviveCount = 5;

var MapList = Array(
		350160200, //戴米安 1
		350160460 //戴米安 2
	);

var dropItems = new Array(

		// - 怪物ID 道具ID 掉率 最小掉落 最大掉落

		// - 特米纳斯武器系列

		new Array(8880101, 5062024, 100, 1, 1), //六角神奇魔方★
		new Array(8880101, 4002000, 100, 1, 1), //蜗牛邮票

		new Array(8880101, 2049391, 83, 1, 1), //7星强化券
		new Array(8880101, 2049383, 13, 1, 1), //14星强化券
		new Array(8880101, 2049371, 7, 1, 1), //17星强化券

		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 120), //星星
		new Array(8880101, 4001839, 90, 60, 120), //星星
		new Array(8880101, 4001839, 90, 60, 120), //星星
		new Array(8880101, 4001839, 90, 60, 120), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 120), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星
		new Array(8880101, 4001839, 90, 60, 125), //星星


		new Array(8880101, 2430144, 100, 1, 3), //秘密能手册
		new Array(8880101, 2430144, 100, 1, 3), //秘密能手册
		new Array(8880101, 4310143, 100, 1, 5), //BOSS币
		new Array(8880101, 2614003, 30, 1, 3), //突破10W之石
		new Array(8880101, 5390031, 70, 1, 1), //情景喇叭
		new Array(8880101, 5062000, 70, 1, 3), //一般神奇魔方
		new Array(8880101, 5062002, 35, 1, 3), //高级神奇魔方
		new Array(8880101, 5062009, 20, 1, 3), //超级神奇魔方
		new Array(8880101, 5062010, 14, 1, 3), //终极神奇魔方
		new Array(8880101, 5062001, 14, 1, 3), //混沌神奇魔方
		new Array(8880101, 5062500, 20, 1, 3), //大师附加魔方
		new Array(8880101, 2049137, 22, 1, 3), //惊人正义混沌卷轴 40%
		new Array(8880101, 5150040, 30, 1, 3), //皇家理发卷
		new Array(8880101, 5152053, 30, 1, 3) //皇家整容圈
	);

function init() {
	em.setProperty("state", "0");
	em.setProperty("sum", "0"); //初始化落下的怪物状态
}

function monsterDrop(eim, player, mob) {
	var mobid = mob.getId();
	var toDrop = new Array();
	for (var i = 0; i < dropItems.length; i++) {
		if (mobid != dropItems[i][0])
			continue;
		var chance = Math.floor(Math.random() * 265);
		if (chance < dropItems[i][2]) {
			var minQuantity = dropItems[i][3];
			var maxQuantity = dropItems[i][4];
			var quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1) + minQuantity);
			toDrop.push(new Array(dropItems[i][1], quantity)); //载入暴率数组
		}
	}
	for (var i = 0; i < toDrop.length; i++) {
		if (player.getMap() != null)
			player.getMap().spawnMobDrop(em.newItem(toDrop[i][0], 0, toDrop[i][1]), new java.awt.Point(mob.getTruePosition().getX() + 25 * i, mob.getTruePosition().getY()), mob, player, 2, 0);
	}
}

function setup(level, leaderid) {
	var eim = em.newInstance("Boss_Dma_2");
	for (var i = 0; i < MapList.length; i++) {
		var map = eim.setInstanceMap(MapList[i]);
		map.resetPQ(level);
		map.resetFully();
		map.killAllMonsters(true);
		map.respawn(false);
		eim.startEventTimer(1000 * 60 * 40);
	}

	//=======================  第一关  =============================350160200
	mobid = 8880100; //戴米安 1
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(80000000000);
	modified.setOMp(mob.getMobMaxMp() * 30);
	modified.setOExp(EXP);
	mob.getStats().setSpeed(600);
	mob.getStats().setLevel(245);
	mob.getStats().setPDRate(80);
	mob.getStats().setMDRate(80);
	mob.getStats().setAcc(500000);
	mob.setOverrideStats(modified);
	mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性*/
	eim.registerMonster(mob);
	var mapForMob9 = eim.getMapInstance(350160200);
	mapForMob9.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1058, 16));

	//========================== 最终BOSS 部分结束 ===============================

	mobid = 8880101; //戴米安 2
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(120000000000);
	modified.setOMp(mob.getMobMaxMp() * 30);
	modified.setOExp(EXP);
	mob.getStats().setPhysicalAttack(DPS); //物理伤害
	mob.getStats().setMagicAttack(DPS); //魔攻伤害
	mob.getStats().setSpeed(600);
	mob.getStats().setLevel(245);
	mob.getStats().setPDRate(80);
	mob.getStats().setMDRate(80);
	mob.getStats().setAcc(500000);
	mob.setOverrideStats(modified);
	mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性*/
	eim.registerMonster(mob);
	var mapForMob9 = eim.getMapInstance(350160460);
	mapForMob9.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1058, 18));
	eim.schedule("summonFall", 5000);
	em.setProperty("state", "1");
	em.setProperty("sum", "1");
	return eim;

}

/**
 * 玩家进入
 */
function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.dropMessage(6, "[戴米安副本] 进入到了挑战地图，请小心行事。");
	//设置可复活的次数
	player.setReviveCount(reviveCount);
	player.changeMap(map, map.getPortal(0));
}

/**
 * 玩家死亡
 */
function playerDead(eim, player) {}

/**
 * 玩家复活
 */
function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		var map = player.getMap();
		player.eventRevive(); //扣除复活次数
		player.changeMap(map, map.getPortal(0));
		player.dropMessage(-1, "此副本可提供原地复活" + reviveCount + "次.你目前已经使用了" + (reviveCount - player.getReviveCount()) + "次.还有" + player.getReviveCount() + "次可用");
		return true;
	}
	player.addHP(50);
	var map = eim.getMapFactoryMap(BackMap);
	player.changeMap(map, map.getPortal(0));
	return true;
}

/**
 * 时间到
 */
function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, BackMap);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
	em.setProperty("sum", "0");
}

function cancelSchedule() {}

/**
 * 地图改变
 */
function changedMap(eim, player, mapid) {
	switch (mapid) { //实例化地图，不添加也会改变地图，但副本时间会消失。
	case 350160200:
		var map = eim.getMapInstance(350160200);
		map.startMapEffect("你喊吧，喊破喉咙也没有人来救你！", 5120124);
		break;
	case 350160460: //
		var map = eim.getMapInstance(350160460);
		map.startMapEffect("好久没见过敢来挑战的人类了", 5120124);
		eim.schedule("summonFalla", 5000);
		em.setProperty("sum", "2");
		break;
	default:
		player.dropMessage(-1, "已经退出本次副本");
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			//重置剩下的复活次数.
			player.restReviveCount();
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
			em.setProperty("sum", "0");
		}
		break;
	}
}

/**
 * 玩家离开
 */
function playerExit(eim, player) {
	eim.unregisterPlayer(player);

	if (eim.disposeIfPlayerBelow(0, 0)) {
		//重置剩下的复活次数.
		player.restReviveCount();
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
		em.setProperty("sum", "0"); //戴米安死亡之后 停止落下怪物
	}
}

/**
 * 在事件中角色断开连接触发
 */
function playerDisconnected(eim, player) {
	return 0;
}

/**
 * 事件中角色杀死怪物触发事件
 */
function monsterValue(eim, mobid) { //如果怪物状态改变，那么
	if (mobid == 8880100) { //戴米安1
		eim.broadcastPlayerMsg(-1, "5秒钟之后将会进行第二阶段.");
		eim.schedule("warp", 1000 * 5);
	/*} else if (mobid == 8880101) { //戴米安2
		em.setProperty("sum", "0"); //戴米安死亡之后 停止落下怪物
		eim.broadcastPlayerMsg(-1, "系统正在计算此次挑战的奖励品.将在5秒之后出结果.");
		eim.schedule("reward", 1000 * 5);*/
	}

	return 1;
}

/**
 * 怪物死亡触发和删除这个怪在事件中中的信息
 */
function allMonstersDead(eim) {}

/**
 * 在活动中怪物攻击触发
 */
function monsterDamaged(eim, player, mobid, damage) {}

function cancelSchedule() {}

/**
 * 离开队伍触发
 */
function leftParty(eim, player) {}

/**
 * 解散队伍触发
 */
function disbandParty(eim) {}

/**
 * 在事件地图中加载
 */
function onMapLoad(eim, player) {}

/**
 * 召唤落下的球
 */
function summonFall(eim) {
	if (em.getProperty("sum") == 1) {
		var map = eim.getMapInstance(0);
		map.obtacleFall(5, 1, 8);
		eim.schedule("summonFall", 4000);
	}
}

function summonFalla(eim) {
	if (em.getProperty("sum") == 2) {
		var map = eim.getMapInstance(1);
		map.obtacleFall(5, 1, 8);
		eim.schedule("summonFalla", 4000);
	}
}

function warp(eim, player) {
	if (eim.getMapFactory().getMap(350160200).getCharactersSize() != 0) {
		openNpc(eim, 0, "戴米安死亡");
	}
}

function reward(eim, player) {
	var time = 30;
	//副本奖励
	openNpc(eim, 0, "副本奖励");
	//副本分级
	eim.setProperty("FBlv", "90");
	//难度等级
	eim.setProperty("FBnd", "2");
	//评分系统
	openNpc(eim, 0, "评价系统"); // - 评分系统

	eim.broadcastPlayerMsg(-1, "[" + time + "]秒之后.将回去原来的地方.尽情享受胜利的果实吧");
	eim.startEventTimer(1000 * time);
}

function openNpc(eim, npcid, mode) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(npcid, mode);
	}
}

function pickUpItem(eim, player, itemID) {}
