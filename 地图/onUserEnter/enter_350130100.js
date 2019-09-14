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
		// [2019/9/6 14:47:21] 之前所在地图: cm.warp(350130020) - 当前进入地图: cm.warp(350130100)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.curNodeEventEnd(true);
		cm.onScriptMessage(3, 0, 1, 0, "#face13#听清了吗？现在很快就要开始作战了。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/BR/1", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face13#那就从现在开始吧，这里不是冒险岛世界，最好行动不要太过显眼。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/BR/2", 128);
		cm.onScriptMessage(3, 0, 1, 0, "那可不行。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/BR/3", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face17#什么？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/BR/4", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face10#在这个世界，我的外貌也太过显眼了，这还叫我怎么秘密作战呢？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/BR/5", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face12#幻影……没时间东张西望了，阿布拉克萨斯之眼确实就朝着那幢建筑物里面。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/BR/6", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face5#别担心，这种事情我最在行。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/BR/7", 128);
		cm.fieldEffect_PlayBGM("Bgm45/Jazz For Dr Lim", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(7000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(5500);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#浩瀚博物馆 #fs15##fnNanum Gothic#- 其他次元的城市", 100, 1500, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		// [2019/9/6 14:47:49] 当前所在地图: cm.warp(350130100) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.updateInfoQuest(33903, "rp=8");
		cm.warp(350130200);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
