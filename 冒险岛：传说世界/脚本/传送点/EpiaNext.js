function enter(pi) {
	var info = pi.getInfoQuest(3178);
	if (info != null && info.equals("clear")) {
		pi.playPortalSE();
		pi.warp(921140001, 0); // fourth tower
	} else {
		pi.playerMessage(5, "这里的道路还很危险，得先为伊帕娅扫清障碍才行。");
	}
	return true;
}
