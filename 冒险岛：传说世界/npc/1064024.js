﻿var status = 0;

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
		cm.askYesNoS("现在要离开这里吗?");
	} else if (status == 1) {
		cm.warp(105200000, 0);
		cm.dispose();
	} else if (mode == 0) {
		cm.dispose();
	}

}
