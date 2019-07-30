/*
腥血女王
 */

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
		cm.askAcceptDeclineS("要移动吗？");
	} else if (status == 1) {
		cm.dispose();
		cm.getPlayer().changeMap(105200310,0);
	} else if (mode == 0) {
		cm.dispose();
	}
}
