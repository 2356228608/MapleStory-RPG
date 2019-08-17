function enter(pi) {
	if (pi.isQuestFinished(30056)) {
		pi.warp(106030300, 1);
	} else {
		pi.playerMessage(5, "门似乎锁上了。没有允许还是不要乱闯的好。");
	}
	return true;
}
