var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var addMonsterTask;
var butterflyTask;
var reviveCount = 5; //复活限制
var maps = Array(
		450004150, //梦幻森林 挑战路西德
		450004250,
		450004600);

function init() {
	em.setProperty("state", "0");
}

function setup(level, leaderid) {
	var eim = em.newInstance("Boss_噩梦时间塔_路西德_困难");
	for (var i = 0; i < maps.length; i++) {
		var map = eim.setInstanceMap(maps[i]);
		map.resetPQ(level);
		map.resetFully();
		map.killAllMonsters(true);
	}

	mobid = 8880140; //梦中路西德
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	//modified.setOHp(2400000000000*em.Mob_BOSS_HP2_luxide_HARDjj());//100万亿
	modified.setOHp(em.Mob_BOSS_HP2_luxide_HARDjj()); //100万亿
	modified.setOMp(mob.getMobMaxMp() * 2);
	mob.getStats().setPhysicalAttack(499999999); //物理伤害
	mob.getStats().setMagicAttack(499999999); //魔攻伤害
	mob.getStats().setAcc(500000);
	mob.getStats().setPDRate(50);
	mob.getStats().setMDRate(50);
	mob.getStats().setLevel(220);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450004150);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(980, 47));

	mobid = 8880166; //路西德之花
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	mapForMob = eim.getMapInstance(450004150);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(980, 47));

	mapForMob = eim.setInstanceMap(450004250); //露西德
	modified = em.newMonsterStats();
	modified.setOHp(2400000000); //100万亿
	modified.setOMp(mob.getMobMaxMp() * 2);
	mob = em.getMonster(8880151);
	mob.getStats().setPhysicalAttack(499999999); //物理伤害
	mob.getStats().setMagicAttack(499999999); //魔攻伤害
	mob.getStats().setAcc(500000);
	mob.getStats().setPDRate(50);
	mob.getStats().setMDRate(50);
	mob.getStats().setLevel(220);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(725, -491));

	mobid = 8880177; //奖品盒子
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(2000000000);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450004600);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(21, 37));
	addFirstMonsters(eim);
	eim.startEventTimer(1000 * 60 * 40); // 40分钟
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount);
	player.dropMessage(6, "[路西德] 进入到了挑战地图，请小心行事。");
	player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
	eim.broadcastPlayerMsg(1, "[路西德副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
	eim.disposeIfPlayerBelow(100, 910000000);
}

function cancelSchedule() {}

function playerDead(eim, player) {}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		player.eventRevive();
		player.changePortal(0);
		return true;
	}
	return false;
}

function changedMap(eim, player, mapid) {
	switch (mapid) {
	case 450004150: // 梦幻森林
		var map1 = eim.getMapInstance(450004150);
		if (em.getProperty("state").equals("0")) {
			em.setProperty("state", "1");
			//map1.resetFully();
			//doButterfly(eim);
		}
		map1.startMapEffect("好像存在些什么未知的力量 - 让我们同心协力消灭噩梦女王吧", 5120161);
		break;
	case 450004250: //
		var map2 = eim.getMapInstance(450004250);
		if (em.getProperty("state").equals("1")) {
			if (addMonsterTask != null) {
				addMonsterTask.cancel(true);
				addMonsterTask = null;
			}
			addSecondMonsters(eim);
			em.setProperty("state", "2");
			//map2.resetFully();
			//doButterfly(eim);
		}
		// map.startMapEffect("好像存在些什么未知的力量 - 让我们同心协力消灭噩梦女王吧", 5120161);
		break;
	case 450004600:
		var map = eim.getMapInstance(450004600);
		if (em.getProperty("state").equals("2")) {
			if (addMonsterTask != null) {
				addMonsterTask.cancel(true);
				addMonsterTask = null;
			}
			if (butterflyTask != null) {
				butterflyTask.cancel(true);
				butterflyTask = null;
			}
			em.setProperty("state", "3");
			eim.startEventTimer(1000 * 60 * 5);
		}

		break;
	}

	switch (mapid) {
	case 450004150:
	case 450004600:
	case 450004250:
		return;
	}
	player.dropMessage(6, "[路西德副本] 已退出挑战。");
	eim.unregisterPlayer(player);
	if (eim.getPlayerCount() <= 0) {
		eim.disposeIfPlayerBelow(100, 910000000);
	}
}

function playerExit(eim, player) {
	eim.disposeIfPlayerBelow(100, 910000000);
}

function playerDisconnected(eim, player) {
	eim.unregisterPlayer(player);
	return 0;
}

