﻿/*
 * Guild Quest 
 */

        var mapz = Array(0, 100, 200, 300, 301, 400, 401, 410, 420, 430, 431, 440, 500, 501, 502, 600, 610, 611, 620, 630, 631, 640, 641, 700, 800, 900, 1000, 1100, 1101);
var minPlayers = 5;
function init() {
    em.setProperty("started", "false");
    em.setProperty("state", "0");
    em.setProperty("guildid", "-1");
}

function monsterValue(eim, mobId) {
    return -1;
}

function setup(z) {
    setup();
}

function setup() {
//	em.setProperty("guildid", "-1");
    em.setProperty("started", "false");
    em.setProperty("state", "0");

    var eim = em.getInstance("GuildQuest");
    eim.setProperty("canEnter", "false");
    //shuffle reactors in two maps for stage 3
    var mapfact = eim.getMapFactory();

    for (var i = 0; i < mapz.length; i++) {
        var map = eim.setInstanceMap(990000000 + mapz[i]);
        if (map != null) {
            map.resetFully();
        }
    }
    mapfact.getMap(990000501).shuffleReactors();
    mapfact.getMap(990000502).shuffleReactors();

    //force no-respawn on certain map reactors
    mapfact.getMap(990000611).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000620).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000631).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000641).getReactorByName("").setDelay(-1);

    mapfact.getMap(990000000).getPortal(5).setScriptName("guildwaitingenter");
    eim.startEventTimer(1000 * 60 * 3);//1000 * 60); // 3 minutes
    eim.setProperty("entryTimestamp", java.lang.System.currentTimeMillis());
    return eim;
}

function scheduledTimeout(eim) {

    if (em.getProperty("state").equals("0")) {
        em.setProperty("state", "1");
        //java.lang.System.out.println("这里执行了。2");
        if (!disposePlayerBelow(eim, minPlayers, 990001100, "你至少需要" + (minPlayers + 1) + "名队员才可以开始家族任务.")) {
            //java.lang.System.out.println("这里执行了。3");
            var iter = eim.getPlayers().iterator();
            while (iter.hasNext()) {
                iter.next().dropMessage(5, "家族任务已经开始，请通过下方的传送点进入第一关卡！");
            }
            em.setProperty("started", "true");
            eim.setProperty("canEnter", "true");
            eim.restartEventTimer(3600000 * 4); //1hrs
        } else {
            //	java.lang.System.out.println("你悲剧了。");
        }
    } else if (em.getProperty("state").equals("1")) {

        disposePlayerBelow(eim, 100, 990001100, "真遗憾，任务时间已经超过了。");
    } else if (em.getProperty("state").equals("2")) {
        finish(eim);

    }
}

function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(990000000);
    player.changeMap(map, map.getPortal(0));
    player.dropMessage(6, "[家族任务] : 请在该地图等候与家族成员汇合，倒计时完成后可正式进入挑战。");
}

function playerRevive(eim, player) {
    return false;
}

function playerDead(eim, player) {}

function disposePlayerBelow(eim, size, mapid, msg) {
    var playerSize = eim.getPlayerCount();
    if (playerSize <= size) {
        if (msg.length > 0)
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).dropMessage(1, msg);
            }
        em.setProperty("started", "false");
        em.setProperty("guildid", "-1");
    }

    return eim.disposeIfPlayerBelow(size, mapid)

}


function changedMap(eim, player, mapid) {
    if (mapid < 990000000 || mapid > 990002000) {
        eim.unregisterPlayer(player);
        if (player.getName().equals(eim.getProperty("leader"))) { //check for party leader
            disposePlayerBelow(eim, 100, 990001100, "队长已经离开，其余的队员将会被传送出去。");
        } else {
            if (disposePlayerBelow(eim, 0, 0, "")) {
                em.setProperty("started", "false");
            }
        }
    }
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    if (player.getName().equals(eim.getProperty("leader"))) { //check for party leader
        //boot all players and end
        disposePlayerBelow(eim, 100, 990001100, "队长掉线，队伍队员也将被传送出去。");
    } else {
        if (!em.getProperty("state").equals("0")) {
            disposePlayerBelow(eim, minPlayers, 990001100, "队员人数不足，无法继续完成家族任务。");
        }
    }
}

function leftParty(eim, player) { //ignore for GQ
}

function disbandParty(eim) { //ignore for GQ
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (!em.getProperty("state").equals("0")) {
        disposePlayerBelow(eim, minPlayers, 990001100, "队员人数不足，无法继续完成家族任务。");
    }
}

function clearPQ(eim) {
    var iter = eim.getPlayers().iterator();
    var bonusMap = eim.getMapFactory().getMap(990001000);

    bonusMap.resetReactors();

    while (iter.hasNext()) { // Time is automatically processed
        var chr = iter.next();
        chr.changeMap(bonusMap, bonusMap.getPortal(0));
        chr.modifyCSPoints(1, 1000, true);
        chr.dropMessage(6, "你获得了1000点卷通关奖励，感谢你为家族付出的辛勤劳动。");
        java.lang.System.out.println(1);
    }
    em.setProperty("state", "2");
    eim.restartEventTimer(120000); //2 mins for teh lulz
}

function finish(eim) {
    disposePlayerBelow(eim, 100, 990001100, "");
}

function allMonstersDead(eim) {
    //do nothing; GQ has nothing to do with monster killing
}

function cancelSchedule() {}

function timeOut() {}