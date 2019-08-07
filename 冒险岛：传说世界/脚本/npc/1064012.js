/*
半半
 */

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status >= 1 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) {
		if (cm.isQuestFinished(30007)) {
			cm.warp(105200100, 0);
		} else {
			cm.getMap().startMapEffect("这里的情况好像不对劲。还是先了解一下状况吧。", 5120124);
		}
		cm.dispose();
	} else if (mode == 0) {
		cm.dispose();
	}
}
