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
		cm.sendOk("#b(设置了结界。这下村子应该安全了……)", 1033205);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false, false);
		cm.inGameDirectionEvent_OneTimeAction(5, 0);
		cm.sendNextPrevSNoESC("左手可以动……");
	} else if (status === i++) {
		cm.inGameDirectionEvent_OneTimeAction(6, 0);
		cm.sendNextPrevSNoESC("右手也没问题……");
	} else if (status === i++) {
		cm.inGameDirectionEvent_OneTimeAction(15, 0);
		cm.sendNextPrevSNoESC("腿也没事。");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("伤全都好了。只是等级……呃呃呃……好想哭……");
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.forceCompleteQuest(24041);
		cm.forceStartQuest(24042, "");
		qm.dispose();
	}
}
