var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
	qm.warp(270000100, 0);
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}