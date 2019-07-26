/*
 * 战神剧情 - 02
 * 地图：黑暗领主 - 伤病营舍 (914000000)
 */
function enter(pi) {
    if (pi.getInfoQuest(21002).equals("")) {
        pi.updateInfoQuest(21002, "mo1=o");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon1");
    }
}