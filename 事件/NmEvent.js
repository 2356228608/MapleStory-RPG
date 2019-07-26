/*
 副本：	牛魔王
 */
        var mobid;
var mob;
var stats;
var modified;
var MaxRandom;
var setupTask;
var ostats;

var itemList = Array(
        Array(4001006, 600), //埃苏莱布斯币
        Array(4033287, 500), //宝物地图
        Array(4033288, 500), //古代宝物的地图
        Array(5062500, 500), //大师附加神奇魔方
        Array(2049124, 100), //正向混沌卷轴
        Array(4033356, 300), //正义火种
        Array(1432086, 300), // - 狮心长枪, 300), // - (无描述)
        Array(1302152, 300), // - 狮心弯刀, 300), // - (无描述)
        Array(1522018, 300), // - 龙翼巨弩枪, 300), // - (无描述)
        Array(1232014, 300), // - 狮心痛苦命运, 300), // - (无描述)
        Array(1322096, 300), // - 狮心震雷钉, 300), // - (无描述)
        Array(1402095, 300), // - 狮心战斗弯刀, 300), // - (无描述)
        Array(1372084, 300), // - 龙尾精灵短杖, 300), // - (无描述)
        Array(1382104, 300), // - 龙尾战斗长杖, 300), // - (无描述)
        Array(1212014, 300), // - 龙尾黑甲凶灵, 300), // - (无描述)
        Array(1452111, 300), // - 鹰翼组合弓, 300), // - (无描述)
        Array(1462099, 300), // - 鹰翼重弩, 300), // - (无描述)
        Array(1242042, 300), // - 渡鸦之魂女王意志之剑, 300), // - (无描述)
        Array(1332130, 300), // - 渡鸦之魂短刀, 300), // - (无描述)
        Array(1362019, 300), // - 渡鸦之魂真红手杖, 300), // - (无描述)
        Array(1482084, 300), // - 鲨齿巨鹰爪, 300), // - (无描述)
        Array(1492085, 300), // - 鲨齿锐利手铳, 300), // - (无描述)
        Array(1532018, 300), // - 鲨齿火焰炮, 300), // - (无描述)
        Array(1222014, 300), // - 鲨齿灵魂汲取者, 300), // - (无描述)
        Array(1242014, 300), // - 鲨齿女王意志之剑, 300), // - (无描述)
        Array(1052314, 300), // - 狮心战斗锁子甲, 300), // - (无描述)
        Array(1052315, 300), // - 龙尾法师长袍, 300), // - (无描述)
        Array(1052316, 300), // - 鹰翼哨兵服, 300), // - (无描述)
        Array(1052317, 300), // - 渡鸦之魂追踪者盔甲, 300), // - (无描述)
        Array(1052318, 300), // - 鲨齿船长外套, 300), // - (无描述)
        Array(1082296, 300), // - 龙尾法师手套, 300), // - (无描述)
        Array(1082297, 300), // - 鹰翼哨兵手套, 300), // - (无描述)
        Array(1082298, 300), // - 渡鸦之魂追踪者手套, 300), // - (无描述)
        Array(1082299, 300), // - 鲨齿船长手套, 300), // - (无描述)
        Array(1082295, 300), // - 狮心战斗护腕, 300), // - (无描述)
        Array(1152110, 300), // - 龙尾法师护肩, 300), // - (无描述)
        Array(1152111, 300), // - 鹰翼哨兵护肩, 300), // - (无描述)
        Array(1152112, 300), // - 渡鸦之魂猎人护肩, 300), // - (无描述)
        Array(1152113, 300), // - 鲨齿船长护肩, 300), // - (无描述)
        Array(1152108, 300), // - 狮心战斗护肩, 300), // - (无描述)
        Array(1102275, 300), // - 狮心战斗披风, 300), // - (无描述)
        Array(1102276, 300), // - 龙尾法师披风, 300), // - (无描述)
        Array(1102277, 300), // - 鹰翼哨兵披风, 300), // - (无描述)
        Array(1102278, 300), // - 渡鸦之魂猎人披风, 300), // - (无描述)
        Array(1102279, 300), // - 鲨齿船长披风, 300), // - (无描述)
        Array(1003172, 300), // - 狮心战斗头盔, 300), // - (无描述)
        Array(1003173, 300), // - 龙尾法师帽子, 300), // - (无描述)
        Array(1003174, 300), // - 鹰翼哨兵便帽, 300), // - (无描述)
        Array(1003175, 300), // - 渡鸦之魂追踪者帽, 300), // - (无描述)
        Array(1003176, 300), // - 鲨齿船长帽, 300), // - (无描述)
        Array(1072485, 300), // - 狮心战斗鞋, 300), // - (无描述)
        Array(1072486, 300), // - 龙尾法师鞋, 300), // - (无描述)
        Array(1072487, 300), // - 鹰翼哨兵鞋, 300), // - (无描述)
        Array(1072488, 300), // - 渡鸦之魂追踪者鞋, 300), // - (无描述)
        Array(1072489, 300), // - 鲨齿船长鞋, 300), // - (无描述)
        Array(2049323, 300), //高级装备强化卷
        Array(1122122, 50), //真?觉醒冒险之心
        Array(1122123, 50), //真?觉醒冒险之心
        Array(1122124, 50), //真?觉醒冒险之心
        Array(1122125, 50), //真?觉醒冒险之心
        Array(1122126, 50), //真?觉醒冒险之心
        Array(2049752, 300), //S级潜能卷轴 30%
        Array(1122149, 100), //烈日吊坠
        Array(1122148, 100), //烈日吊坠
        Array(1132164, 100), //赫里希安精锐战士腰带
        Array(1132165, 100), //赫里希安精锐法师腰带
        Array(1132166, 100), //赫里希安精锐弓箭手腰带
        Array(1132167, 100), //赫里希安精锐飞侠腰带
        Array(1132168, 100), //赫里希安精锐海盗腰带
        Array(1132169, 50), //诺巴西亚戴斯腰带
        Array(1132170, 50), //诺巴赫尔梅斯腰带
        Array(1132171, 50), //诺巴凯伦腰带
        Array(1132172, 50), //诺巴利卡昂腰带
        Array(1132173, 50), //诺巴阿尔泰腰带
        Array(1132174, 10), //暴君西亚戴斯腰带
        Array(1132175, 10), //暴君赫尔梅斯腰带
        Array(1132176, 10), //暴君凯伦腰带
        Array(1132177, 10), //暴君利卡昂腰带
        Array(1132178, 10), //暴君阿尔泰腰带
        Array(1102471, 100), //赫里希安精锐战士披风
        Array(1102472, 100), //赫里希安精锐法师披风
        Array(1102473, 100), //赫里希安精锐弓箭手披风
        Array(1102474, 100), //赫里希安精锐飞侠披风
        Array(1102475, 100), //赫里希安精锐海盗披风
        Array(1102476, 50), //诺巴西亚戴斯披风
        Array(1102476, 50), //诺巴赫尔梅斯披风
        Array(1102476, 50), //诺巴凯伦披风
        Array(1102476, 50), //诺巴利卡昂披风
        Array(1102480, 50), //诺巴阿尔泰披风
        Array(1102481, 5), //暴君西亚戴斯披风
        Array(1102481, 5), //暴君赫尔梅斯披风
        Array(1102481, 5), //暴君凯伦披风
        Array(1102481, 5), //暴君利卡昂披风
        Array(1102481, 5) //暴君阿尔泰披风
        );
