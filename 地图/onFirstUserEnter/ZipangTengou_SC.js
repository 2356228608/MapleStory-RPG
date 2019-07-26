function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("tiangou_NORMAL");
    if (eim != null) {
        //eim.setProperty("summom", "1");
        mobid = 9400080;
        mob = em.getMonster(mobid);
        //modified = em.newMonsterStats();
        //modified.setOHp(10000000000);
        //modified.setOMp(1000000);
        //mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(199, -28));
        //ms.getMap().startMapEffect("请在规定的时间内击败.", 5120124);
    }
    ms.dispose();
}