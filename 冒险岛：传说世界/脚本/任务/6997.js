var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("你好, 最近, 我一直听说你的成长速度非常惊人啊。");
	} else if (status === i++) {
		qm.sendNextPrev("也没别的事, 我找你来只是想看看, 身为一位名声大噪的弓箭手是如何挑战扎昆的。");
	} else if (status === i++) {
		qm.askAcceptDecline("怎么样? 你想挑战扎昆吗? \r\n#r<< 接受后, 将会移动到#b冰峰雪域山脉长老的公馆#r。>>");
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.warp(211000001);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("你来了啊? 看来你想要挑战扎昆啊。");
	} else if (status === i++) {
		qm.sendNextPrev("你做好准备挑战扎昆的话, 请随时来找我吧。");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
