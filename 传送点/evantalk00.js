/*
 * 龙神剧情 - 02
 * 地图：梦中 - 梦中的森林入口 (900010000)
 */
function enter(pi) {
    if (pi.getInfoQuest(22013).equals("")) {
        pi.updateInfoQuest(22013, "mo00=o");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon00");
        return true;
    }
//    if (pi.getInfoQuest(22013).equals("mo00=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22013, "mo00=o");
//    pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon00");
//    return true;
}