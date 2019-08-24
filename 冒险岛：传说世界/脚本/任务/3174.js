var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.sendNext("啊，对不起。我太沉迷于回忆了。我马上去玫瑰花园把记忆的东西拿回来。请稍等一下。");
	} else if (status == i++) {
		qm.dispose();
		qm.forceCompleteQuest();
	}
}
