/*
 * 战神剧情 - 23
 * 地图：黑暗领主 - 末日森林 (914000300)
 */
function enter(pi) {
    pi.playPortalSE();
    if (pi.getQuestStatus(21001) == 0) {
        pi.warp(914000220, 2);
    } else {
        pi.warp(914000400, 2);
    }
}