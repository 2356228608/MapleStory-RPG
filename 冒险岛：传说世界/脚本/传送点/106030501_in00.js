function enter(pi) {
	if (pi.isQuestFinished(30064)) {
		pi.warp(106030600, 0);
	} else {
		pi.playerMessage(5, "甲板上的大海盗有点多，先清理掉一部分再深入探索吧。");
	}
	return true;
}
