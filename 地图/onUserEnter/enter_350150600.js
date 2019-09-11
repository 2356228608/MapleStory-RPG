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
		// [2019/9/6 14:39:47] 之前所在地图: cm.warp(350150500) - 当前进入地图: cm.warp(350150600)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 1900, -190);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n冒险岛英雄\r\n#fs28#- 接下来的故事", 1);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#米乐，就是那里。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/theme30", 100);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 5000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(18000, 1000, 18000, 1525, 50);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#弗里德留给我们的，肯定就藏在这个沙漠的什么地方。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#我们一定要在这里找到。\r\n#b注视之神，阿布拉克萨斯#k的遗迹！", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 4000, 0);
		cm.fieldEffect_Unew150("Map/Effect2.img/HofM/HofM_logo/logo_cn", "animation", "", 1, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/logo2", 100);
		cm.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("mark", "Map/Effect2.img/HofM/toBeContinued", 0, 2500, 0, 0, 16, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		// [2019/9/6 14:40:27] 当前所在地图: cm.warp(350150600) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(913050010);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
