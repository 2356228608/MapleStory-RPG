/*
 * 战神剧情 - 27
 * 地图：冰雪岛 - 寒冷森林1 (140090100)
 */
function enter(pi) {
    if (pi.getQuestStatus(21010) == 2) {
        pi.playPortalSE();
        pi.warp(140090200, 1);
    } else {
        pi.playerMessage(5, "你必须完成任务后，才能进入下一个地图！");
    }
}