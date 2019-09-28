﻿/*  This is mada by nana    
 *  This source is made by bms Team
 *  功能：麦格纳斯[普通] Level:130  NORMAL
 *  401060200 - 暴君城堡 - 暴君之王座
 *  @Author nana 
 */

//自定义复活次数
//var reviveCount = 5;

        function init() {
            em.setProperty("leader", "true");
            em.setProperty("state", "0");
        }

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("Boss_暴君城堡_麦格纳斯_简单");
    var map = eim.setInstanceMap(401060399);
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(9303100);
    //mob.getStats().setChange(true);
    //mob.changeLevel(200);
    //mob.getChangedStats().setOHp(10000000000);
    //mob.setHp(10000000000);
	//mob.setMp(10000000000);
    eim.registerMonster(mob);
    eim.setProperty("HPstate", "1");
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1860, -1450));
    eim.startEventTimer(3600000); // 1 hr
    eim.schedule("summonFall", 5000);
    //eim.schedule("checkChrHP", 2000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    //player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
    //player.setPQLog("麦格纳斯");
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(401060000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 401060000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 401060200) {
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
        case 8880002:
            /*
             for (i = 0; i < eim.getPlayers().size(); i++) {
             eim.getPlayers().get(i).setPQLog("麦格纳斯");
             }
             */
            break;
    }
	var teamMembers = eim.getPlayerCount();
	eim.getPlayers().forEach(function (player) {
		player.updateAchievement(669, 0, "mob_kill", 1, 10);
		player.updateAchievement(670, 0, "mob_kill", 1, 100);
		player.updateAchievement(671, 0, "mob_kill", 1, 1000);
		player.updateAchievement(672, 0, "mob_kill", 1, 1000);
	});
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
    if (eim.disposeIfPlayerBelow(100, 401060000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.setProperty("HPstate", "-1");
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
        var mob = map.getMonsterById(8880010);
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