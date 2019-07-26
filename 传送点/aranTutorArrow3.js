/*
 * 战神剧情 - 19
 * 地图：黑暗领主 - 燃烧森林3 (914000220)
 */
function enter(pi) {
    if (pi.getInfoQuest(21002).equals("cmd=o;normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
        pi.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;arr3=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
    }
}