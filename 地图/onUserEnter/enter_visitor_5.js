function start() {
    var eim = ms.getEventInstance();
    if (eim != null) {
        eim.setProperty("total", "1");
        var total = 1;
        ms.showVisitorResult(1);
        ms.showVisitoKillResult(total);
        ms.getPlayer().updateOneInfo(17204, "stg", "5");
        ms.fieldEffect_ScreenMsg("Visitor/nBoss");
        ms.fieldEffect_ScreenMsg("Dojang/start");
    }
    ms.dispose();
}