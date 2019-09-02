// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

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
	} else if (status == i++) {
		qm.setInGameDirectionMode(false, false, false);
		qm.askMenuS_Bottom("汉斯说打开笔记本上想复原的那一页就行……要不要打开笔记本看看呢？\r\n#b#L0#1. 打开笔记本。#l\r\n#L1#2. 以后再说吧。#l");
	} else if (status === i++) {
		if (selection == 1) {
			qm.dispose();
			return;
		}
		qm.updateInfoQuest(59744, "map=" + qm.getMapId());
		qm.forceStartQuest(59710, "");
		qm.warp(867111007);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.updateInfoQuest(59744, "map=" + qm.getMapId());
		qm.warp(867111006);
		qm.dispose();
	}
}
