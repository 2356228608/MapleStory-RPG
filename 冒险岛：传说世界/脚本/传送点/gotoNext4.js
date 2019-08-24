function enter(pi) {
	if (pi.isQuestFinished(3141)) {
		pi.playPortalSE();
		pi.warp(211060800, 1); // fourth tower
	} else {
		pi.playerMessage(5, "这里的封印力量还很强大，暂时进不去。得先找鲁丹解除封印才行。");
	}
	return true;
}