function monsterValue(eim, mobid) {
	switch (mobid) {
	case 8880140:
		var map1 = eim.getMapInstance(450004250);
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			var newVar = eim.getPlayers().get(i);
			newVar.changeMap(map1, map1.getPortal(0));
			//newVar.showGlass();
		}
		break;
	case 8880151:
		var map2 = eim.getMapInstance(450004600);
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			eim.getPlayers().get(i).changeMap(map2, map2.getPortal(0));
		}
		map2.startMapEffect("请速拿到紫色小花后过图到下一关.", 5120161);
		break;
	case 8880177:
		var map3 = eim.getMapInstance(450004600);
		map3.spawnNpc(9400154, new java.awt.Point(80, 36));
		map2.startMapEffect("露西德已击败,请和NPC对话领取奖励吧.", 5120161);
		break;
		var teamMembers = eim.getPlayerCount();
		eim.getPlayers().forEach(function (player) {
			player.updateAchievement(832, 0, "mob_kill", 1, 1);
			player.updateAchievement(833, 0, "mob_kill", 1, 10);
			player.updateAchievement(834, 0, "mob_kill", 1, 100);
			player.updateAchievement(835, 0, "mob_kill", 1, 100);
		});
	}
	return 1;
}

function monsterKilled(eim, player, cp) {}

function allMonstersDead(eim) {}

function openNpc(eim, npcid, mode) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(npcid, mode);
	}
}

function monsterDamaged(eim, player, mobid, damage) {}

function cancelSchedule() {
	if (addMonsterTask != null) {
		addMonsterTask.cancel(true);
	}
	if (setupTask != null)
		setupTask.cancel(true);
}

function leftParty(eim, player) {
	eim.disposeIfPlayerBelow(100, 910000000);
}

function disbandParty(eim) {
	eim.disposeIfPlayerBelow(100, 910000000);
}

function onMapLoad(eim, player) {}

function monsterDrop(eim, player, mob) {}

var itemList = Array(
		Array(4000463, 600), //神话耳环蓝图
		Array(2430210, 600), //女神之泪
		Array(2048723, 300), //女神之血滴
		Array(2048721, 300), //绝对之戒
		Array(4000463, 600), //终极魔方
		Array(5062024, 500), //神话耳环
		Array(2048704, 300), //星火幸运箱子
		Array(2048708, 300), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
		Array(2614008, 400), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614014, 300), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614002, 200), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。
		Array(3015820, 200), // 迷你神兽椅子, 300), // 坐在迷你神兽椅子上时，每10秒HP恢复50，MP恢复50。
		Array(3015712, 200), // 摆钟椅子, 300), // 坐在钟摆椅子上时，每10秒HP恢复50，MP恢复50。
		Array(3015633, 200), // 宝石枫叶椅子, 300), // 用宝石做成的闪亮枫叶椅子。坐下后每10秒恢复HP 40, MP 20。
		Array(2614004, 300), // 热情的红色药水椅子, 300), // 和其他药水椅子相比，可以更快地恢复HP的红色药水椅子。每10秒HP恢复110，MP恢复50。
		Array(2435824, 100), // V卷箱子
		Array(3994417, 40), // 蜡笔
		Array(3994422, 40), // 蜡笔
		Array(1112968, 300), // 公沙沙兔靠垫, 300), // 靠着可爱的公沙沙兔坐着，每10秒HP恢复60。
		Array(3015545, 200), // 海蓝天鹅绒沙发, 300), // 奢华的海蓝色天鹅绒沙发。坐在上面，每10秒HP恢复60。
		Array(3015327, 200), // 红色设计师椅子, 300), // 采用明亮红色的设计师椅子。坐在上面，每10秒HP恢复60。
		Array(3015181, 200), // 艾莉珍椅子, 300), // 可以成为可爱的少女艾莉珍的好朋友。每10秒HP恢复50，MP恢复50。
		Array(3015178, 200), // 红帽月妙抱枕椅, 300), // 坐在抱枕椅上就可以看到戴著红色帽子的可爱月妙的才艺。
		Array(3015688, 200), // 蓝帽月妙抱枕椅, 300), // 坐在抱枕椅上就可以看到戴著蓝色帽子的可爱月妙的才艺。
		Array(3015690, 200), // 扇子月妙抱枕椅, 300), // 坐在抱枕椅上就可以观赏拿著扇子走绳索的月妙的才艺。
		Array(3015653, 200), // 太平萧月妙抱枕椅, 300), // 坐在抱枕椅上就可以观赏史出浑身力量演奏的月妙。
		Array(3015642, 200), // 恶灵附身的娃娃椅子, 300), // 恶灵附身的娃娃椅子。坐在上面，每10秒HP恢复50。
		Array(4000463, 600), //神话耳环蓝图
		Array(2435824, 100), // V卷箱子
		Array(2048723, 300), //女神之血滴
		Array(2048721, 300), //绝对之戒
		Array(2435824, 100), // V卷箱子
		Array(5062024, 500), //神话耳环
		Array(2436363, 40), // VVVIP盒子
		Array(2048708, 300), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
		Array(2614008, 400), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614014, 300), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614002, 200), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
		Array(2430210, 600), //女神之泪
		Array(2436256, 30), // 神秘之影
		Array(1113056, 30), // 神秘之影
		Array(2048721, 300), //绝对之戒
		Array(4000463, 600), //终极魔方
		Array(5062024, 500), //神话耳环
		Array(2048704, 300), //星火幸运箱子
		Array(2048708, 300), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
		Array(2614008, 400), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614014, 300), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614002, 200), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
		Array(2430210, 600), //女神之泪
		Array(2435824, 100), // V卷箱子
		Array(2048721, 300), //绝对之戒
		Array(4000463, 600), //终极魔方
		Array(2430210, 500), //神话耳环
		Array(2048704, 300), //星火幸运箱子
		Array(2048708, 300), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
		Array(2614008, 400), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614014, 300), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614002, 200), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
		Array(4000463, 600), //女神之泪
		Array(2048723, 300), //女神之血滴
		Array(2048721, 300), //绝对之戒
		Array(4000463, 600), //终极魔方
		Array(3994419, 40), // 蜡笔
		Array(5062024, 500), //神话耳环
		Array(2048704, 300), //星火幸运箱子
		Array(3994422, 40), // 蜡笔
		Array(2048721, 300), //绝对之戒
		Array(3994420, 40), // 蜡笔
		Array(4000463, 600), //终极魔方
		Array(2436383, 30), // 特米纳斯
		Array(2048704, 300), //星火幸运箱子
		//130装备
		Array(4000463, 600), //神话耳环蓝图
		Array(2430210, 600), //女神之泪
		Array(2048723, 300), //女神之血滴
		Array(2435824, 150), // V卷箱子
		Array(2436262, 40), // 露西德机器人
		Array(4000463, 600), //终极魔方
		Array(5062024, 500), //神话耳环
		Array(3994418, 40), // 蜡笔
		Array(2048704, 300), //星火幸运箱子
		Array(2048708, 300), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
		Array(2614008, 400), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614014, 300), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614002, 200), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
		Array(2435824, 100), // V卷箱子
		Array(2048723, 300), //女神之血滴
		Array(2048721, 300), //绝对之戒
		Array(4000463, 600), //终极魔方
		Array(5062024, 500), //神话耳环
		Array(2048704, 300), //星火幸运箱子
		Array(2048708, 300), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
		Array(2614008, 400), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614014, 300), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
		Array(2614002, 200));

