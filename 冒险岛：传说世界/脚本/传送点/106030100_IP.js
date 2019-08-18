function enter(pi) {
	if (pi.isQuestFinished(30050)) {
		pi.warp(106030000, 0);
	} else {
		pi.warp(106031100, 0);
	}
	return true;
}
