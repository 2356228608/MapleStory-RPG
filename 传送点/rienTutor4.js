/*
 * 战神剧情 - 33
 * 地图：冰雪岛 - 寒冷森林4 (140090400)
 */
function enter(pi) {
    if (pi.getQuestStatus(21013) == 2) {
        pi.playPortalSE();
        pi.warp(140090500, 1);
    } else {
        pi.playerMessage(5, "你必须完成任务后，才能进入下一个地图！");
    }
}