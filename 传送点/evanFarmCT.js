/*
 * 龙神剧情 - 25
 * 地图：隐藏地图 - 茂密的森林 (900020110)
 */
function enter(pi) {
    if (pi.isQuestActive(22010) || pi.getPlayer().getJob() != 2001) {
        pi.warp(100030310, 3);
    } else {
        pi.playerMessage("Cannot enter the Lush Forest without a reason.");
    }
    return true;
}