function enter(pi) {
	if (pi.isQuestFinished(3139)) {
		pi.playPortalSE();
		pi.warp(211060300, 2);
	} else {
		pi.openNpc(1, "狮子王城_闯塔");
	}
	return true;
}
