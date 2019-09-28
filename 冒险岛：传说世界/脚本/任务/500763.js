/* [冒险岛联盟]冒险岛联盟的开端
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();

	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/flyingPaper", 128);
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHome/4", 0, 150, 200, -500, 12, 4, 0);
		cm.fieldEffect_ProcessOnOffLayer("0", "", 1, 600, -200, 400, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 1, 450, 150, 300, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 600, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b啊，吓死我了！这是什么？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("1", "Effect/DirectionWz2.img/effect/myHome/3", 0, 500, 0, 100, 12, 7, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_ProcessOnOffLayer("1", "", 1, 1000, 0, -200, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b……在卖射手村的蘑菇屋？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("1", "", 1, 1000, 0, -300, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b还只要50万金币？！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 1000, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.setInGameDirectionMode(false, true, false);
		cm.onScriptMessage(3, 0, 0, 0, "#b这怎么可能……我在冒险岛世界也能有自己的房屋了吗？\r\n#L0#这是梦还是真的啊？必须抢在别人签约前赶紧去！#l\r\n#L1#现在很忙，有空再来吧。#l\r\n#r※ [我的小屋]每个世界内的账号只能进行1次教程任务，完成教程时，世界内的所有角色都能使用[我的小屋]。在进行剧情时无法变更角色，请慎重决定！\r\n#k※接受时将马上前往任务地区。", 0, 6, 57, 0, 1, 0); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
			cm.updateInfoQuest(64590, "rMap=" + cm.getMapId());
			// [2019/9/28 8:17:59] 即将切换地图: cm.warp(105000000) -> cm.warp(871000010)
			cm.warp(871000010);
		} 
		cm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
