var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendOk("…嗯, 其实我也知道用这种东西是无法完全治愈伊帕娅的伤势的。\r\n这宫中的所有地方曾经都有王妃的身影, 现在这里却完全被寒冬和可怕的诅咒所占据……");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
