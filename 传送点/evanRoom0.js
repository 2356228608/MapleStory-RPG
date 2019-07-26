/*
 * 龙神剧情 - 18
 * 地图：尤塔家 - 小阁楼 (100030100)
 */
function enter(pi) {
    if (pi.getInfoQuest(22014).equals("")) {
        pi.updateInfoQuest(22014, "mo30=o");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon30");
        return true;
    }
//    if (pi.getInfoQuest(22013).equals("mo30=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22013, "mo30=o");
//    pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon30");
//    return true;
}