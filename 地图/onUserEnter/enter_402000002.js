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
		cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;2=1");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_ForcedFlip10(2, 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -294, 138);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#幸好支部成员执行任务还没回来。看看时间……他们应该快回来了。", 3001270);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 200);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -94, 138);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1800);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(6);
		cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 270, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#喂，新来的。绝不做无意义的争斗。这是支部守则第三条。难道你忘了吗，啊？", 3001250);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 0, "oid=undefined", undefined, undefined);
		cm.sendNextNoESC_Bottom("#face0#真是神了，你怎么知道我刚战斗回来？啊哈，看来这年纪不白长！", 3001270);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_ForcedFlip10(2, 200);
		cm.inGameDirectionEvent_AskAnswerTime(1800);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#废话少说，你好好反省一下吧。从今天起，你就是支部的正式成员了。做任何事都要对得起自己的身份。", 3001250);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#好，好，随你的便。", 3001270);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.forceStartQuest(34602, "");
		cm.forceCompleteQuest(34602);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
