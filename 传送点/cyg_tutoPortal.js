function enter(pi) {
if (pi.getPlayer().isQuestFinished(20826) || pi.getPlayer().isQuestActive(20827)) {
pi.warp(130030102, 0);
} else {
pi.addPopupSay(0,2000,"好像还有任务没有完成，先找奇姆完成任务吧");
}
}