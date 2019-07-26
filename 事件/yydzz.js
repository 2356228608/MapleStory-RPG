var mapId = 915020001;

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
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    var mob = em.getMonster(9601047);//披着青羊皮的狼
    var hprand = 9999999999;
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(100100000);
    overrideStats.setOMp(200000000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(51,120)); //刷出这个怪物
    var mob = em.getMonster(9601047);//披着白羊皮的狼
    var hprand = 999999999;
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(100000000);
    overrideStats.setOMp(2000000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-409,120)); //刷出这个怪物
    eim.schedule("timeout", 300 * 1000);//10分钟 
    eim.schedule("beginQuest", 1000);
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

function timeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 915020001) {
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

function clearPQ(eim) {
    end(eim);
}

function end(eim) {
    var map = eim.getMapInstance(915020001);
    map.broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(1, "副本时间到了,你退出了副本"));
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function monsterSpawn(eim) {
	 var map = eim.getMapInstance(915020001);
         if (map.getAllMonstersThreadsafe().size() <= 80) {
         var overrideStats = Packages.server.life.OverrideMonsterStats();
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(9601047);//怪物
         var hprand = 28888;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(30000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(51,120)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(9601042);//怪物
         var hprand = 25555;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(3000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-409,120)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(9601043);//怪物
         var hprand = 28555;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(3000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(51,120)); //刷出这个怪物
         }
         for (var i = 0; i < 4; i++) {
         var mob = em.getMonster(9601044);//怪物
         var hprand = 28555;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(3000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-409,120)); //刷出这个怪物
         }
	 eim.schedule("monsterSpawn", 10000);
	 map.broadcastMessage(Packages.tools.packet.CField.getClock(10));
         em.getMapFactory().getMap(915020001).startSimpleMapEffect("羊羊大军在10秒后到达,请火速消灭,当前来袭大军数量" + map.getAllMonstersThreadsafe().size() + "", 5120037);
         } else if (map.getAllMonstersThreadsafe().size() > 80 && map.getAllMonstersThreadsafe().size() < 100 ) {
         var overrideStats = Packages.server.life.OverrideMonsterStats();
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(9601045);//怪物
         var hprand = 1055555;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(3000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(51,120)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(9601046);//怪物
         var hprand = 1055555;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(3000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-409,120)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(9601046);//怪物
         var hprand = 1055555;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(3000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(51,120)); //刷出这个怪物
         }
         for (var i = 0; i < 4; i++) {
         var mob = em.getMonster(9601045);//怪物
         var hprand = 1055555;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(3000000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-409,120)); //刷出这个怪物
         }       
	 eim.schedule("monsterSpawn", 10000);
	 map.broadcastMessage(Packages.tools.packet.CField.getClock(10));
         em.getMapFactory().getMap(915020001).startSimpleMapEffect("当前地图处于告急状态,请加强火力防止怪物增加,当前来袭大军数量" + map.getAllMonstersThreadsafe().size() + "！超过100只怪物将会退出副本", 5120037);   
	 }else{      
         map.broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(1, "你已被包围，副本失败"));
         eim.disposeIfPlayerBelow(100, 910000000);//退出副本
         em.setProperty("state", "0");
         em.setProperty("leader", "true");
         }
         }
function beginQuest(eim) {
	var map = eim.getMapInstance(915020001);
        em.getMapFactory().getMap(915020001).startSimpleMapEffect("此副本总时间为5分钟,怪物大军在10秒后到达！请火速消灭", 5120037);
	eim.schedule("monsterSpawn", 10000);
	map.broadcastMessage(Packages.tools.packet.CField.getClock(10));
}
function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}

function monsterDrop(eim, player, mob) {}