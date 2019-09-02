// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	var mapId = ms.getMapId();
	if (mapId == 867111005) {
		action5(mode, type, selection);
	} else {
		action6(mode, type, selection);
	}
}

function action5(mode, type, selection) {
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
		ms.npc_ChangeController(1012106, "oid=116540", 4780, -56, 4);
		ms.npc_ChangeController(1012003, "oid=116541", 3302, 124, 5);
		ms.npc_ChangeController(1012133, "oid=116542", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=148896356", 4957, -66, 1);
		ms.npc_SetSpecialAction("oid=148896356", "summon");
		ms.npc_ChangeController(9400062, "oid=148896357", 5057, -66, 1);
		ms.npc_SetSpecialAction("oid=148896357", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.npc_SetForceMove("oid=148896356", -1, 30, 100);
		ms.sendNextNoESC_Bottom("你好，明明女士！我有件事想问问你！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("什么事情？", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我正在寻找一只和人一样大的青蛙，名字叫嘟嘟，您听说过吗？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这个嘛，我似乎没在这附近见过青蛙……", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你有听说过其他人看见过吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯……我倒是听说最近出现了特别凶残的怪物。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我去查看了那些怪物，发现它们身上都有奇怪的小小宝石……不过没什么别的发现。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("是吗？……嗯。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#嘤……看来在这里是找不到嘟嘟了……呜呜……它是我的好朋友……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你也挺可怜的，那我再帮你打听一下吧？", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("真的吗？！您真的要帮我吗？！那我能帮您做什么呢？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("既然如此，我就不客气了……呵呵。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不久前我拎着垃圾去外面，风太大了，把垃圾全都吹跑了。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我在村子里看了看，到处都是垃圾，真是太让我难堪了。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你能把那些地方的垃圾捡起来，然后打扫干净吗？", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#好的！我马上去！", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("这次是整理垃圾吗？还有垃圾剩余就好了……试试看吧。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=148896356");
		ms.npc_LeaveField("oid=148896357");
		ms.npc_LeaveField("oid=116540");
		ms.npc_LeaveField("oid=116541");
		ms.npc_LeaveField("oid=116542");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action6(mode, type, selection) {
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
		ms.npc_ChangeController(1012106, "oid=116551", 4720, -56, 5);
		ms.npc_ChangeController(1012003, "oid=116552", 3333, 124, 3);
		ms.npc_ChangeController(1012133, "oid=116553", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1807981", 4957, -66, 1);
		ms.npc_SetSpecialAction("oid=1807981", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("我清理了10个垃圾。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("噢！谢谢你。我也有个消息要告诉你~", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊！有什么消息吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我打听了一下，附近似乎没有人见过青蛙。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊……原来如此……看来它确实没有来这里。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那我就先告辞了……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("等等，你要不要去见见玛亚？玛亚说有人丢了乌龟，而不是青蛙……我想这件事是不是和你有关联。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("乌龟？嗯……我知道了，谢谢你告诉了我这么重要的情报。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("而且有消息说，在勇士部落有人正在贩卖珍稀动物。", 1012106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("贩卖珍稀动物？嗯，这个可能与嘟嘟有关……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("谢谢你的情报，明明女士！！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你太客气了，祝你好运！", 1012106);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("笔记本应该又有一页写满了吧？让我来确认一下。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.updateInfoQuest(16157, "point=162");
		ms.forceCompleteQuest(59708);
		ms.fieldEffect_KinesisEXP(2447700);
		ms.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.updateInfoQuest(18418, "B=163");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1807981");
		ms.npc_LeaveField("oid=116551");
		ms.npc_LeaveField("oid=116552");
		ms.npc_LeaveField("oid=116553");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
