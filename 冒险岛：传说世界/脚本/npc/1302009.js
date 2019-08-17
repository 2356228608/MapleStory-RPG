/* global ms */
var status = -1;

function action(mode, type, selection) {
	if (mode === 0) {
		status--;
	} else {
		status++;
	}
	var map = cm.getMapId();
	if (map == 106031500) {
		cm.warp(106031501, 0);
	}
	cm.dispose();
}
