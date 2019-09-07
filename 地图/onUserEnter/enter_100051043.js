// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	if (!ms.isQuestActive(35925)) {//检查玩家目标任务是否进行中
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.onTeleport(1, ms.getPlayer().getId(), -686, 57);
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -755, 230);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("#face0#呃……我们离声音的源头好像越来越近了。\r\n嗯，在这边。", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs18#奇怪的黑泉", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -755, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#这是……一个巨大的水坑。\r\n而且水是黑色的……声音应该就是从下面传来的。", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 10);
		ms.sendNext_Bottom("#face3#等等，那个柱子上好像刻着什么。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -460, 60);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3##g“寻找路的人，穿过死亡沼泽，到这里来。”\r\n“连死亡都能驱散的光，将会为你照亮前行之路……”#k\r\n……上面是这么写的。", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#死亡沼泽……", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, -700, 60);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#哇，你能看懂这文字吗？\r\n我怎么看都不知道是什麽意思。呃……太难了……", 1013350);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（扔了块石头进去。石头沉了下去，然后化作一股烟消失了。\r\n要是掉下去，好像会很危险。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face6##b（战胜死亡的是光。是要用光来照亮水吗？\r\n会发光……而且在水里也不会熄灭的东西。#k", 1013358);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3#哦……我想到了。突破死亡沼泽的方法。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
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
		ms.forceCompleteQuest(35925);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
