/* This is mada by 娜娜    
 *  This source is made by BMS Team
 *  功能：斯乌 BlackHeaven 普通模式
 *  @Author 娜娜 
 */

        var mobid = Array(8950003, 8950004, 8950005, 8950007);
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, partyid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Boss_黑色天堂_斯乌_困难");
    var map1 = eim.setInstanceMap(350060700);
    var map2 = eim.setInstanceMap(350060800);
    var map3 = eim.setInstanceMap(350060900);
    //map1.resetPQ(level);
    //map2.resetPQ(level);
    //map3.resetPQ(level);
    map1.resetFully(); //重置地图
    map2.resetFully(); //重置地图
    map3.resetFully(); //重置地图
    eim.setProperty("summom", "0");
    eim.startEventTimer(30 * 60 * 1000);
    eim.schedule("summonMob", 2000);
    //eim.schedule("summonFall", 4000);
    eim.setProperty("stop", "0");
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    //player.setReviveCount(reviveCount);
    player.dropMessage(6, "[斯乌副本] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 350060700 && mapid != 350060800 && mapid != 350060900) {
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

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 350060300);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    if (eim.getMapFactory().getMap(350060800).getCharactersSize() != 0) {
        for (i = 0; i < eim.getPlayers().size(); i++) {
            var map = eim.setInstanceMap(350060900);
            eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
        }
        var map1 = eim.setInstanceMap(350060800);
        map1.startMapEffect("这里好像有黑暗气息，好像什么人混在了这里？", 5120124);
    }
	if (mobId != 8950007)
		return 0;
	var teamMembers = eim.getPlayerCount();
	eim.getPlayers().forEach(function (player) {
		if (player.getMapId() != 350060900)
			return 0;
		player.updateAchievement(805, 0, "mob_kill", 1, 1);
		player.updateAchievement(806, 0, "mob_kill", 1, 10);
		player.updateAchievement(807, 0, "mob_kill", 1, 100);
		player.updateAchievement(808, 0, "mob_kill", 1, 100);
	});
	return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
        eim.schedule("warpNext", 6700);
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
        eim.schedule("warpNext", 4700);
    } else {
        eim.setProperty("stop", "1");
    }
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function warpNext(eim) {
    var map;
    var state = parseInt(em.getProperty("state"));
    for (i = 0; i < eim.getPlayers().size(); i++) {
        map = eim.getMapInstance(state - 1);
        eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
    }
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
        map.spawnMonsterWithEffect(mob1, -2, new java.awt.Point(-404, -400));
        map.spawnMonsterWithEffect(mob2, -2, new java.awt.Point(423, -400));
        map.spawnMonsterWithEffect(mob3, -2, new java.awt.Point(505, -230));
        map.spawnMonsterWithEffect(mob4, -2, new java.awt.Point(-514, -230));
    }
    if (em.getProperty("state").equals("1")) {
        eim.schedule("summonMob", 6000);
    }
}


function summonFall(eim) {
    var stop = parseInt(eim.getProperty("stop"));
    if (stop == 0) {
        var state = parseInt(em.getProperty("state"));
        var map = eim.getMapInstance(state - 1);
        map.obtacleFall(3, 0x30, 0x33);
        eim.schedule("summonFall", 5000);
    }
}
function pickUpItem(eim, player, itemID) {
}