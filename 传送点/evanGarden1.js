/*
 * 龙神剧情 - 25
 * 地图：隐藏地图 - 茂密的森林 (900020110)
 */
function enter(pi) {
    if (pi.isQuestActive(22008)) {
        pi.warp(100030103, "west00");
    } else {
        pi.playerMessage("You cannot go to the Back Yard without a reason");
    }
    return true;
}