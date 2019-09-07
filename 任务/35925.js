// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.askAcceptDecline_Bottom("#face1#这，这里也被怪物们挡住了。\r\n如果能消灭掉#b50个#k#r#o2300208##k，应该就能把路打通……", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#明白了。你在这里等一下。我马上就回来。", 1013358);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNext_Bottom("#face0#路打通了，勇士。\r\n我这就把你带到传来声音的地方去。好了，请跟我来。", 1013350);
	} else if (status === i++) {
		//qm.forceCompleteQuest();
		qm.warp(100051043);
		qm.OnStartNavigation(100051043, 1, "1013317", 35926);
		qm.dispose();
	}
}
