/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("唉……好吧……#h #，那我来告诉你……为什么要叫你过来……", 1012110);
	} else if (status === i++) {
		qm.sendNext("那一天似乎和平常没什么不同……", 1012110);
	} else if (status === i++) {
		qm.sendNext("那一天，我还跟往常一样折纸飞机玩……", 1012110);
	} else if (status === i++) {
		qm.warp(101080000, 0);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	qm.dispose();
}
