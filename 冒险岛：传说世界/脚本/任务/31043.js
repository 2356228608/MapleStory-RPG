var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.askAcceptDecline("这次实在是太感谢你了。如果以后你能定期来这里帮我的话, 我会感激不尽的。");
	} else if (status == i++) {
		qm.sendNextS("我还能在这里能做些什么吗？");
	} else if (status == i++) {
		qm.sendNext("啊，有的！让我看一看……");
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.dispose();
		qm.forceCompleteQuest();
	}
}
