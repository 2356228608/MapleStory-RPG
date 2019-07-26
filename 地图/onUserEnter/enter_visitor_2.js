function start() {
    var eim = ms.getEventInstance();
    if (eim != null) {
        eim.setProperty("total", "180");
        var total = 180;
        ms.showVisitoKillResult(total);
        ms.showVisitorResult(1);
        ms.getPlayer().updateOneInfo(17204, "stg", "2");
        ms.fieldEffect_ScreenMsg("Visitor/Stage2");
        ms.fieldEffect_ScreenMsg("Dojang/start");
    }
    ms.dispose();
}