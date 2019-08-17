var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	status++;
	qm.sendNext_Bottom("我，我好害怕……求你帮帮我……");
	qm.forceCompleteQuest();
	qm.dispose();
}
