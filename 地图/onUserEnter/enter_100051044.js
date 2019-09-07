// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	if (!ms.getQuestStatus(35927)==1) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(1013318, -382, -73, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.onTeleport(1, ms.getPlayer().getId(), -975, 56);
		ms.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -1145, 268);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.npc_ChangeController(1013350, -1096, 43, 0);
		ms.npc_SetSpecialAction(1013350, "summon");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -1010, 85);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs18#片刻之后，意念之屋", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#哈……真是太可怕了。差点就成了水鬼……\r\n要不是你灵光闪现……嘿，嘿……。", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#不过总算是安全到达了目的地。\r\n……这里就是怪声的根源。", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3##b（在房间的中央，好像有什么东西在发光。\r\n走过去看看吧。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -400, -45);
	} else if (status === i++) {
		ms.npc_SetForceMove(1013318, 1, 400, 150);
		ms.inGameDirectionEvent_ForcedFlip10(2, 450);
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#你是沿着隐秘之路来到此地的人。\r\n你有资格成为那种力量的主人。", 1013360);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（房间里响起了低沉的声音。\r\n如果可以对话，最好还是直接问问看。）#k", 1013358);
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
		ms.sendNext_Bottom("......");
	} else if (status === i++) {
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.forceCompleteQuest(35927);
		while (ms.getLevel() < 30) {
			ms.levelUp();
		}
		ms.dispose();
	} else if (status === i++) {
		ms.dispose();
	} else {
		ms.dispose();
	}
}
