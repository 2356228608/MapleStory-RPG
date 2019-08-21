function enter(pi) {
	pi.playPortalSE();
	if (pi.isQuestFinished(32104)) {
		pi.warp(101070010, 1);
	} else {
		pi.warp(101070000, 0);
	}
	return true;
}