function rollEnd(eim) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).dropMessage(1, "[ 路西德副本 ] 挑战成功！");
	}
	em.setProperty("state", "done");
	if (setupTask != null)
		setupTask.cancel(true);
	if (addMonsterTask != null) {
		setupTask.cancel(true);
	}
	cancelButterfly();
	eim.disposeIfPlayerBelow(100, 100000000);
	eim.dispose();
}

//第一阶段
function addFirstMonsters(eim) {
	var random = new java.util.Random();
	var count = random.nextInt(2) + 2;
	var mapForMob = eim.getMapInstance(450004150);
	for (var i = 0; i < count; i++) {
		var position = random.nextInt(1000) + 200;
		var mobid = 0;
		if (random.nextInt(100) > 50) {
			mobid = 8880184; //噩梦石头人
		} else {
			mobid = 8880164; //路西德之花
		}
		var modified = em.newMonsterStats();
		var mob = em.getMonster(mobid);
		modified.setOHp(4000000);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(position, 37));
	}
	var time = random.nextInt(3) + 2;
	addMonsterTask = em.schedule("addFirstMonsters", 1000 * 5 * time, eim);
	//eim.showEffect("当心 - 路西德处于暴怒中 - 将召唤她的部下了 请注意 注意 注意 ");
	mapForMob.startMapEffect("当心 - 路西德处于暴怒中 - 将召唤她的部下了 请注意 注意 注意", 5120124);
}

//第一阶段
function addSecondMonsters(eim) {
	var random = new java.util.Random();
	var count = random.nextInt(4) + 2;
	var mapForMob = eim.getMapInstance(450004250);
	for (var i = 0; i < count; i++) {
		var mobid = 8880184;
		var modified = em.newMonsterStats();
		var mob = em.getMonster(mobid);
		modified.setOHp(4000000);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		mapForMob.spawnLucid2(mob);
	}
	var time = random.nextInt(4) + 2;
	addMonsterTask = em.schedule("addSecondMonsters", 1000 * 5 * time, eim);
	// mapForMob.startMapEffect("当心 - 路西德处于暴怒中 - 将召唤她的部下了 请注意 注意 注意 ", 5120161,-1);
	//eim.showEffect("当心 - 路西德处于暴怒中 - 将召唤她的部下了 请注意 注意 注意 ");
	mapForMob.startMapEffect("当心 - 路西德处于暴怒中 - 将召唤她的部下了 请注意 注意 注意", 5120124);
}

function cancelButterfly() {
	if (butterflyTask != null) {
		butterflyTask.cancel(true);
		butterflyTask = null;
	}
}

//蝴蝶
function doButterfly(eim) {
	if (em.getProperty("state").equals("1")) {
		var mapForMob = eim.getMapInstance(450004150);
		if (mapForMob != null) {
			mapForMob.doButterfly(true);
		}
	} else if (em.getProperty("state").equals("2")) {
		var map2 = eim.getMapInstance(450004250);
		if (map2 != null) {
			map2.doButterfly(false);
		}
	}
	butterflyTask = em.schedule("doButterfly", 5000, eim);
}
