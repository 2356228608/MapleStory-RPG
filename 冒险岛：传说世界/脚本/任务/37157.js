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
		qm.sendNextS("呼……呼……\r\n已经过了多久了 ？");
	} else if (status === i++) {
		qm.sendNextS("怎么会一直在一个地方徘徊不前呢……");
	} else if (status === i++) {
		qm.sendNextS("而且怪物的数量不减反增。");
	} else if (status === i++) {
		qm.askYesNoS("不赶快杀出一条路摆脱它们 ，恐怕要永远出不去了。");
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.dispose();
	}	
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.gainExp(8400);
		qm.warp(101080900, 0);
		qm.dispose();
	}
}
