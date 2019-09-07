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
		// cm.warp(867111140);
	} else if (status === i++) {
		// [2019/8/31 0:08:29] 之前所在地图: cm.warp(867111120) - 当前进入地图: cm.warp(867111140)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.npc_ChangeController(9400031, "oid=1671323", -570, 93, 0);
		cm.npc_SetSpecialAction("oid=1671323", "summon");
		cm.npc_ChangeController(9400032, "oid=1671324", -640, 93, 0);
		cm.npc_SetSpecialAction("oid=1671324", "summon");
		cm.npc_ChangeController(9400033, "oid=1671325", -700, 93, 0);
		cm.npc_SetSpecialAction("oid=1671325", "summon");
		cm.npc_ChangeController(9400034, "oid=1671326", -780, 93, 0);
		cm.npc_SetSpecialAction("oid=1671326", "summon");
		cm.npc_ChangeController(9400035, "oid=1671327", -830, 93, 0);
		cm.npc_SetSpecialAction("oid=1671327", "summon");
		cm.npc_ChangeController(9400036, "oid=1671328", 0, -30, 1);
		cm.npc_SetSpecialAction("oid=1671328", "summon");
		cm.npc_SetSpecialAction("oid=1671328", "tube1");
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.updateInfoQuest(18418, "B=268");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 0, 0, 0);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1671323", 1, 150, 300);
		cm.inGameDirectionEvent_AskAnswerTime(3200);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#怎……怎么办……嘟嘟变成了那样……呜呜", 256, 0, 37, 0, 1, 9400031); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=1671323", 1, 100, 100);
		cm.npc_SetForceMove("oid=1671324", 1, 150, 300);
		cm.npc_SetForceMove("oid=1671325", 1, 150, 300);
		cm.npc_SetForceMove("oid=1671326", 1, 200, 250);
		cm.npc_SetForceMove("oid=1671327", 1, 150, 290);
		cm.inGameDirectionEvent_AskAnswerTime(3200);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#嘟嘟！！嘟嘟！！是我呀，听到我的声音了吗？听到了吗！振作一点嘟嘟！！", 256, 0, 37, 0, 1, 9400031); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "...", 257, 0, 37, 0, 1, 9400036); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "嘟嘟！没错，是我呀，快变回原来的样子吧！！", 257, 0, 37, 0, 1, 9400031); // [类型] 普通对话
	} else if (status === i++) {
		cm.userSetFieldFloating(867111140, 2, 2, 2);
		cm.onScriptMessage(3, 0, 1, 0, "呱呱呱呱呱呱呱呱！！", 257, 0, 37, 0, 1, 9400036); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=1671328", "break");
		cm.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=1671328", "regen");
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=1671328", "trans");
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.userSetFieldFloating(867111140, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400031, 6654029);
		cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400032, 6654029);
		cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400033, 6654029);
		cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400034, 6654029);
		cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400035, 6654029);
		cm.onScriptMessage(3, 0, 1, 0, "刚刚看见了吗？宝石一发生变化，嘟嘟就暴走了。", 256, 0, 37, 0, 1, 9400034); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 10000, 0, -70, -30);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "看来是那个宝石吸收了嘟嘟的灵力并操纵了它的内心。", 256, 0, 37, 0, 1, 9400033); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "啊，嘟嘟的灵力正在急剧减少。", 257, 0, 37, 0, 1, 9400033); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#只要破坏那个就行吗？", 257, 0, 37, 0, 1, 9400032); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#那我们快点破坏那个东西，让嘟嘟恢复吧！", 257, 0, 37, 0, 1, 9400035); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "代号BT，没事吧？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#嗯……只要能让嘟嘟恢复……", 256, 0, 37, 0, 1, 9400031); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "好，那我们就快点帮一下嘟嘟吧。", 257, 0, 37, 0, 1, 9400033); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.playerMessage(5, "阻挡暴走的嘟嘟吧！");
		cm.npc_LeaveField("oid=1671323");
		cm.npc_LeaveField("oid=1671324");
		cm.npc_LeaveField("oid=1671325");
		cm.npc_LeaveField("oid=1671326");
		cm.npc_LeaveField("oid=1671327");
		cm.npc_LeaveField("oid=1671328");
		// [2019/8/31 0:09:18] 当前所在地图: cm.warp(867111140) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(867111150);
		// [2019/8/31 0:09:18] 当前所在地图: cm.warp(867111140) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.dispose();
	} else {
		ms.dispose();
	}
}
