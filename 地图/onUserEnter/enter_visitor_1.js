﻿function start() {
    var eim = ms.getEventInstance();
    if (eim != null) {
        eim.setProperty("total", "180");
        var total = 180;
        ms.showVisitoKillResult(total);
        ms.showVisitorResult(1);
        //更新任务信息数据
        ms.getPlayer().updateOneInfo(17204, "stg", "1");
        ms.fieldEffect_ScreenMsg("Visitor/Stage1");
        ms.fieldEffect_ScreenMsg("Dojang/start");
    }
    ms.dispose();
}