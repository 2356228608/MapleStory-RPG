/*
 * 龙神剧情 - 06
 * 地图：梦中 - 梦中的小路 (900010100)
 */
function enter(pi) {
    if (pi.getInfoQuest(22013).equals("dt00=o;mo00=o;mo01=o;mo02=o")) {
        pi.updateInfoQuest(22013, "dt00=o;mo00=o;mo01=o;mo10=o;mo02=o");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon10");
        return true;
    }
//    if (pi.getInfoQuest(22013).equals("dt00=o;mo00=o;mo01=o;mo10=o;mo02=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22013, "dt00=o;mo00=o;mo01=o;mo10=o;mo02=o");
//    pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon10");
//    return true;
}