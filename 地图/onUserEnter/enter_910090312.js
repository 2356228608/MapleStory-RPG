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
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_ForcedFlip10(1, 10);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_OneTimeAction(27, 999999);
		ms.npc_ChangeController(1013350, -182, 78, 1);
		ms.npc_SetSpecialAction(1013350, "summon");
		ms.npc_SetForceMove(1013350, 1, 10, 80);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1013350, "special2");
		ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, -120);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 0, 200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090312, 2, 30, 1000);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#这里好像比预计的深得多。\r\n感觉越往下，周围的光线就变得更暗了……是错觉吗？", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#好……好像有奇怪的东西出现了，勇士！\r\n好，好像往这边来了！走，走，走开！", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face4##b（本来时间就不多……真是麻烦。\r\n啧啧，只能一边清理，一边往下走了。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.playerMessage(5, "必须消灭一定数量的怪物，并向下移动。");
		ms.getTopMsgFont("必须消灭一定数量的怪物，并向下移动。", 3, 20, 4, 0);
		ms.npc_LeaveField(1013350);
		ms.dispose();
		//ms.openNpc(9900004,"副本_古迹猎人_死亡沼泽");
		ms.warp(910090350);
		//ms.dispose();
	} else {
		ms.dispose();
	}
}
