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
		ms.npc_ChangeController(1012101, "oid=116563", 3, -61, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1808535", 149, -71, 1);
		ms.npc_SetSpecialAction("oid=1808535", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("你好，我能问你一件事吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好的~你好~！你有什么事呢？看样子你似乎在担心什么。", 1012101);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("其实我正在寻找一只叫嘟嘟的和人一样大的青蛙，你在附近有没有见过呢……？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯……和人一样大的青蛙……如果那么大，应该会很显眼啊，不过我不记得有见过啊。.", 1012101);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊……是吗。还有……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你说吧~~", 1012101);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我从明明女士那里听说，不久前有人丢了乌龟，找到了这里来。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你能告诉我一下那件事情的内容吗？作为同样丢失了动物的人……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#我想知道发生了什么事情。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊哈，虽然不知道有没有关联，但不久前确实有人来找丢失的乌龟。", 1012101);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我也不知道详细的情况。他们只是问我有没有见过乌龟。", 1012101);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("他们似乎还在村子里，你可以去问问他们。", 1012101);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好的，谢谢你提供的情报！！！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#(反正也不吃亏，我就去找他们问问吧。)", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("希望你能找到嘟嘟~！！！", 1012101);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.forceCompleteQuest(59710);
		ms.fieldEffect_KinesisEXP(2447700);
		ms.updateInfoQuest(59762, "1=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1808535");
		ms.npc_LeaveField("oid=116563");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}