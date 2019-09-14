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
		// [2019/9/6 14:46:59] 之前所在地图: cm.warp(350130010) - 当前进入地图: cm.warp(350130020)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 0, -1000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(12000, 1000, 12000, 0, 0);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT3/NAR/4", 128);
		cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/HofM/ACT3_text/3", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(7200);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT3/NAR/5", 128);
		cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect2.img/HofM/ACT3_text/4", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(5600);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		// [2019/9/6 14:47:21] 当前所在地图: cm.warp(350130020) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350130100);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
