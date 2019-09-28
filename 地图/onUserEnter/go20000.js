/*
 * 冒险家剧情 - 10
 * 地图：枫叶路 - 小蜗牛 (4000012)
 */
function start() {
    ms.fieldEffect_ScreenMsg("maplemap/enter/20000");
    if (!ms.isQuestFinished(32200)) {
        ms.forceCompleteQuest(32200);
    }
    if (!ms.isQuestFinished(32201)) {
        ms.forceCompleteQuest(32201);
    }
    if (!ms.isQuestFinished(32202)) {
        ms.forceCompleteQuest(32202);
    }
    ms.dispose();
}