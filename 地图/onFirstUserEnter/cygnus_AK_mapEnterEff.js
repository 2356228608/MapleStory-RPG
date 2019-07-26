function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("ArkariumBattle");
    if (eim != null) {
        //eim.setProperty("summom", "1");
        mobid = 9300303;
        mob = em.getMonster(mobid);
        //modified = em.newMonsterStats();
        //modified.setOHp(10000000000);
        //modified.setOMp(1000000);
        //mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(20, -181));
        ms.getMap().startMapEffect("请在规定的时间内击败.", 5120124);
    }
    ms.dispose();
}