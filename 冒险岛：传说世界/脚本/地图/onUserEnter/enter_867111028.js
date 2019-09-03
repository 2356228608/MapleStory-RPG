// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
		// cm.warp(867111028);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false, false);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_PushMoveInfo(0, 100, -600, 0);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(5200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		cm.warp(867111029);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
