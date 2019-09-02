// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(1012106, "oid=116507", 4753, -56, 5);
		ms.npc_ChangeController(1012003, "oid=116508", 3367, 124, 5);
		ms.npc_ChangeController(1012133, "oid=116509", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1543349", 5536, 438, 1);
		ms.npc_SetSpecialAction("oid=1543349", "summon");
		ms.npc_ChangeController(9400063, "oid=1543350", 5736, 438, 1);
		ms.npc_SetSpecialAction("oid=1543350", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("#face2#我得先在这个射手村找找嘟嘟。这里是人们来往最多的地方！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("寻找失踪的人或动物时，首先就应该张贴传单！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我得在人多的地方贴上传单，说不定会有人提供情报！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好，在这里贴上事先制作好的传单吧。", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1543349", -1, 100, 100);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("嗯……在射手村贴传单的部分结束了。我也得照做才能看到接下来的故事吧？");
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("前往射手村继续下个行动吧。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1543349");
		ms.npc_LeaveField("oid=1543350");
		ms.npc_LeaveField("oid=116507");
		ms.npc_LeaveField("oid=116508");
		ms.npc_LeaveField("oid=116509");
		ms.warp(867111050);
		ms.npc_ChangeController(9400050, "oid=116637", 1018, 574, 1);
		ms.updateInfoQuest(59746, "");
		ms.setStandAloneMode(true);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
