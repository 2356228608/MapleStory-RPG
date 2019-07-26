/*
 * 龙神剧情 - 25
 * 地图：动画 - 教程2 (900090102)
 */
function enter(pi) {
    if (pi.getInfoQuest(22014).equals("mo30=o;mo40=o;mo41=o;mo42=o")) {
        pi.updateInfoQuest(22014, "mo30=o;mo40=o;mo41=o;mo42=o;mo50=o");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon50");
        return true;
    }
//    if (pi.getInfoQuest(22014).equals("mo30=o;mo40=o;mo41=o;mo42=o;mo50=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22014, "mo30=o;mo40=o;mo41=o;mo42=o;mo50=o");
//    pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon50");
//    return true;
}