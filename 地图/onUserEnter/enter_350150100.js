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
		// [2019/9/6 14:27:08] 之前所在地图: cm.warp(350150000) - 当前进入地图: cm.warp(350150100)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.forceStartQuest(33900, "6");
		cm.npc_ChangeController(1540801, "oid=480939582", -300, -400, 0);
		cm.npc_SetSpecialAction("oid=480939582", "summon", 0, 0);
		cm.npc_ChangeController(1540807, "oid=480939583", -1470, -130, 1);
		cm.npc_SetSpecialAction("oid=480939583", "summon", 0, 0);
		cm.npc_ChangeController(1540829, "oid=480939584", -105, -400, 0);
		cm.npc_SetSpecialAction("oid=480939584", "summon", 0, 0);
		cm.npc_ChangeController(1540831, "oid=480939585", -10, -400, 1);
		cm.npc_SetSpecialAction("oid=480939585", "summon", 0, 0);
		cm.npc_ChangeController(1540832, "oid=480939586", 700, -40, 0);
		cm.npc_SetSpecialAction("oid=480939586", "summon", 0, 0);
		cm.npc_ChangeController(1540833, "oid=480939587", 600, -40, 0);
		cm.npc_SetSpecialAction("oid=480939587", "summon", 0, 0);
		cm.npc_ChangeController(1540834, "oid=480939588", 800, -40, 1);
		cm.npc_SetSpecialAction("oid=480939588", "summon", 0, 0);
		cm.npc_SetSpecialAction("oid=480939582", "special1", -1, 1);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -180, -1500);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("精灵村庄，埃欧雷。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("数百年前，冰冷笼罩在此地的残酷诅咒，", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("直到精灵之王归来，到现在却仍没有消失。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(7000, 1000, 7000, -180, -400);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(7000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "果然用任何魔法都无法解开黑魔法师的诅咒啊。", 256, 0, 37, 0, 1, 1540831); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "虽说我们好不容易从寒冰中逃了出来，\r\n可孩子们抵抗力弱，看样子是没办法了吧。", 257, 0, 37, 0, 1, 1540829); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=480939584", -1);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "您来了，王。", 256, 0, 37, 0, 1, 1540829); // [类型] 普通对话
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -180, -300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=480939582");
		cm.npc_ChangeController(1540780, "oid=480961071", -300, -400, 0);
		cm.npc_SetSpecialAction("oid=480961071", "summon", 0, 0);
		cm.inGameDirectionEvent_Effect("Skill/800019.img/skill/80001935/effect", 0, -300, -310, 1, 0, 1, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#孩子们呢？", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "还在沉睡。", 257, 0, 37, 0, 1, 1540829); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#我又找来了点冬季之花的叶片，用这些能够唤醒孩子们吗？", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 708, -20);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.onScriptMessage(3, 0, 1, 0, "……", 256, 0, 37, 0, 1, 1540829); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "……", 257, 0, 37, 0, 1, 1540831); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -180, -300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#……都怪我能力不够。", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "您不要这么说。", 257, 0, 37, 0, 1, 1540831); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "从没有人责怪过您的决定。", 257, 0, 37, 0, 1, 1540829); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#我原以为只要打败了黑魔法师，世界就会迎来和平。", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#但是谁能想到我的这种选择却让整个种族陷入了危机……\r\n继续这样下去，我真是没脸见先王了。", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "双弩精灵！", 256, 0, 37, 0, 1, 1540830); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=480961071", -1);
		cm.npc_ChangeController(1540830, "oid=480974431", -620, -150, 1);
		cm.npc_SetSpecialAction("oid=480974431", "summon", 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -180, -180);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=480974431", 1, 200, 100);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "您正好在呢，双弩精灵！有客人来了呢？", 256, 0, 37, 0, 1, 1540830); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "客人？", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=480939583", "special5", -1, 1);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -1415, 10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#哇，主人！这里有一些长得很奇怪的果实！\r\n果然精灵村庄就是不一样啊！", 256, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#米乐，体面一点！我们可是来拜见王的。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "……", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "总是将那个少年和弗里德作比较应该不只是我的错吧。", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "哈哈……", 257, 0, 37, 0, 1, 1540830); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=480939583");
		cm.npc_LeaveField("oid=480939584");
		cm.npc_LeaveField("oid=480939585");
		cm.npc_LeaveField("oid=480961071");
		cm.npc_LeaveField("oid=480974431");
		// [2019/9/6 14:28:08] 当前所在地图: cm.warp(350150100) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.setInGameDirectionMode(false, false, false);
		cm.forceCompleteQuest(33961);
		cm.updateInfoQuest(33961, "33947=1");
		cm.warp(350150110);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
