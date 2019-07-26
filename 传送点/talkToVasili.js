/*
 * 冒险家剧情 - 41
 * 地图：枫叶路 - 码头 (4000031)
 */
function enter(pi) {
    if (pi.getQuestStatus(32214) == 1) {
        pi.openNpc(10305, "ExplorerTut04");
    } else if (pi.getQuestStatus(32214) == 2) {
        pi.openNpc(10305, "ExplorerTut05");
    } else {
        pi.openNpc(10305);
    }
}
