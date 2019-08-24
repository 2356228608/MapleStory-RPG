var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.OnStartNavigation(211080300, 1, "", 31042);
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendOk("谢谢你。这下子玫瑰花园应该会变得安静些吧?");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
