var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.warp(106030302, 3);
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	qm.dispose();
}
