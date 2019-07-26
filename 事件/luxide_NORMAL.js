/*  This is mada   
 *  This source is made by 
 *  脚本功能：露西德[普通] 
 800024500 - 乌鸦的试炼  940200213
 *  
 */
 var item = Array(1082695,1004809,1004808,1004811,1442274,1004810,1082697,1004812,1082696,1332279,1082699,1082698,1102944,1342104,1232113,1362140,1242122,1242121,1302343,1053065,1053064,1053067,1053066,1582023,1252098,1152200,1492235,1152198,1152199,1152196,1552119,1152197,1102943,1102942,1102941,1053063,1102940,1302219,1402259,1412181,1452257,1312203,1362063,1432218,1222113,1322255,1073159,1073158,1522143,1532150,1073161,1073160,1142505,1073162,1472265,1382265,1322156,1262039,1422189,1462243,1482221,1542117,1372228,1212120); //传说系列装备
//自定义复活次数
var reviveCount = 2;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("PQLog", "false");
    em.setProperty("state", "1");
    var eim = em.newInstance("luxide_NORMAL");
    var map = eim.setInstanceMap(706041150);
    map.resetFully();
	var mob = em.getMonster(8880150);
            var stats = mob.getStats();
            var ostats = em.newMonsterStats();
            ostats.setOHp(58888888888);
            ostats.setOMp(8888888);
            stats.setPhysicalAttack(10000000);
            stats.setMagicAttack(10000000);
            stats.setLevel(250);
            mob.setOverrideStats(ostats);
            eim.registerMonster(mob);
            eim.broadcastPlayerMsg(5, "路西德：你妈叫你回去睡觉了!");
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-57, 128));
    eim.startEventTimer(1000 * 60 * 90); //90min 
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    //player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(910000000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

/*
 function scheduledTimeout(eim) {
 eim.disposeIfPlayerBelow(100, 910000000);
 em.setProperty("state", "0");
 em.setProperty("leader", "true");
 }*/

function changedMap(eim, player, mapid) {
    if (mapid != 706041150) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 9400080:
            for (i = 0; i < eim.getPlayers().size(); i++) {
                eim.getPlayers().get(i).openNpc(9900002, "BOSS奖励结算");
                if (!eim.getPlayers().get(i).isAdmin()) {
                    eim.getPlayers().get(i).setPQLog("" + em.getProperty("PQLog") + "");
                }
            }
            eim.startEventTimer(1 * 60 * 1000);
            break;
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 910000000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.setProperty("HPstate", "-1");
	eim.getMapFactory().getMap(706041150).killAllMonsters(false);
    em.setProperty("state", "2");
    /* var state = em.getProperty("state");
     if (state.equals("1")) {
     em.setProperty("state", "2");
     } else if (state.equals("2")) {
     em.setProperty("state", "3");
     }*/
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        var pIter = eim.getPlayers().iterator();
        while (pIter.hasNext()) {
            var chr = pIter.next();
            var map = eim.getMapFactory().getMap(706041150);
            var randitem = Math.floor(Math.random() * item.length);
            map.spawnAutoDrop(item[randitem], chr.getPosition());//chr.getPosition()
			//map.spawnAutoDrop(item[randitem], chr.getPosition());//chr.getPosition()
        }
    }
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function summonFall(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 4500;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(2 * state + 1, 1, 8);
        eim.schedule("summonFall", time);
    }
}

function checkChrHP(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(9400080);
        if (mob != null) {
            for (i = 0; i < eim.getPlayers().size(); i++) {
                mob.checkMobZone(eim.getPlayers().get(i), true);
            }
            eim.schedule("checkChrHP", 2000);
        }
    }
}
function pickUpItem(eim, player, itemID) {
}
function monsterDrop(eim) {}