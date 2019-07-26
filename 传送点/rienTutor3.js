/*
 * 战神剧情 - 31
 * 地图：冰雪岛 - 寒冷森林3 (140090300)
 */
function enter(pi) {
    if (pi.getQuestStatus(21012) == 2) {
        pi.playPortalSE();
        pi.warp(140090400, 1);
    } else {
        pi.playerMessage(5, "你必须完成任务后，才能进入下一个地图！");
    }
}