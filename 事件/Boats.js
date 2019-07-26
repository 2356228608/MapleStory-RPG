function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.setProperty("haveBalrog", "false");
    em.schedule("stopentry", 60000); //关闭大门的时间 [4 min]
    em.schedule("takeoff", 70000); // 开始乘坐的时间 [5 min]

    em.getMapFactory().getMap(200090000).killAllMonsters(false);
    em.getMapFactory().getMap(200090010).killAllMonsters(false);
}

function stopentry() {
    em.setProperty("entry", "false");
    em.getMapFactory().getMap(200090011).resetReactors();
    em.getMapFactory().getMap(200090001).resetReactors();
}

function takeoff() {
    em.warpAllPlayer(200000112, 200090000);//开往金银岛候船室,航海 开往金银岛
    em.warpAllPlayer(104020111, 200090010);//开往天空之城出发前,航海 开往天空之城
    em.broadcastShip(200000111, 3);//到达目的地
    em.broadcastShip(104020110, 3);//原始地'金银岛 : 魔法密林码头'
    em.setProperty("docked", "false");
    em.setProperty("docked", "false");
    em.schedule("invasion", 60000); // 时间到召唤怪物 [1 min]
    em.schedule("arrived", 320000); // 需要移动到目的地的时间 [7 min]
}

function arrived() {
    em.warpAllPlayer(200090010, 200000100);//'航海中开往天空之城','天空之城售票处'
    em.warpAllPlayer(200090011, 200000100);//船仓开往天空之城>',天空之城售票处
    em.warpAllPlayer(200090000, 104020110);
    em.warpAllPlayer(200090001, 104020110);
    em.broadcastShip(200000111, 1);//神秘岛 : 码头
    em.broadcastShip(104020110, 1);//魔法密林码头'
    em.getMapFactory().getMap(200090010).killAllMonsters(false);
    em.getMapFactory().getMap(200090000).killAllMonsters(false);
    em.setProperty("haveBalrog", "false");//
    scheduleNew();
}

function invasion() {
    if (Math.floor(Math.random() * 10) < 10) {
        var map1 = em.getMapFactory().getMap(200090000);
        var pos1 = new java.awt.Point(-538, 143);
        map1.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos1);
        map1.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos1);

        var map2 = em.getMapFactory().getMap(200090010);
        var pos2 = new java.awt.Point(339, 148);
        map2.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos2);
        map2.spawnMonsterOnGroundBelow(em.getMonster(8150000), pos2);

        em.setProperty("haveBalrog", "true");
        em.broadcastShip(200090000, 1034);
        em.broadcastShip(200090010, 1034);
    }

}

function cancelSchedule() {}