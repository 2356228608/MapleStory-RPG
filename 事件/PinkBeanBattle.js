/*  This is mada by nana    
 *  This source is made by bms Team
 *  功能：品克缤
 *  @Author nana 
 */
  var item = Array(1082695,1004809,1004808,1004811,1442274,1004810,1082697,1004812,1082696,1332279,1082699,1082698,1102944,1342104,1232113,1362140,1242122,1242121,1302343,1053065,1053064,1053067,1053066,1582023,1252098,1152200,1492235,1152198,1152199,1152196,1552119,1152197,1102943,1102942,1102941,1053063,1102940,1302219,1402259,1412181,1452257,1312203,1362063,1432218,1222113,1322255,1073159,1073158,1522143,1532150,1073161,1073160,1142505,1073162,1472265,1382265,1322156,1262039,1422189,1462243,1482221,1542117,1372228,1212120,1102172,1122080,1212011,1212012,1222012,1232011,1242012,1242012,1302081,1312037,1322060,1332073,1332074,1342011,1362016,1382049,1382050,1382051,1382052,1382057,1402046,1412033,1422037,1432047,1442063,1442063,1462050,1472068,1482023,1492023,1522015,1532015,1005102,1003450,1142008,1122106,1802338
  ); //传说系列装备
 

        function init() {
            em.setProperty("leader", "true");
            em.setProperty("state", "0");
        }

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("PinkBeanBattle");
    eim.setInstanceMap(270050100).resetFully();
    eim.setInstanceMap(270050200).resetFully();
    em.setProperty("state", "1");
    eim.getMapFactory().getMap(270050100).killAllMonsters(true);
    eim.setProperty("summon", "0");
    eim.startEventTimer(3600000); // 1 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactoryMap(270050300);
    player.changeMap(map, map.getPortal(0));
    player.restReviveCount();
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 270050300);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 270050100 && mapid != 270050200) {
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


/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
}

function monsterValue(eim, mobId) {
	switch (mobId) {
        case 8820001:
	var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        var pIter = eim.getPlayers().iterator();
        while (pIter.hasNext()) {
            var chr = pIter.next();
            var map = eim.getMapFactory().getMap(270050100);
            var randitem;
			for(var i=0;i<8;i++){
				 randitem = Math.floor(Math.random() * item.length);
				 map.spawnAutoDrop(item[randitem], chr.getPosition());
			}
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
    if (eim.disposeIfPlayerBelow(100, 270050300)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.getMapFactory().getMap(270050100).killAllMonsters(false);
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