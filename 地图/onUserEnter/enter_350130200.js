// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	if(ms.getInfoQuest(33990)!="rp=8"){
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// [2019/9/6 14:47:49] 之前所在地图: cm.warp(350130100) - 当前进入地图: cm.warp(350130200)
		cm.npc_ChangeController(1540860, "oid=58700", 1797, 60, 1);
		cm.npc_ChangeController(1540861, "oid=58701", 1647, 60, 1);
		cm.npc_ChangeController(1540855, "oid=58702", 883, 60, 1);
		cm.npc_ChangeController(1540862, "oid=58703", 616, 60, 1);
		cm.npc_ChangeController(1540863, "oid=58704", 533, 60, 1);
		cm.npc_ChangeController(1540864, "oid=58705", 455, 60, 1);
		cm.npc_ChangeController(1540868, "oid=58706", 1581, 60, 0);
		cm.npc_ChangeController(1540870, "oid=58707", 1142, 60, 1);
		cm.npc_ChangeController(1540871, "oid=58708", 2231, 60, 0);
		cm.npc_ChangeController(1540872, "oid=58709", 1964, 60, 0);
		cm.npc_ChangeController(1540873, "oid=58710", 1462, 60, 0);
		cm.npc_ChangeController(1540859, "oid=58711", 1042, 60, 1);
		cm.npc_ChangeController(1540867, "oid=58712", 1514, 60, 0);
		cm.npc_ChangeController(1540861, "oid=58713", 745, 60, 1);
		cm.npc_ChangeController(1540866, "oid=58714", 1396, 60, 1);
		cm.npc_ChangeController(1540795, "oid=58715", -153, 60, 1);
		cm.npc_ChangeController(1540853, "oid=58716", 1724, 60, 1);
		cm.npc_ChangeController(1540869, "oid=58717", 2180, 60, 0);
		cm.npc_ChangeController(1540854, "oid=58718", 2089, 60, 1);
		cm.npc_ChangeController(1540860, "oid=58719", 2031, 60, 1);
		cm.npc_ChangeController(1540885, "oid=58720", 2295, 60, 5);
		cm.npc_ChangeController(1540858, "oid=58721", 1243, 60, 1);
		cm.npc_ChangeController(1540852, "oid=58722", 807, 60, 5);
		cm.updateInfoQuest(33915, "act1=350112400;act2=350120000;act3=350130200;act4=350160000");
		cm.Hidden_background("party_Tuto4", 0);
		cm.forceStartQuest(33900, "9");
		cm.updateInfoQuest(33990, "check=1");
		cm.Hidden_background("party_Tuto", 0);
		cm.Hidden_background("party_Tuto2", 0);
		cm.Hidden_background("party_Tuto3", 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 220, 30);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face13#我们的作战计划很简单，大家应该不会忘了吧？\r\n尽可能减少骚乱，找到超越石的位置，并且尽可能偷到手。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#不是尽可能，而是绝对要！\r\n我下定决心偷的东西，可从来没有失败过。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face13#真的吗？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face10#其实只有一次，不过那段故事等你再稍微大一点我再讲给你听。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face13#总之大家不要忘了，超越石有可能会不见。\r\n阿布拉克萨斯虽然可以看到超越石的位置，但也只能知道个大概。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "就是说没什么是百分之百肯定的呗。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face11#如果情况糟糕，有可能那东西并不在那幢建筑物里，而是被埋在了江河之下。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那我们就只能希望那个来历不明的石块一定要在那栋建筑物里。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(5300);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "哇哦，有种回到故乡的感觉。", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face13#夜光法师和双弩精灵应该也开始行动了，\r\n我们就看状况加入吧。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#好吧，那就开始吧？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 3-\r\n#fs28#陌生的世界：#fs20#太古的遗物", 1);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/flowervioleta/wink", 100);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "最好是先和周围的人聊一聊，获得情报。", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.Hidden_background("party_Tuto", 1);
		cm.Hidden_background("party_Tuto2", 1);
		cm.Hidden_background("party_Tuto3", 1);
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.setInGameDirectionMode(false, false, false);
		cm.updateInfoQuest(33903, "rp=9");
		cm.Hidden_background("party_Tuto4", 0);
		cm.forceStartQuest(33900, "9");
		ms.dispose();
	} else {
		ms.dispose();
	}
}
