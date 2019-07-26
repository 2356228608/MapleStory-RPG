﻿var mapId = 401100100;
var item = Array(1102450); //稀有点装
var yp = Array(1); //邮票

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();

    var mob = em.getMonster(9300306);
    var overrideStats = em.newMonsterStats();
    var hprand = Math.floor(Math.random() * 4999999999);
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(2147483647);
    overrideStats.setOMp(200000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(160, 182));

    eim.startEventTimer(72000000); // 4 hrs
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 401100100) {
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
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        var pIter = eim.getPlayers().iterator();
        while (pIter.hasNext()) {
            var chr = pIter.next();
            //var winner = eim.getPlayers().get(0);
            var map = eim.getMapFactory().getMap(mapId);
            var randitem = Math.floor(Math.random() * item.length);
            var randyp = Math.floor(Math.random() * yp.length);
            var toDrop = new Packages.client.inventory.Item(4002002, 0, 1);
            for (var i = 0; i < yp[randyp]; i++) {
                //map.spawnItemDrop(chr, chr, toDrop, chr.getPosition(), true, false);
                map.spawnAutoDrop(4002002, chr.getPosition());
            }
            var randx = Math.floor((Math.random() * 2));
            var xwsj = Math.floor((Math.random() * 20)) + 30;
            //toDrop = new Packages.client.inventory.Item(item[randitem], 0, 1);
            //map.spawnItemDrop(winner, winner, toDrop, winner.getPosition(), true, false);
            map.spawnAutoDrop(item[randitem], chr.getPosition());
            // eim.broadcastPlayerMsg(5, "[●ω●提示]：恭喜，成功挑战心魔，获得了" + yp[randyp] + "张邮票和稀有点装奖励");
            cm.getPlayer().startMapTimeLimitTask(60, cm.getChannelServer().getMapFactory().getMap(910000000));
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
function monsterDrop(eim, player, mob) {}