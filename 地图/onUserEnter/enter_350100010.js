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
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -300, 0);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(12000, 1000, 12000, 300, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/6");
		cm.fieldEffect_ProcessOnOffLayer("6", "Map/Effect2.img/HofM/ACT1_text/6", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(9000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("6", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/7");
		cm.fieldEffect_ProcessOnOffLayer("7", "Map/Effect2.img/HofM/ACT1_text/7", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(7700);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("7", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		ms.dispose();
		cm.warp(350100020);
	} else {
		ms.dispose();
	}
}
