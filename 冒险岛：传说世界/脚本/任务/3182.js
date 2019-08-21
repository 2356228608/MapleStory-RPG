var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceStartQuest();
		if (!qm.haveItem(2430159))
			qm.gainItem(2430159, 1);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.sendNext("Thank you so much.");
	qm.forceCompleteQuest();
	qm.dispose();
}
