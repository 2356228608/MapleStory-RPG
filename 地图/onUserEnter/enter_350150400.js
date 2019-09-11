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
		// [2019/9/6 14:36:50] 之前所在地图: cm.warp(350150000) - 当前进入地图: cm.warp(350150400)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.npc_ChangeController(1540838, "oid=481388671", -2135, -374, 0);
		cm.npc_SetSpecialAction("oid=481388671", "summon", 0, 0);
		cm.npc_ChangeController(1540807, "oid=481388672", -1911, -360, 1);
		cm.npc_SetSpecialAction("oid=481388672", "summon", 0, 0);
		cm.forceStartQuest(33900, "6");
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2100, -320);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "……原来是这样，你已经去见过所有英雄了吗？", 256, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你离开的这段日子，发生了许多事情。\r\n没想到魔族军并没有入侵神木村南部，而是去了里恩岛，\r\n我分散了联盟军，派兵去了神秘岛的西部战线。", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "多亏了你给的情报，我们才能够迅速做出对策。\r\n还有最重要的是……", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "谢谢你救了我妹妹，\r\n若不是你，利琳会沦为魔族军的俘虏的。", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "联盟军今后打算怎么办呢？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "敌人人数众多，还是先保持警戒吧。\r\n虽然阿弗利埃的事情很令人惋惜，\r\n但想要将牺牲减少到最小，我认为应该尽可能避免正面战。", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "恩，我明白你的意思了。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "所以，你的下一个目的地是哪儿？", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/8", 128);
		cm.onScriptMessage(3, 0, 1, 0, "很抱歉，除了要和我一起去的人，我谁都不能说。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/9", 128);
		cm.onScriptMessage(3, 0, 1, 0, "恩，没错，\r\n毕竟这是先祖直到最后豁出性命只为给我们留下的线索！", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/10", 128);
		cm.onScriptMessage(3, 0, 1, 0, "这样啊，这也没什么……\r\n不过如果你是要去闷热的地方旅行，最好是多备些水。", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/11", 128);
		cm.onScriptMessage(3, 0, 1, 0, "！！", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#你，你怎么会？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/13", 128);
		cm.onScriptMessage(3, 0, 1, 0, "世界上没有不透风的墙。\r\n想要知道你们翻过了什么文献，做了什么调查，这一点并不难。", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/14", 128);
		cm.onScriptMessage(3, 0, 1, 0, "你记住，对手并不好对付，\r\n既然我能够搞明白，对方也稍微会有些头绪的。", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/15", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#……恩，我会记住的。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/16", 128);
		cm.onScriptMessage(3, 0, 1, 0, "那么，祝你在全新的地方和你的新同伴能够好运。", 257, 0, 37, 0, 1, 1540838); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/17", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_KinesisEXP(3334174);
		cm.forceCompleteQuest(33950);
		cm.updateInfoQuest(33961, "33950=1;33947=1;33948=1;33949=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=481388671");
		cm.npc_LeaveField("oid=481388672");
		// [2019/9/6 14:37:24] 当前所在地图: cm.warp(350150400) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150500);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
