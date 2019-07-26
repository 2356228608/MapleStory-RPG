function enter(pi) {
	if (pi.getPlayer().isQuestFinished(20838) || pi.getPlayer().isQuestActive(20839)) {
		pi.playPortalSE();
		pi.warp(130030006, 0);
		pi.playerMessage(5, "穿过小桥吧.");
	} else {
		pi.addPopupSay(0, 2000, "好像还有任务没有完成。");
	}
}
