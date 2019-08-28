/* global ms */
var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode === 0) {
		status--;
	} else {
		status++;
		cm.sendOk("紧张备货中……");
		cm.dispose();
	}
}
