/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：至暗魔晶-普通
 *  地图ID: 月桥 : 虚空之眼'450009400
 *  @Author 娜娜 
 */

var Mapid;
var modified;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("zhianmojin_NORMAL");
	var map = eim.setInstanceMap(450009400);
        map.resetFully();
        map.killAllMonsters(true);
		var mob = em.getMonster(8644611);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-45, -157));
	
		var mob1 = em.getMonster(8644612);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-45, -157));

	
		//map.spawnNpc(9400154, new java.awt.Point(1551,47));



    eim.startEventTimer(1000 * 60 * 30); //10 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    map.startMapEffect("危险快躲到魔法阵里来！" ,5121052);
    player.dropMessage(6, "[至暗魔晶-普通] 已开始挑战。");
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if(mapid == 450009400){
		Mapid = mapid;
		eim.schedule("end", 1000 * 0);
    }else{
		//player.dropMessage(6, "[至暗魔晶] 已退出挑战。");
		eim.worldSpouseMessage(0x24, "[至暗魔晶] 已退出挑战,副本空闲,强者可以去挑战。");
		eim.unregisterPlayer(player);
		if (eim.getPlayerCount() <= 0) {
			eim.disposeIfPlayerBelow(100, 910000000);
		}
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 450004300);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobid) {
    switch (mobid) {
		case 8644611:
			var map = eim.getMapInstance(450009400);
			map.spawnNpc(3003533, new java.awt.Point(-372, -157));
			map.startMapEffect("至暗魔晶内核已击败,请和NPC对话领取奖励吧.", 5120161);
			eim.broadcastPlayerMsg(6, "至暗魔晶内核已击败,请和NPC对话领取奖励吧.。");
			map.killAllMonsters(true);
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
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
	var map = eim.getMapInstance(0);
    if (eim.getMapInstance(0).getAllMonstersThreadsafe().size() == 0) {
    eim.broadcastPlayerMsg(6, "嘿~，不要再打了~回到教室吧！！！领取你应得的奖励吧。");
    }
}


function end(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("危险快躲到魔法阵里来" ,5121052);
}

function end1(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("注意！该区域很快就会被毒液填满！！" ,5121052);
    map.spawnNpc(3003251, new java.awt.Point(-238,35));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}


function monsterDrop(eim, player, mob) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}