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
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("#face1#为什么要我……？！", 9400032);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("0", "Map/EffectPL.img/MDIllust/illust1", 0, 1500, 0, 0, 14, 4, 0);
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("0", "", 2, 1500, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.npc_ChangeController(9400032, "oid=1809443", 625, 21, 1);
		ms.npc_SetSpecialAction("oid=1809443", "summon");
		ms.npc_ChangeController(9400037, "oid=1809444", 789, 21, 1);
		ms.npc_SetSpecialAction("oid=1809444", "summon");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2400, 9400032, 6654029);
		ms.npc_SetForceMove("oid=1809443", -1, 100, 100);
		ms.sendNextNoESC_Bottom("别跟过来。", 9400032);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……", 9400037);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊真是的，麻烦死了！", 9400032);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1809444", -1, 100, 80);
		ms.sendNextNoESC_Bottom("……", 9400037);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……你要过来就快点啊！慢慢吞吞的！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("<3", 9400037);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……", 9400033);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_LeaveField("oid=1809444");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(9400033, "oid=1809942", 1631, 21, 1);
		ms.npc_SetSpecialAction("oid=1809942", "summon");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1809443", 1);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1809443", 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1809443", 1, 100, 100);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/love", 0, 0, 0, 1, 0, 1, "oid=1809443", 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.npc_ChangeController(9400037, "oid=1810099", 730, 21, 1);
		ms.npc_SetSpecialAction("oid=1810099", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1810099", -1, 10, 100);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1809443", -1, 30, 100);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1810099", -1, 20, 100);
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/love", 0, 0, 0, 1, 0, 1, "oid=1810099", 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 150, 1514, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(7451);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/love", 0, 0, 0, 1, 0, 1, "oid=1809942", 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.npc_LeaveField("oid=1809443");
		ms.npc_LeaveField("oid=1809942");
		ms.npc_LeaveField("oid=1810099");
		ms.warp(867111011);
		ms.dispose();
	} else {
		ms.dispose();
	}
}