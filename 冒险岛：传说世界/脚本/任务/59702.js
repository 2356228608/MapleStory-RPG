var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Bottom("汉斯说只要打开笔记本里想要复原的那一页就行……让我来看看……！", 9400031);
	} else if (status === i++) {
		qm.askMenu_Bottom("要不要读一读？\r\n#b#L0#打开笔记本。#l\r\n#L1#以后再说吧。#l", 9400031);
	} else if (status === i++) {
		if (selectionLog[2] == 1) {
			qm.updateInfoQuest(59744, "map=" + qm.getMapId());
			qm.forceStartQuest(59702, "");
			qm.warp(867111000);
		}
		qm.dispose();
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
