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
		ms.fieldEffect_PlayFieldSound("Ambience.img/valley")
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 50, -45);
	} else if (status === i++) {
		ms.npc_ChangeController(1013350, "oid=2818771", -900, -180, 0);
		ms.npc_SetSpecialAction(1013350, "summon");
		ms.sendNextNoESC_Bottom("#face0#好了！炸药做好了，勇士。来，拿着。", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#好，放好之后，就快撤吧。一会儿点上火之后，就会爆炸。", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#是，勇士！", 1013350);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.Hidden_background("boom", 1);
		ms.Hidden_background("0", 0);
		ms.Hidden_background("1", 1);
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/rock");
		ms.inGameDirectionEvent_AskAnswerTime(900);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.Hidden_background("boom", 0);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3#……成功了吗？", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -550, -45);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -600, 0);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=2818771", 1, 140, 180);
		ms.inGameDirectionEvent_ForcedFlip10(2, 120);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -400, 40);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#啊……在那里，勇士！最后一块罗盘碎片！", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#三个罗盘碎片全都找到啦。\r\n现在回到高尔根家去吧，嘿嘿。", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3##b（罗盘碎片顺利搞定。\r\n前两个还比较容易，最后一个要不是有那个孩子，估计会很难。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#还是帮了不少……", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#什么，勇士？", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face6#没什么。快走吧。", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#嗯……明明听你好像说了什么……\r\n不，没什么。快走吧。到高尔根家去吧～！", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.forceCompleteQuest(35920);
		ms.warp(100051030);
		ms.dispose();
	} else if (status === i++) {
		ms.dispose();
	} else {
		ms.dispose();
	}
}
