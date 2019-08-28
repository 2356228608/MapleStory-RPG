var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askMenu("去#b<操作之神>#k挑战#e神之操作#n吧！\r\n\r\n#b每通过一关，都可以获得在<操作之神>中获得的#b星星数量5倍#k的#b大冒险币#k！", 9062148);
	} else if (status == i++) {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.dispose();
	}
}
