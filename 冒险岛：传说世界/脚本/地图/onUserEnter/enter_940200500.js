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
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 288, -57);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.playVideoByScript("Cadena1.avi");
		cm.playerMessage(-1, "播放动画失败。");
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(4);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_OneTimeAction(4, 100);
		cm.sendNextNoESC_Bottom("#face4#不要！！！！！！！！！！！！！！！！！！！！！！！", 3001270);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(5);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_ForcedFlip10(1, 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(5);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(5);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_ForcedFlip10(1, 200);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 50);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(1, 50);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_OneTimeAction(4, 1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getTopMsgFont("点击灯泡，即可开始任务。任务状态快捷键(Q)/选择型(J)", 3, 20, 20, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_OnUserEff("UI/tutorial.img/34");
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.forceCompleteQuest(500550);
		cm.updateInfoQuest(64346, "new=1");
		ms.dispose();
		cm.warp(940200501);
	} else {
		ms.dispose();
	}
}
