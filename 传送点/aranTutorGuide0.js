/*
 * 战神剧情 - 11
 * 地图：黑暗领主 - 燃烧森林1 (914000200)
 */
function enter(pi) {
    if (pi.getInfoQuest(21002).equals("arr0=o;mo1=o;mo2=o;mo3=o")) {
        pi.playerMessage(5, "按一下Ctrl键，能够对怪兽进行一般攻击。");
        pi.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
        pi.fieldEffect_ScreenMsg("aran/tutorialGuide1");
    }
}