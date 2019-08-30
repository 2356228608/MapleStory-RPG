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
		qm.askYesNo("怎么样，#b#h0##k～？准备好带上我的#e#b经验值包#k#n，来一场真正的冒险吧！", 9010010);
	} else if (status === i++) {
		qm.sendOk("\r\n很好！在去冒险之前一定要做好充分的准备～！", 9010010);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.gainExp(Math.pow(qm.getPlayer().getLevel(), 4));
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.dispose();
}
