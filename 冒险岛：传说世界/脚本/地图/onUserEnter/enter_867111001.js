/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400042, "oid=1710276", 1380, 707, 1);
		ms.npc_SetSpecialAction("oid=1710276", "summon");
		ms.npc_ChangeController(9400043, "oid=1710277", 1080, 640, 0);
		ms.npc_SetSpecialAction("oid=1710277", "summon");
		ms.npc_ChangeController(9400044, "oid=1710278", 1530, 706, 1);
		ms.npc_SetSpecialAction("oid=1710278", "summon");
		ms.npc_ChangeController(9400045, "oid=1710279", 1712, 708, 1);
		ms.npc_SetSpecialAction("oid=1710279", "summon");
		ms.npc_ChangeController(9400046, "oid=1710280", 956, 705, 0);
		ms.npc_SetSpecialAction("oid=1710280", "summon");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_PushScaleInfo(150, 1400, 500, 1300, 650);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嘟嘟居然消失了……谁会做出这种事来……！", 9400042);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("出了这么大的事，我们不应该叫来我们村的英雄吗？！", 9400043);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("是啊，必须找她……！", 9400042);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好的！现在就去！", 9400044);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(9400031, "oid=1710566", 1280, 705, 0);
		ms.npc_SetSpecialAction("oid=1710566", "summon");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("拜托了……只有你才能解决这件事情……！", 9400042);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("作为我们村勇敢的林之灵……这件事能不能拜托给你呢？", 9400042);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#天啊！嘟嘟居然被绑架了……谁会做出这种事情！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("拜托了……请你一定要找回我们的嘟嘟！", 9400042);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我看到抓走嘟嘟的那个飞行物似乎是往那边飞走了……", 9400042);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嘟嘟从来没有离开过村子……它肯定会很害怕的，真是担心啊……", 9400042);
	} else if (status === i++) {
		ms.npc_ChangeController(9400065, "oid=1710703", 1134, 687, 0);
		ms.npc_SetSpecialAction("oid=1710703", "summon");
		ms.sendNextNoESC_Bottom("那边……是冒险岛世界！为什么要把嘟嘟带到冒险岛世界去呢？", 9400065);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("请不要担心，村长，还有各位村民。我是名侦探代号BT！我一定会把嘟嘟找回来的！", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetSpecialAction("oid=1710566", "fighting");
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.forceCompleteQuest(59702);
		ms.updateInfoQuest(59761, "1=1;2=1;3=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1710276");
		ms.npc_LeaveField("oid=1710277");
		ms.npc_LeaveField("oid=1710278");
		ms.npc_LeaveField("oid=1710279");
		ms.npc_LeaveField("oid=1710280");
		ms.npc_LeaveField("oid=1710566");
		ms.npc_LeaveField("oid=1710703");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.fieldEffect_KinesisEXP(ms.getPlayer().getLevel() * 10000);
		ms.dispose();
	}
}
