var status = -1;

function action(mode, type, selection) {
    var em = ms.getEventManager("BeidlerPQ");
    var eim = ms.getEventInstance();
    if (em != null && eim != null) {
        var state = eim.getProperty("BeidlerHead");
        if (eim.getProperty("Check").equals("1")) {
            eim.setProperty("Check", "2");
            ms.gainMembersPQ("贝勒?德", 1);
        }
        if (state.equals("11")) {
            ms.getPlayer().showPortal("phase2-1", "2");
            ms.getPlayer().showPortal("phase2-2", "2");
        } else if (state.equals("111")) {
            ms.getPlayer().showPortal("phase2-1", "2");
            ms.getPlayer().showPortal("phase2-2", "2");
            ms.getPlayer().showPortal("phase3", "2");
        }
        ms.getPlayer().gaintBossMap();
        ms.getPlayer().sendDathCount();
    }
    ms.dispose();
}