/*
 * 龙神剧情 - 24
 * 地图：潘姆之家 - 农场中心 (100030300)
 */
function enter(pi) {
    if (pi.isQuestActive(22005)) {
        pi.warp(900020100, 1);
    } else {
        pi.warp(100030301);
    }
    return true;
}