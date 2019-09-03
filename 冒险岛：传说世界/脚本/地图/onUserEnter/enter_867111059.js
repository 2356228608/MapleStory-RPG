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
		// cm.warp(867111059);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.npc_ChangeController(9400031, "oid=1669417", -250, 93, 0);
		cm.npc_SetSpecialAction("oid=1669417", "summon");
		cm.npc_ChangeController(9400032, "oid=1669418", -460, 93, 0);
		cm.npc_SetSpecialAction("oid=1669418", "summon");
		cm.npc_ChangeController(9400033, "oid=1669419", -380, 93, 0);
		cm.npc_SetSpecialAction("oid=1669419", "summon");
		cm.npc_ChangeController(9400034, "oid=1669420", -330, 93, 0);
		cm.npc_SetSpecialAction("oid=1669420", "summon");
		cm.npc_ChangeController(9400035, "oid=1669421", -525, 93, 0);
		cm.npc_SetSpecialAction("oid=1669421", "summon");
		cm.inGameDirectionEvent_PushMoveInfo(0, 0, -330, 22);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("这到底是哪里？", 9400032);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 200, -330, -500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2614);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 200, 476, -500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4028);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 200, 476, 22);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2614);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 200, -330, 22);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4028);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1669417", -1);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1669417", 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("总感觉有一股可怕而奇异的气息！", 9400031);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("这里就是APORD的宇宙船吧。作为宇宙范畴的犯罪组织，也许他们在自己的宇宙船里设置了某种陷阱。大家要特别留心。", 9400034);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("不管有何种陷阱，只要能找到失踪的动物朋友……我不会惧怕任何东西。", 9400035);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("好……好吧，代号陈！出发！", 9400031);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1669418", 1, 550, 200);
		cm.npc_SetForceMove("oid=1669420", 1, 500, 150);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1669419", 1, 300, 150);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1669421", 1, 520, 200);
		cm.inGameDirectionEvent_AskAnswerTime(5200);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1669418", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1669419", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1669421", -1);
		cm.npc_setForceFlip("oid=1669420", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("怎么还不出发？", 9400032);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#小鬼，难不成你怕了？", 9400034);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("有、有什么好怕的！我这就！去！", 9400031);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1669417", 1, 1000, 300);
		cm.npc_setForceFlip("oid=1669418", 0);
		cm.npc_setForceFlip("oid=1669419", 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=1669420", 0);
		cm.npc_setForceFlip("oid=1669421", 0);
		cm.inGameDirectionEvent_AskAnswerTime(6200);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=1669417");
		cm.sendNextNoESC_Bottom("代号BT的那个人，越看越奇特。", 9400033);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1669418", 1, 500, 200);
		cm.npc_SetForceMove("oid=1669419", 1, 400, 150);
		cm.npc_SetForceMove("oid=1669420", 1, 400, 150);
		cm.npc_SetForceMove("oid=1669421", 1, 500, 200);
		cm.inGameDirectionEvent_AskAnswerTime(3200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setStandAloneMode(false);
		cm.setInGameDirectionMode(false, false, false);
		cm.playerMessage(5, "穿过陷阱，寻找嘟嘟吧！");
		cm.npc_LeaveField("oid=1669418");
		cm.npc_LeaveField("oid=1669419");
		cm.npc_LeaveField("oid=1669420");
		cm.npc_LeaveField("oid=1669421");
		ms.warp(867111000);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