function init() {
    em.setProperty("state", "0");
}


function setup(level, leaderid) {
    var eim = em.newInstance("NmEvent");
    eim.setInstanceMap(105100300).resetPQ(level);
    var map = eim.setInstanceMap(105100300);
    map.resetFully();
    map.killAllMonsters(true);
    map.respawn(false);

    map = eim.setInstanceMap(105100301);
    map.resetFully();
    map.killAllMonsters(true);
    map.respawn(false);

    mobid = 6400006;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob1 = eim.getMapInstance(105100300);
    mapForMob1.spawnMonsterOnGroundBelow(mob, new java.awt.Point(64, -60));

    mobid = 6400006;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob2 = eim.getMapInstance(105100300);
    mapForMob2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(899, -110));


    mobid = 6400006;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob3 = eim.getMapInstance(105100300);
    mapForMob3.spawnMonsterOnGroundBelow(mob, new java.awt.Point(857, 11));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob4 = eim.getMapInstance(105100300);
    mapForMob4.spawnMonsterOnGroundBelow(mob, new java.awt.Point(857, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob5 = eim.getMapInstance(105100300);
    mapForMob5.spawnMonsterOnGroundBelow(mob, new java.awt.Point(753, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 32);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob6 = eim.getMapInstance(105100300);
    mapForMob6.spawnMonsterOnGroundBelow(mob, new java.awt.Point(603, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob7 = eim.getMapInstance(105100300);
    mapForMob7.spawnMonsterOnGroundBelow(mob, new java.awt.Point(550, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(105100300);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(500, 258));


    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 9);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(105100300);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(450, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 9);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob2 = eim.getMapInstance(105100300);
    mapForMob2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 9);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob3 = eim.getMapInstance(105100300);
    mapForMob3.spawnMonsterOnGroundBelow(mob, new java.awt.Point(350, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 9);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob4 = eim.getMapInstance(105100300);
    mapForMob4.spawnMonsterOnGroundBelow(mob, new java.awt.Point(300, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 9);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob5 = eim.getMapInstance(105100300);
    mapForMob5.spawnMonsterOnGroundBelow(mob, new java.awt.Point(250, 258));

    mobid = 8130100;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 90);
    modified.setOMp(mob.getMobMaxMp() * 9);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob6 = eim.getMapInstance(105100300);
    mapForMob6.spawnMonsterOnGroundBelow(mob, new java.awt.Point(200, 61));


    mobid = 9600006;//Boss
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 5000);
    modified.setOMp(mob.getMobMaxMp() * 9);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(105100301);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(434, 258));
    eim.startEventTimer(1000 * 60 * 60);
    em.setProperty("state", "1");
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[牛魔王副本] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}


function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[牛魔王副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 910000000);
}

function cancelSchedule() {
}


function playerDead(eim, player) {
}




function playerRevive(eim, player) {
    var map = em.getMapFactory().getMap(910000000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(100, 910000000);
    return false;
}


function changedMap(eim, player, mapid) {

    switch (mapid) {
        case 105100301: //牛魔王
            var map = eim.getMapInstance(105100301);
            map.startMapEffect("快 快 打死我的封印 将我解救出来 我将给予你们丰厚的宝物", 5120124);
            break;
    }

    switch (mapid) {
        case 105100300:
        case 105100301:

            return;
    }

    player.dropMessage(6, "[牛魔王副本] 已退出挑战。");
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
    if (eim.getPlayerCount() <= 1) {
        eim.disposeIfPlayerBelow(100, 910000000);
        if (setupTask != null)
            setupTask.cancel(true);
        eim.dispose();
    }
    return 0;
}


function monsterValue(eim, mobid) {

    if (mobid == 9600006) {//开始真的牛魔王
        var map = eim.getMapInstance(105100301);
        map.startMapEffect("我牛大力终于出来了 压制我这么久 为了回报你们 我将让你死的舒服一些", 5120124);
        mobid = 8830000;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(5000000000000);
        modified.setOMp(mob.getMobMaxMp() * 20);
        mob.getStats().setPhysicalAttack(499999999);//物理伤害
        mob.getStats().setMagicAttack(499999999);//魔攻伤害
        mob.getStats().setAcc(500000);
        mob.getStats().setPDRate(50);
        mob.getStats().setMDRate(50);
        mob.getStats().setLevel(200);
        mob.setOverrideStats(modified);
        mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性*/
        eim.registerMonster(mob);
        var mapForMob8 = eim.getMapInstance(105100301);
        mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(325, 258));

        mobid = 8830001;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1500000000);
        modified.setOMp(mob.getMobMaxMp() * 200);
        mob.getStats().setPhysicalAttack(499999999);//物理伤害
        mob.getStats().setMagicAttack(499999999);//魔攻伤害
        mob.getStats().setAcc(500000);
        mob.getStats().setPDRate(50);
        mob.getStats().setMDRate(50);
        mob.getStats().setLevel(200);
        mob.setOverrideStats(modified);
        mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性*/
        eim.registerMonster(mob);
        var mapForMob9 = eim.getMapInstance(105100301);
        mapForMob9.spawnMonsterOnGroundBelow(mob, new java.awt.Point(272, 258));

        mobid = 8830002;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(150000000000);
        modified.setOMp(mob.getMobMaxMp() * 200);
        mob.getStats().setPhysicalAttack(499999999);//物理伤害
        mob.getStats().setMagicAttack(499999999);//魔攻伤害
        mob.getStats().setAcc(500000);
        mob.getStats().setPDRate(50);
        mob.getStats().setMDRate(50);
        mob.getStats().setLevel(200);
        mob.setOverrideStats(modified);
        mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性*/
        eim.registerMonster(mob);
        var mapForMob10 = eim.getMapInstance(105100301);
        mapForMob10.spawnMonsterOnGroundBelow(mob, new java.awt.Point(351, 258));

        mobid = 8830002;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(150000000000);
        modified.setOMp(mob.getMobMaxMp() * 200);
        mob.getStats().setPhysicalAttack(499999999);//物理伤害
        mob.getStats().setMagicAttack(499999999);//魔攻伤害
        mob.getStats().setAcc(500000);
        mob.getStats().setPDRate(50);
        mob.getStats().setMDRate(50);
        mob.getStats().setLevel(200);
        mob.setOverrideStats(modified);
        mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性*/
        eim.registerMonster(mob);
        var mapForMob11 = eim.getMapInstance(105100301);
        mapForMob11.spawnMonsterOnGroundBelow(mob, new java.awt.Point(351, 258));
        return 0;
    }

    //var map = eim.getMapInstance(0);
    //map.killAllMonsters(true);
    if (mobid == 8830000) {
        if (em.getProperty("state").equals("1")) {
            eim.setProperty("giftcount", "0");
            //roll(eim);
            eim.startEventTimer(1000 * 60 * 5);
            //eim.broadcastPlayerMsg(6, "[牛魔王副本] 10秒后开启宝箱，掷点时请勿进行其他操作，并且需要在10秒钟内做出需求选择，否则将会被强制下线。");
            var map = eim.getMapInstance(105100301);
            map.spawnNpc(2470018, 4399, new java.awt.Point(177, -50));
            map.startMapEffect("[牛魔王副本] 牛魔王已被击败，请自己领奖励", 5120059);
            return;
        }
    }
    return 1;
}


