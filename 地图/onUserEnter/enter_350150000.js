// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function action(mode, type, selection) {
	if (ms.getQuestStatus(33961) == 1) {
		action1(mode, type, selection)
	} else if (ms.getInfoQuest(33961) == "33947=1;33948=1;33949=1") {
		action2(mode, type, selection)
	} else {
		ms.dispose();
		return;
	}
}

function action1(mode, type, selection) {
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
		// [2019/9/6 14:26:18] 之前所在地图: cm.warp(913050010) - 当前进入地图: cm.warp(350150000)
		cm.npc_ChangeController(1540822, "oid=60096", 152, -175, 0);
		cm.Hidden_background("HofM_1540822", 0);
		cm.npc_ChangeController(1540807, "oid=480898915", 230, -100, 0);
		cm.npc_SetSpecialAction("oid=480898915", "summon", 0, 0);
		cm.updateInfoQuest(33907, "check0=1");
		cm.forceStartQuest(33900, "6");
		cm.Hidden_background("HofM_1540822", 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
		cm.fieldEffect_Unew150("Map/Effect2.img/Cloud/skeleton", "animation", "", 1, 1, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1);
		cm.curNodeEventEnd(true);
		cm.effect_Text("#fn黑体##fs18#几天后……    #fs15##fnNanum Gothic#圣地上空", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BlackOut", "", 2, 3000, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(14000, 1000, 14000, 200, -100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(12000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 1.5-\r\n#fs28# 重逢: #fs20#英雄的重逢", 1);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/flowervioleta/wink", 100);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "欢迎光临，龙神！", 256, 0, 37, 0, 1, 1540822); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我已经听南哈特说了，你要去会见传说中的英雄们？我会保证你旅途平安的。", 257, 0, 37, 0, 1, 1540822); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#谢谢，毕竟要米乐一直背着我也不太容易。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#主人可比看上去沉多了，想要运走可要好一会儿呢。", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#什么叫运走，别把我说的跟行李似的。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "哈哈，不愧是龙神呢！\r\n我还是头一次见到有人能和龙开玩笑的。", 257, 0, 37, 0, 1, 1540822); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那么，就请告诉我你打算去哪里吧。", 257, 0, 37, 0, 1, 1540822); // [类型] 普通对话
	} else if (status === i++) {
		cm.Hidden_background("HofM_1540822", 1);
		cm.setInGameDirectionMode(false, false, false);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action2(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	}else if (status === i++) {
		// [2019/9/6 14:36:32] 之前所在地图: cm.warp(350150300) - 当前进入地图: cm.warp(350150000)
		cm.npc_ChangeController(1540822, "oid=60096", 152, -175, 0);
		cm.Hidden_background("HofM_1540822", 0);
		cm.npc_ChangeController(1540807, "oid=481376044", 230, -100, 0);
		cm.npc_SetSpecialAction("oid=481376044", "summon", 0, 0);
		cm.Hidden_background("HofM_1540822", 1);
		cm.forceStartQuest(33900, "6");
		cm.updateInfoQuest(33952, "a=2;b=1;p1=1;p2=1;p3=1;p4=1;p5=1;p6=1;result=4;x=3");
		cm.onScriptMessage(3, 0, 0, 0, "该见的人都已经见过了，要回到#b圣地#k吗？", 0, 3, 36, 0, 1, 1540822); // [类型] 是/否
	} else if (status === i++) {
		cm.forceStartQuest(33954, "");
		cm.onScriptMessage(3, 0, 0, 0, "我知道了，\r\n那就回圣地。", 256, 0, 37, 0, 1, 1540822); // [类型] 普通对话
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 198, 800);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=481376044");
		// [2019/9/6 14:36:50] 当前所在地图: cm.warp(350150000) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150400);
		cm.dispose();
	} else {
		ms.dispose();
	}
}
