/*
 * 龙神剧情 - 19
 * 地图：尤塔家 - 小阁楼 (100030100)
 */
function enter(pi) {
    if (pi.getInfoQuest(22013).equals("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;mo21=o")) {
        pi.updateInfoQuest(22013, "dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;hand=o;mo02=o;mo11=o;mo20=o;mo21=o");
        pi.evanTutorial("UI/tutorial/evan/0/0");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon70");
        return true;
    }
//    if (pi.getInfoQuest(22013).equals("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o") || pi.getInfoQuest(22013).equals("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o;mo21=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22013, "dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o;mo21=o");
//    pi.evanTutorial("UI/tutorial/evan/0/0");
//    pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon70");
//    return true;
}