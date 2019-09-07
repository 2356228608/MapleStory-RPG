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
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/1");
		cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect2.img/HofM/ACT1_text/0", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/2");
		cm.fieldEffect_ProcessOnOffLayer("2", "Map/Effect2.img/HofM/ACT1_text/1", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(6700);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("2", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(10000, 1000, 10000, 0, 0);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/3");
		cm.fieldEffect_ProcessOnOffLayer("3", "Map/Effect2.img/HofM/ACT1_text/2", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("3", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/4");
		cm.fieldEffect_ProcessOnOffLayer("4", "Map/Effect2.img/HofM/ACT1_text/3", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(4800);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("4", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		ms.dispose();
		cm.warp(350100010);
	} else {
		ms.dispose();
	}
}
