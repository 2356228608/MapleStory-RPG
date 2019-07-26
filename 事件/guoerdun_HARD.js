/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：敦凯尔-进阶
 *  地图ID: //'黎曼 : 临尽之地'450012210
 *  @Author 娜娜 
 */

var Mapid;
var modified;
var bossmapid=450012210;
var addMonsterTask;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("guoerdun_HARD");
	var map = eim.setInstanceMap(bossmapid);
        map.resetFully();
        map.killAllMonsters(true);
		var mob = em.getMonster(8645039);
		var modified = em.newMonsterStats();
		modified.setOHp(em.Mob_BOSS_HP2_Baolixiong());
		modified.setOMp(mob.getMobMaxMp());
		modified.setOExp(2000000000);
		mob.getStats().setLevel(250);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(561, 29));
	
		//var mob1 = em.getMonster(8644612);
		//eim.registerMonster(mob1);
		//map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(561, 29));

	
		//map.spawnNpc(9400154, new java.awt.Point(1551,47));


	addFirstMonsters(eim);
    eim.startEventTimer(1000 * 60 * 30); //10 min
    return eim;
}

//第一阶段
function addFirstMonsters(eim) {
    var random = new java.util.Random();
    var count = random.nextInt(2) + 2;
    var mapForMob = eim.getMapInstance(bossmapid);
    for (var i = 0; i < count; i++) {
        var position = random.nextInt(100);
        var mobid = 0;
        if (random.nextInt(100) > 50) {
            mobid = 8644618;//虚空爪牙
        } else {
            mobid = 8644619;//黄昏爪牙
        }
        var modified = em.newMonsterStats();
        var mob = em.getMonster(mobid);
        modified.setOHp(40000000);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(position, 29));
    }
    var time = random.nextInt(3) + 2;
    addMonsterTask = em.schedule("addFirstMonsters", 1000 * 5 * time, eim);
    mapForMob.startMapEffect("当心 - 将召唤她的部下了 请注意 注意 注意.", 5120124);
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    map.startMapEffect("敦凯尔:已经好久没有人来寻si了,你是第一人！" ,5120161);
    player.dropMessage(6, "[敦凯尔-进阶] 已开始挑战。");
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    
	if(mapid == bossmapid){
		Mapid = mapid;
		eim.schedule("end", 1000 * 0);
		if (addMonsterTask != null) {
                //addMonsterTask.cancel(true);
                //addMonsterTask = null;
            }
            //addSecondMonsters(eim);
    }else{
		eim.worldSpouseMessage(0x24, "[敦凯尔-进阶] 已退出挑战,副本空闲,强者可以去挑战。");
		eim.unregisterPlayer(player);
		if (eim.getPlayerCount() <= 0) {
			eim.disposeIfPlayerBelow(100, 910000000);
		}
		if (addMonsterTask != null) {
            addMonsterTask.cancel(true);
            addMonsterTask = null;
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobid) {
    switch (mobid) {
		case 8645039:
			var map = eim.getMapInstance(bossmapid);
			map.spawnNpc(3003533, new java.awt.Point(26, 29));
			map.startMapEffect("敦凯尔已击败,请和NPC对话领取奖励吧.", 5120161);
			eim.broadcastPlayerMsg(6, "敦凯尔已击败,请和NPC对话领取奖励吧.。");
			map.killAllMonsters(true);
			if (addMonsterTask != null) {
				addMonsterTask.cancel(true);
				addMonsterTask = null;
			}
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
    eim.broadcastPlayerMsg(6, "嘿~，不要再打了！！！领取你应得的奖励吧。");
    }
}


function end(eim){
	var map = eim.getMapFactoryMap(Mapid);
    //map.startMapEffect("危险快躲到魔法阵里来" ,5121052);
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