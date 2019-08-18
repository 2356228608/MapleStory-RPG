var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	qm.warp(106031002, 0);
	qm.forceCompleteQuest();
	qm.gainExp(44000);
	qm.dispose();
}
