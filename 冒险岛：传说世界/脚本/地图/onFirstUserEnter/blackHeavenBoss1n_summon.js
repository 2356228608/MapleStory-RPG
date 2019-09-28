function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("Boss_黑色天堂_斯乌_困难");
    if (eim != null && eim.getProperty("summom").equals("0")) {
        eim.setProperty("summom", "1");
        mobid = 8240097;////第一只斯乌 
        mob = em.getMonster(mobid);
        //modified = em.newMonsterStats();
        //modified.setOHp(20000000000);
        //modified.setOMp(1000000);
        //mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-2, -16));

    }
    ms.dispose();
}