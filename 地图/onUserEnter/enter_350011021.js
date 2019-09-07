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
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_PushMoveInfo(0, 400, 457, -4567);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_PlayFieldSound("Ambience.img/secretmissionbase")
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.effect_Voice("SoundEff.img/blackHeaven/secretmission1");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		ms.dispose();
		cm.warp(350011020);
	} else {
		ms.dispose();
	}
}
