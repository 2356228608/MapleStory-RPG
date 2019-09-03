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
		// cm.warp(867111027);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.npc_ChangeController(9400031, "oid=1667341", -900, 2140, 1);
		cm.npc_SetSpecialAction("oid=1667341", "summon");
		cm.npc_ChangeController(9400032, "oid=1667342", -840, 2140, 1);
		cm.npc_SetSpecialAction("oid=1667342", "summon");
		cm.npc_ChangeController(9400033, "oid=1667343", -770, 2140, 1);
		cm.npc_SetSpecialAction("oid=1667343", "summon");
		cm.npc_ChangeController(9400034, "oid=1667344", -700, 2140, 1);
		cm.npc_SetSpecialAction("oid=1667344", "summon");
		cm.npc_ChangeController(9400035, "oid=1667345", -950, 2140, 1);
		cm.npc_SetSpecialAction("oid=1667345", "summon");
		cm.inGameDirectionEvent_PushMoveInfo(0, 0, -745, 830);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_PushMoveInfo(0, 200, -745, 2200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(6855);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -970, 2200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1667345", -1, 50, 200);
		cm.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("我们终于来到入口了！！", 9400035);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("等等！里面的气息很强。", 9400033);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1667343", -1, 300, 100);
		cm.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#愤怒……悲伤……憎恶……大家最好做好准备再进去！", 9400033);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("我们不要急，好好观察周围然后再进去吧。", 9400033);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1667343", -1, 100, 100);
		cm.npc_SetForceMove("oid=1667344", -1, 500, 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1667341", -1, 300, 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1667342", -1, 400, 100);
		cm.npc_SetForceMove("oid=1667345", -1, 100, 100);
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.npc_LeaveField("oid=1667341");
		cm.npc_LeaveField("oid=1667342");
		cm.npc_LeaveField("oid=1667343");
		cm.npc_LeaveField("oid=1667344");
		cm.npc_LeaveField("oid=1667345");cm.warp(867111028);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
