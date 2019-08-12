/* Dawnveil
[Ellinel Fairy Academy] Fanzy's Magic 2
Fanzy
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.warp(101070010, 0);
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
