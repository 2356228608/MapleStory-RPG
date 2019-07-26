/*  This is mada BMS
 *  This source is made by 娜娜
 *  脚本功能：因贝尔诺_普通[简单] 
 706041300 - 因贝尔诺_普通
 *  
 */
var mobid = Array(9402097, 9402097, 9402097, 9402097);
var mapId = 706041300;

/*
 掉落的物品
 */
var item = Array(1482085, 1402096, 1422067, 1412066, 1452112, 1342035, 1332131, 1492086, 1522017, 1532017, 1472123, 1382105, 1312066, 1462100, 1322097, 1372085, 1302153, 1442117, 1432087); //装备+玩具
/*
 掉落的物品      数量
 */
var yp = Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1); //



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
    var eim = em.newInstance("因贝尔诺_普通");
    var map = eim.setInstanceMap(mapId);//867114230
    map.resetFully();
    eim.getMapFactory().getMap(mapId).killAllMonsters(false);
    var mob = em.getMonster(9402110);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(11, 128));
    eim.startEventTimer(1000 * 60 * 90); //90min 
    //eim.schedule("summonMob", 2000);
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
    var map = eim.getMapFactoryMap(867114230);
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
    if (mapid != 706041300) {
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
        case 706041300:
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
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function summonMob(eim) {
    var map;
    map = eim.getMapInstance(0);
    var mob1 = em.getMonster(mobid[0]);
    mob1.setStance(2);
    var mob2 = em.getMonster(mobid[1]);
    var mob3 = em.getMonster(mobid[2]);
    var mob4 = em.getMonster(mobid[3]);
    mob4.setStance(2);
    if (map.getNumMonsters() < 100) {
        map.spawnMonsterWithEffect(mob1, -2, new java.awt.Point(11, 128));
        map.spawnMonsterWithEffect(mob2, -2, new java.awt.Point(11, 128));
        map.spawnMonsterWithEffect(mob3, -2, new java.awt.Point(11, 128));
        map.spawnMonsterWithEffect(mob4, -2, new java.awt.Point(11, 128));
    }
    if (em.getProperty("state").equals("1")) {
        eim.schedule("summonMob", 6000);
    }
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
function monsterDrop(eim, player, mob) {
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
            var toDrop = new Packages.client.inventory.Item(4002000, 0, 1);
            /*for (var i = 0; i < yp[randyp]; i++) {
             //map.spawnItemDrop(chr, chr, toDrop, chr.getPosition(), true, false);
             map.spawnAutoDrop(4002002,chr.getPosition());
             }*/
            var randx = Math.floor((Math.random() * 2));
            var xwsj = Math.floor((Math.random() * 20)) + 50;
            if (randx == 1) {
                for (var i = 0; i < yp[randyp]; i++) {
                    map.spawnAutoDrop(item[randitem], chr.getPosition());
                }
                map.broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(5, "恭喜，击败了因贝尔诺，获得了" + yp[randyp] + "张邮票和130装备奖励"));
            } else {
            }
        }
    }
}

