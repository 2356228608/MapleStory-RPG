/*
 * 战神剧情 - 36
 * 地图：冰雪岛 - 里恩西部地区 (140010000)
 */
function start() {
    if (ms.getInfoQuest(21019).equals("miss=o;helper=clear")) {
        ms.updateInfoQuest(21019, "miss=o;arr=o;helper=clear");
        ms.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
    }
    ms.dispose();
}