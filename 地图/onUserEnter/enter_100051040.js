// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (ms.getQuestStatus(35928) == 1) {
		action35928(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action35928(mode, type, selection) {
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
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -200, 90);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence");
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm51.img/TheVillageOfKarupa");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#啊……真神奇。两人竟然能同时听到不同的话语。\r\n……从里面的意念那里。", 1013350);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#太好了，我们都找到了各自想要的答案。\r\n虽然有点辛苦……唉……让我再来一次，恐怕就做不到了。", 1013350);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0##b（据那个小孩说，从意念那里知道了有关遗迹怪声的事情。\r\n今后怪声将不再会出现。）#k", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0##b（据意念说，怪声是为了保护后代的卡鲁帕们，\r\n让他们免受邪恶气息的伤害。）#k", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0##b（遗迹的堕落之力和古代之力一起传给了遗物……\r\n今后遗迹应该就不会再发出怪声了。）#k", 1013358);
	} else if (status === i++) {
		cm.updateInfoQuest(35947, "30=1;12=1;22=1;16=1;26=1;29=1;2=1;6=1");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setStandAloneMode(false);
		cm.setInGameDirectionMode(false, false, false);
		qm.forceCompleteQuest(35928);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