function monsterKilled(eim, player, cp) {
}


function allMonstersDead(eim) {
}

function roll(eim) {
    MaxRandom = 0;
    var count = eim.getProperty("giftcount");
    var rewardPlayer = null;
    //第二次开始,统计上一次ROLL点玩家结果，并发放奖励。
    if ((count * 1) >= 1) {
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            var charName = eim.getPlayers().get(i).getName();
            var charId = eim.getPlayers().get(i).getId();
            //推送ROLL点信息
            for (var j = 0; j < eim.getPlayerCount(); j++) {
                var notice = "[牛魔王副本] 玩家 " + charName + " 掷出了 " + eim.getProperty("charid_" + charId) + "点";
                if ((eim.getProperty("charid_" + charId) * 1) == 0) {
                    notice = "[牛魔王副本] 玩家 " + charName + " 放弃了掷点";
                }
                eim.getPlayers().get(j).dropMessage(6, notice);
            }
            //不断重置最大值
            if ((eim.getProperty("charid_" + charId) * 1) > MaxRandom) {
                MaxRandom = eim.getProperty("charid_" + charId);
                //置换玩家名称
                eim.setProperty("rewardplayer", charName);
                //置换玩家ID
                eim.setProperty("rewardplayerid", charId);
            }
        }
        for (var j = 0; j < eim.getPlayerCount(); j++) {
            //操作NPC 发放奖励
            eim.getPlayers().get(j).openNpc(1052008, 1113); //奖励箱子
        }
    }
    for (var j = 0; j < eim.getPlayerCount(); j++) {
        //重置所有玩家ROLL点点数为零
        eim.setProperty("charid_" + eim.getPlayers().get(j).getId(), "0");
    }
    //次数+1
    eim.setProperty("giftcount", (count * 1 + 1));
    //重新读入次数
    count = eim.getProperty("giftcount");
    count = (count * 1);
    //退出战场
    if ((count * 1) > 10) {
        EndThisBattle(eim);
        return;
    }
    //创建几率
    var chance = Math.floor(Math.random() * 600);
    //最终物品列表
    var finalItemList = Array();
    for (var m = 0; m < itemList.length; m++) {
        if (itemList[m][1] >= chance) {
            finalItemList.push(itemList[m][0]);
        }
    }
    var currentItem = finalItemList[Math.floor(Math.random() * finalItemList.length)];
    switch (count) {
        case 8:
        case 9:
        case 10:
            currentItem = 4001006;
            break;
    }
    eim.setProperty("rewarditem", currentItem);
    //延迟10秒打开ROLL点NPC
    setupTask = em.schedule("openRollNpc", 1000 * 10 * 1, eim);
}

function openRollNpc(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(1052008, 1112);//roll
    }
    //10秒后继续ROLL点
    setupTask = em.schedule("roll", 1000 * 10 * 1, eim);
}

function EndThisBattle(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[牛魔王副本] 挑战成功！");
    }
    //em.broadcastYellowMsg("[牛魔王副本] 挑战结束");
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 910000000);
    if (setupTask != null)
        setupTask.cancel(true);
    eim.dispose();
}

function monsterDamaged(eim, player, mobid, damage) {
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
}


function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
}


function onMapLoad(eim, player) {
}

function monsterDrop(eim, player, mob) {
}