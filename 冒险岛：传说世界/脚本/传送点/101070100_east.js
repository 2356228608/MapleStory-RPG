function enter(pi) {
	pi.playPortalSE();
	if (pi.isQuestFinished(32104)) {
		pi.warp(101070010, 2);
	} else {
		pi.warp(101070000, 6);
	}
	return true;
}
