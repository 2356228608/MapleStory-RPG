/*
 * 冒险家剧情 - 13 17 21
 * 地图：枫叶路 - 小蜗牛 (4000012)
 */
function enter(pi) {
    if (pi.getMapId() == 4000012) {
        if (pi.getQuestStatus(32204) == 2) {
            pi.warp(4000013, 0);
            return;
        } else {
            pi.openNpc(10301, "ExplorerTut01");
        }
    }

    if (pi.getMapId() == 4000013) {
        if (pi.getQuestStatus(32207) == 2) {
            pi.warp(4000014, 0);
            return;
        } else {
            pi.openNpc(10301, "ExplorerTut02");
        }
    }

    if (pi.getMapId() == 4000014) {
        if (pi.getQuestStatus(32210) == 1) {
            pi.warp(4000020, 0);
            return;
        } else {
            pi.openNpc(10301, "ExplorerTut03");
        }
    }
}
 