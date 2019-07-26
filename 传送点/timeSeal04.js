/*
 * 夜光剧情 - 13
 * 地图：927020071
 */
function enter(pi) {
    pi.fieldEffect_ScreenMsg("lightning/screenMsg/6");
    pi.updateInfoQuest(25674, "1");
    pi.topMsg("已激活所有封印");
    pi.warp(927020072, 0);
    return true;
}