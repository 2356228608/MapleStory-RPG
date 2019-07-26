/*
 * 战神剧情 - 21
 * 地图：黑暗领主 - 末日森林 (914000300)
 */
function enter(pi) {
    if (pi.getInfoQuest(21002).equals("cmd=o;normal=o;arr0=o;arr1=o;arr2=o;arr3=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
        pi.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;arr3=o;fin=o;chain=o;mo1=o;mo2=o;mo3=o;mo4=o");
        pi.effect_Direction("Effect/Direction1.img/aranTutorial/ClickChild");
    }
}