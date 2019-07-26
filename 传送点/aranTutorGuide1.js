/*
 * 战神剧情 - 16
 * 地图：黑暗领主 - 燃烧森林2 (914000210)
 */
function enter(pi) {
    if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;mo1=o;mo2=o;mo3=o;mo4=o")) {
        pi.playerMessage(5, "按住Ctrl键，能够进行连续攻击。");
        pi.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
        pi.fieldEffect_ScreenMsg("aran/tutorialGuide2");
    }
}