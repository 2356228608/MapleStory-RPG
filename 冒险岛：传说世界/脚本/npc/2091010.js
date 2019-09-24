var status = -1;

function start() {
	cm.showDoJangRank();
	cm.dispose();
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	} else if (mode == 1) {
		status++;
	} else {
		status--;
	}
	cm.showDoJangRank();
	cm.dispose();
}
