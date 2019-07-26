/*
 * 战神剧情 - 29
 * 地图：冰雪岛 - 寒冷森林2 (140090200)
 */
function enter(pi) {
    if (pi.getQuestStatus(21011) == 2) {
        pi.playPortalSE();
        pi.warp(140090300, 1);
    } else {
        pi.playerMessage(5, "你必须完成任务后，才能进入下一个地图！");
    }
}