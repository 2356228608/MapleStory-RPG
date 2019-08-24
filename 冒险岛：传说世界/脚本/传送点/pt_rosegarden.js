function enter(pi) {
	if (pi.isQuestFinished(3178)) {
		pi.playPortalSE();
		pi.warp(211080000, 0); // fourth tower
	} else {
		pi.playerMessage(5, "没有得到许可还是不要乱闯的好。");
	}
	return true;
}
