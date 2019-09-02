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
		ms.npc_ChangeController(9400032, "oid=1809207", -456, 17, 0);
		ms.npc_SetSpecialAction("oid=1809207", "summon");
		ms.npc_ChangeController(9400033, "oid=1809208", -581, 17, 0);
		ms.npc_SetSpecialAction("oid=1809208", "summon");
		ms.npc_ChangeController(9400049, "oid=1809209", -190, 17, 1);
		ms.npc_SetSpecialAction("oid=1809209", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("您终于来了！糟糕了，奈奈……奈奈……！", 9400049);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#哎？不见了？！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("就在我走神的时候……它就消失了。我真是没脸见您了。", 9400049);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("您不需要道歉。本来照看奈奈就是剑斗的工作。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这是“特别”交给剑斗的任务啊。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#说什么呢！我一开始就说不要啊！我可没闲到要照顾乌龟啊！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯……你真的不想照顾它吗……？", 9400033);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1809207");
		ms.npc_LeaveField("oid=1809208");
		ms.npc_LeaveField("oid=1809209");
		ms.warp(867111010);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
