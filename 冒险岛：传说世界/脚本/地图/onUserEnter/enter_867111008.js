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
		ms.npc_ChangeController(9400032, "oid=1809068", -100, 15, 0);
		ms.npc_SetSpecialAction("oid=1809068", "summon");
		ms.npc_ChangeController(9400033, "oid=1809069", 140, 15, 1);
		ms.npc_SetSpecialAction("oid=1809069", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("神那？你怎么来这儿了？", 9400032);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1809069", -1, 30, 100);
		ms.sendNextNoESC_Bottom("“奈奈”出了事，所以我就马上赶来了。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("剑斗怎么了？", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我……觉得应该来顺便看看……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……真的吗？你以前不是没有这么毫无理由地来过吗？", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#……够了，走吧。", 9400032);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1809068", 1, 100, 100);
		ms.npc_SetForceMove("oid=1809069", 1, 100, 100);
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1809068");
		ms.npc_LeaveField("oid=1809069");
		ms.warp(867111009);
		ms.dispose();
	} else {
		ms.dispose();
	}
}