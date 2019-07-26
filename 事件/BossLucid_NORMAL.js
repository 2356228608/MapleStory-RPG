/* 
 * 路西德！
 */
/*
 * 地图ID 
 //* 450004100 - 拉克兰 - 噩梦时间塔
 * 450004150 - 拉克兰 - 梦幻森林
 * 450004250 - 拉克兰 - 坍塌的时间塔
 * 450004500 - 拉克兰 - 噩梦时间塔(第三段)
 * 怪物
 * 8880140 - 梦中的路西德
 * 8880150 - 路西德
 * 8880167 - 最后的音乐盒
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
    var eim = em.newInstance("BossLucid_NORMAL");

	var map = eim.setInstanceMap(450004150);
        map.resetFully();
        map.killAllMonsters(true);
	

		var mob = em.getMonster(8880140);
		eim.registerMonster(mob);
		modified = em.newMonsterStats();
		modified.setOMp(mob.getMobMaxMp() * 15);
		modified.setOExp(mob.getMobExp() * 3);
		modified.setOHp(em.Mob_BOSS_HP2_luxide_HARD());//100万亿
		//modified.setOHp(540000000000* em.Mob_BOSS_HP2_luxide_HARD());//100万亿
		mob.setOverrideStats(modified);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(980, 47));
	
		var mob1 = em.getMonster(8880166);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(980, 47));
	
		var mob2 = em.getMonster(8880164);
		eim.registerMonster(mob2);
		map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(980, 47));
	
		map.spawnNpc(9400154, new java.awt.Point(1551,47));


    var map1 = eim.setInstanceMap(450004250);
    map1.resetFully();
    var mob = em.getMonster(8880150);
    mob.changeLevel(150);
    mob.setHp(2000000000);
    eim.registerMonster(mob);
    map1.spawnMonsterOnGroundBelow(mob, new java.awt.Point(786, -195));




    var map2 = eim.setInstanceMap(450004500);
    map2.resetFully();
    var mob = em.getMonster(8880167);
    mob.changeLevel(230);
    mob.setHp(1000000000);
    eim.registerMonster(mob);
    map2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(87, 36));


    eim.startEventTimer(1000 * 60 * 30); //10 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    map.startMapEffect("噩梦来临了！小心不要陷入更深的梦境！" ,5121052);
    map.spawnNpc(9400154, new java.awt.Point(1551,47));
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid < 450004150 || mapid > 450004500) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
    if(mapid == 450004250){
		Mapid = mapid;
		eim.schedule("end", 1000 * 0);
    }
    if(mapid == 450004500){
		Mapid = mapid;
		eim.schedule("end1", 1000 * 0);
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
        case 8880140:
            var map1 = eim.getMapInstance(450004250);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                var newVar = eim.getPlayers().get(i);
                newVar.changeMap(map1, map1.getPortal(0));
                //newVar.showGlass();
            }
            break;
        case 8880150:
            var map2 = eim.getMapInstance(450004500);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(map2, map2.getPortal(0));
            }
			map2.startMapEffect("请速拿到紫色小花后过图到下一关.", 5120161);
            break;
        case 8880167:
			var map3 = eim.getMapInstance(450004500);
			map3.spawnNpc(9400154, new java.awt.Point(88, 37));
			map2.startMapEffect("露西德已击败,请和NPC对话领取奖励吧.", 5120161);
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
    eim.disposeIfPlayerBelow(100, 450004300);
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
    map.startMapEffect("小心！你遭遇了更强大的宇宙海盗战士！！" ,5121052);
    map.spawnNpc(9400054, new java.awt.Point(360,115));
    eim.startEventTimer(1000 * 60 * 30); //5 min
}

function end1(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("注意！该区域很快就会被毒液填满！！" ,5121052);
    map.spawnNpc(3003251, new java.awt.Point(-238,35));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end2(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("注意！鸦天狗免疫一切物理伤害！请用强力的怪怪卡或者魔法攻击消灭它！" ,5121052);
    map.spawnNpc(9400053, new java.awt.Point(479,115));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end3(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("集齐难以对付的邪恶生物！就算只有一人也让人倍感头痛！" ,5121052);
    map.spawnNpc(9400054, new java.awt.Point(479,115));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end4(eim){
    var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("火焰焚烧系统启动！！" ,5121052);
    map.spawnNpc(9400054, new java.awt.Point(479,115));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end5(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("快点抓住13周年的法兰肯蝙蝠魔！！只有普通攻击才能攻击到蝙蝠魔！" ,5121052);
    map.spawnNpc(9400054, new java.awt.Point(479,115));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end6(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "等离子融合实验室！请消灭守卫机器人！" ,5121052);
    map.spawnNpc(9400054, new java.awt.Point(479,115));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end7(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect("意外会面！你在这里可以购买到神秘商人的特别商品！" ,5121051);
    map.spawnNpc(9400056, new java.awt.Point(307,115));
    map.spawnNpc(9400054, new java.awt.Point(479,115));
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end8(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "光明还是黑暗？让他们交融吧！" ,5121052);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end9(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "我是天生的王者！！" ,5121052);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end10(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "我可以偷走任何东西！！" ,5121052);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end11(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "今天我没带祖宗过来，但是我也可以击败你！" ,5121052);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end12(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "暴力萌天使！这名字真的搓爆了！" ,5121052);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end17(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "来，我的剑就是你的剑~" ,5121052);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}

function end18(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "这里没有SSR!" ,5121052);
    eim.startEventTimer(1000 * 60 * 5); //5 min
}
function end19(eim){
	var map = eim.getMapFactoryMap(Mapid);
    map.startMapEffect( "战国的顶点是森兰丸？开什么玩笑，这可是超越冒险岛啊！从不按常理出牌！" ,5121052);
    eim.startEventTimer(1000 * 60 * 30); //5 min
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}