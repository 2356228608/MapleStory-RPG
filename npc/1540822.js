// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var text = "";
		if (ms.getInfoQuest(33961) == "") {
			text += "那，你要去见谁呢？\r\n#b#L0#精灵之王双弩精灵#l\r\n\r\n#L3##k考虑片刻。#l\r\n#L4##k前往联盟会场。#l";
		}
		if (ms.getInfoQuest(33961) == "33947=1") {
			text += "那，你要去见谁呢？\r\n#b#L1#怪盗幻影#l\r\n\r\n#L3##k考虑片刻。#l\r\n#L4##k前往联盟会场。#l";
		}
		if (ms.getInfoQuest(33961) == "33947=1;33948=1") {
			text += "那，你要去见谁呢？\r\n#b#L2#光之魔法师夜光法师#l\r\n\r\n#L3##k考虑片刻。#l\r\n#L4##k前往联盟会场。#l";
		}
		cm.onScriptMessage(3, 0, 0, 0, text, 0, 6, -123, 0, 1, 1540822); // [类型] 选择菜单
	} else if (status > 0) {
		switch (selectionLog[1]) {
		case 0:
			精灵之王双弩精灵(mode, type, selection, i);
			break;
		case 1:
			怪盗幻影(mode, type, selection, i);
			break;
		case 2:
			光之魔法师夜光法师(mode, type, selection, i);
			break;
		case 4:
			cm.dispose();
			cm.warp(913050010);
			break;
		default:
			cm.dispose();
		}
	} else {
		cm.dispose();
	}

}

function 精灵之王双弩精灵(mode, type, selection, i) {

	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "想要见双弩精灵就得前往精灵村庄#b埃欧雷#k了，\r\n那里距此地不远，用不了多久。\r\n那我们就出发了！", 256, 0, 37, 0, 1, 1540822); // [类型] 普通对话
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
		cm.setInGameDirectionMode(false, false, false);
		cm.dispose();
		cm.warp(350150100);
	} else {
		cm.dispose();
	}
}

function 怪盗幻影(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "是要去见#b幻影#k吗？", 0, 3, 36, 0, 1, 1540822); // [类型] 是/否
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "想要见幻影，唯一的线索就在#b玛加提亚#k。", 256, 0, 37, 0, 1, 1540822); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "最近有人发来了要在玛加提亚#b偷走宝石的预告函#k。", 257, 0, 37, 0, 1, 1540822); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "半天左右就能到玛加提亚了，\r\n那我们就出发前往玛加提亚了！", 257, 0, 37, 0, 1, 1540822); // [类型] 普通对话
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
		cm.npc_LeaveField("oid=481053715");
		// [2019/9/6 14:30:00] 当前所在地图: cm.warp(350150000) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150200);
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function 光之魔法师夜光法师(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "是要去见#b夜光法师#k吗？", 0, 3, 36, 0, 1, 1540822); // [类型] 是/否
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "想要见夜光法师，就得去魔法密林，\r\n那我们就出发了！", 256, 0, 37, 0, 1, 1540822); // [类型] 普通对话
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
		cm.npc_LeaveField("oid=481233401");
		// [2019/9/6 14:34:38] 当前所在地图: cm.warp(350150000) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150300);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
