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
	ms.playerMessage(5, "status=" + status);
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 288, -57);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm00.img/Silence");
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		//ms.playVideoByScript("Cadena1.avi");
		ms.playerMessage(-1, "播放动画失败。");
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(4);
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_OneTimeAction(4, 100);
		ms.sendNextNoESC_Bottom("#face4#不要！！！！！！！！！！！！！！！！！！！！！！！", 3001270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(5);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_ForcedFlip10(1, 100);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(5);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(5);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_ForcedFlip10(1, 200);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 50);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(1, 50);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_OneTimeAction(4, 1000);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.getTopMsgFont("点击灯泡，即可开始任务。任务状态快捷键(Q)/选择型(J)", 3, 20, 20, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_OnUserEff("UI/tutorial.img/34");
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
