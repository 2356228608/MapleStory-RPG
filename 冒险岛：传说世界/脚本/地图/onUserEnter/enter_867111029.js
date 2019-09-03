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
		// cm.warp(867111029);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.npc_ChangeController(9400031, "oid=1667891", -405, 313, 0);
		cm.npc_SetSpecialAction("oid=1667891", "summon");
		cm.npc_ChangeController(9400032, "oid=1667892", -500, 313, 0);
		cm.npc_SetSpecialAction("oid=1667892", "summon");
		cm.npc_ChangeController(9400033, "oid=1667893", -570, 313, 0);
		cm.npc_SetSpecialAction("oid=1667893", "summon");
		cm.npc_ChangeController(9400034, "oid=1667894", -620, 313, 0);
		cm.npc_SetSpecialAction("oid=1667894", "summon");
		cm.npc_ChangeController(9400035, "oid=1667895", -649, 313, 0);
		cm.npc_SetSpecialAction("oid=1667895", "summon");
		cm.npc_SetForceMove("oid=1667891", 1, 200, 200);
		cm.npc_SetForceMove("oid=1667892", 1, 150, 130);
		cm.npc_SetForceMove("oid=1667893", 1, 150, 100);
		cm.npc_SetForceMove("oid=1667894", 1, 130, 100);
		cm.npc_SetForceMove("oid=1667895", 1, 100, 150);
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.sendNextNoESC_Bottom("等下，这里是？！！", 9400031);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1667894", 1, 400, 150);
		cm.inGameDirectionEvent_AskAnswerTime(3200);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("他们将宇宙飞船巧妙地伪装成了森林啊，APORD的家伙！", 9400034);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("看来这些家伙把动物带来之后就想立刻逃亡宇宙啊。", 9400034);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1667891", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#嘟嘟、奈奈、灵灵居然在这种地方……如果去了宇宙，那我们就永远见不到它们了。", 9400031);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("我们快点找到嘟嘟、奈奈、灵灵吧。", 9400035);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("我感觉到了内部有微弱的奈奈的气息，快走吧！", 9400033);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1667891", 0);
		cm.npc_SetForceMove("oid=1667891", 1, 300, 200);
		cm.npc_SetForceMove("oid=1667894", 1, 200, 200);
		cm.npc_SetForceMove("oid=1667893", 1, 400, 150);
		cm.npc_SetForceMove("oid=1667892", 1, 500, 200);
		cm.npc_SetForceMove("oid=1667895", 1, 600, 250);
		cm.inGameDirectionEvent_AskAnswerTime(3200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.forceCompleteQuest(59726);
		cm.fieldEffect_KinesisEXP(2447700);
		cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1;5=1;6=1;7=1");
		cm.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.npc_LeaveField("oid=1667891");
		cm.npc_LeaveField("oid=1667892");
		cm.npc_LeaveField("oid=1667893");
		cm.npc_LeaveField("oid=1667894");
		cm.npc_LeaveField("oid=1667895");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
