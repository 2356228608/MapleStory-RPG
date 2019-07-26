/*
 * 龙神剧情 - 03
 * 地图：梦中 - 梦中的森林入口 (900010000)
 */
function enter(pi) {
    if (pi.getInfoQuest(22013).equals("mo00=o")) {
        pi.updateInfoQuest(22013, "dt00=o;mo00=o");
        pi.fieldEffect_ScreenMsg("evan/dragonTalk00");
        return true;
    }
//    if (pi.getInfoQuest(22013).equals("dt00=o;mo00=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22013, "dt00=o;mo00=o");
//    pi.fieldEffect_ScreenMsg("evan/dragonTalk00");
//    return true;
}