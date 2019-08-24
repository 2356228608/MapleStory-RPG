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
		qm.sendOk("这是#t4032832#。如果不小心丢了，我可以重新为你制作，你只要来找我就行。……反正我很闲。");
		qm.forceCompleteQuest();
		qm.gainItem(4000625, -100);
		if (!qm.haveItem(4032832))
			qm.gainItem(4032832, 1);
		qm.dispose();
	}
}
