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
	//ms.playerMessage(5, "status=" + status);
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.onTeleport(1, ms.getPlayer().getId(), 583, 293);
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_ForcedFlip10(1, 1);
		ms.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.updateAchievement(558, 0, "");
		ms.inGameDirectionEvent_ForcedFlip10(1, 170);
		ms.inGameDirectionEvent_AskAnswerTime(1700);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#呼，我说据点怎么这么安静。因为大家都出去执行任务了。", 3001270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(1, 180);
		ms.inGameDirectionEvent_AskAnswerTime(1800);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(5);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(6);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_ForcedFlip10(2, 100);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(6);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(5);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face3#等等，也就是说我已经彻底自由了？这下没人跟我唠唠叨叨了！", 3001270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_ForcedFlip10(1, 150);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(5);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_ForcedFlip10(1, 120);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#……哈哈，好，那不如出去大玩一场？仔细想想，最近过得太安逸了。", 3001270);
	} else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.playerMessage(5, "请跟随箭头走出传送口。");
		ms.getTopMsgFont("请跟随箭头走出传送口。", 3, 20, 20, 0);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
