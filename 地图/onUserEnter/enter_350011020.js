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
		cm.npc_ChangeController(1540446, "oid=32535", -792, 30, 1);
		cm.updateInfoQuest(33128, "act1=350011020");
		cm.forceCompleteQuest(33151);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_ChangeController(1540475, "oid=8205173", -100, 21, 0);
		cm.npc_SetSpecialAction("oid=8205173", "summon");
		cm.npc_ChangeController(1540475, "oid=8205174", 62, 21, 1);
		cm.npc_SetSpecialAction("oid=8205174", "summon");
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_PushMoveInfo(0, 100, 25, 21);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(4003);
	} else if (status === i++) {
		cm.npc_ChangeController(1540502, "oid=8205339", -391, 21, 0);
		cm.npc_SetSpecialAction("oid=8205339", "summon");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=8205173", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("什么人!", 0, 0, 0, 1500, 1540475, 6654029);
		cm.npc_ChangeController(1540503, "oid=8205438", 208, 21, 1);
		cm.npc_SetSpecialAction("oid=8205438", "summon");
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_ChangeController(1540504, "oid=8205439", 306, 21, 1);
		cm.npc_SetSpecialAction("oid=8205439", "summon");
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=8205339", "spin");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=8205339");
		cm.npc_ChangeController(1540502, "oid=8205535", -240, 21, 0);
		cm.npc_SetSpecialAction("oid=8205535", "summon");
		cm.inGameDirectionEvent_PushScaleInfo(200, 1500, 200, 0, 21);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=8205535", "attack");
		cm.npc_SetSpecialAction("oid=8205438", "attack");
		cm.npc_SetSpecialAction("oid=8205439", "attack");
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=8205173", "die1");
		cm.npc_SetSpecialAction("oid=8205174", "die1");
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.effect_Voice("Game.img/MonsterBattleDraw");
		cm.npc_LeaveField("oid=8205173");
		cm.npc_LeaveField("oid=8205174");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onTeleport(1, cm.getPlayer().getId(), -225, -4475);
		cm.forceCompleteQuest(33153);
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=32535");
		cm.npc_LeaveField("oid=8205438");
		cm.npc_LeaveField("oid=8205439");
		cm.npc_LeaveField("oid=8205535");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.updateInfoQuest(49002, "QET=EDvtvOBh1QE$");
		cm.updateInfoQuest(49000, "count=0;Quest=49002;day=152915;QET=cGZyPI9f1QE$;state=1");
		cm.updateInfoQuest(49000, "count=0;Quest=49002;day=152915;QET=cGZyPI9f1QE$;state=2");
		cm.updateInfoQuest(49000, "count=0;Quest=49002;day=152915;QET=EAcLjNxh1QE$;state=2");
		cm.forceStartQuest(49002, "");
		cm.npc_ChangeController(1540502, "oid=8205777", 157, 21, 0);
		cm.npc_SetSpecialAction("oid=8205777", "summon");
		cm.npc_ChangeController(1540503, "oid=8205778", 108, 21, 0);
		cm.npc_SetSpecialAction("oid=8205778", "summon");
		cm.npc_ChangeController(1540504, "oid=8205779", 50, 21, 0);
		cm.npc_SetSpecialAction("oid=8205779", "summon");
		cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
