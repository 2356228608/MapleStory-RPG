/*
 * 神炮王剧情 - 07
 * 地图：可可岛 - 浅海滩 (3000100)
 * 任务：先恢复体力(2561)
 * @author 狐狸糊涂
 */
function start(mode, type, selection) {
    qm.gainItem(2010000, 1);
    qm.forceStartQuest();
    qm.sendNextS("(获得了看上去很好吃的苹果。吃一口看看吧。按#bI#k键，可以打开背包吗～？)");
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}