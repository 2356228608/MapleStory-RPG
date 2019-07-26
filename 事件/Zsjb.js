/* 
 * QQ706780763
 */
        var item = Array(1132110, 1152068, 1003364, 1102322, 1082391, 1052405, 1072610, 1302192, 1312098, 1322138, 1332168, 1372117, 1382142, 1402129, 1412087, 1422089, 1432117, 1442154, 1452147, 1462136, 1472159, 1482120, 1492119, 1522055, 1532059); //传说系列装备
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Zsjb");
    var map = eim.setInstanceMap(240093310);
    map.resetFully();
    eim.getMapFactory().getMap(240093310).killAllMonsters(false);
    var mob = em.getMonster(9601040);
    var hprand = 600;
    var modified = em.newMonsterStats();
    modified.setOHp(hprand);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(161, 97));
    eim.startEventTimer(1000 * 60 * 5); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    map.startMapEffect("[金币帝国] 在规定时间内用普通攻击杀死怪物!.", 5121027);
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 240093310) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
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
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    eim.getMapFactory().getMap(240093310).killAllMonsters(false);
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
            var map = eim.getMapFactory().getMap(240093310);
            var randitem = Math.floor(Math.random() * item.length);
            map.spawnAutoDrop(item[randitem], 10);//chr.getPosition()

        }
    }
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}

function monsterDrop(eim, player, mob) {}