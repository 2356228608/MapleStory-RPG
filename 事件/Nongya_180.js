/*
 * 浓姬 - 120级简单模式
 */
//# 死亡次数
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Hillah_120");
    var map = eim.setInstanceMap(811000500); //设置活动脚本的地图
    map.resetFully(false); //重置地图
    map.setSpawns(false);
    var mob = em.getMonster(9450066); //浓姬 - 180级
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1, -205));
    eim.startEventTimer(45 * 60 * 1000);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.setReviveCount(reviveCount);
}

function playerRevive(eim, player) {
    if (player.getReviveCount() <= 0) {
        var map = eim.getMapInstance(211042300);
        player.changeMap(map, map.getPortal(0));
        player.addHP(50);
        return true;
    } else {
        var map = eim.getMapFactory().getMap(262031310);
        player.changeMap(map, map.getPortal(0));
        player.addHP(50);
    }
    return true;
}

function changedMap(eim, player, mapid) {
    if (mapid < 262031300 || mapid > 262031310) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 262030000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
    eim.restartEventTimer(1 * 60 * 1000);
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}