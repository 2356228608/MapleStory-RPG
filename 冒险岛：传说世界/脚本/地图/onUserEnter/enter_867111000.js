/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {}
	else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.npc_ChangeController(9400047, "142142365", 552, 708);
		ms.npc_SetSpecialAction("142142365", "summon");
		ms.npc_ChangeController(9400048, "142142366", 356, 708);
		ms.npc_SetSpecialAction("142142366", "summon");
		ms.npc_ChangeController(9400036, "142142367", 940, 708);
		ms.npc_SetSpecialAction("142142367", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.effect_Text("#fn黑体##fs18#嘟嘟失踪1个小时前" 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.updateAchievement(558, 0, "");
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/love", 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/love", 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("哈哈哈，嘟嘟，谢谢你今天和我一起玩，真是太有趣了！", 9400047);
		ms.fieldEffect_PlayFieldSound("Sound/PL_3min.img/direction/frog_cry");
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("晚安，嘟嘟。明天见。", 9400048);
		ms.fieldEffect_PlayFieldSound("Sound/PL_3min.img/direction/frog_cry");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.npc_setForceFlip("142142365", -1);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("142142366", -1);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("呱呱呱呱！", 9400036);
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder2");
		ms.fieldEffect_PlayFieldSound("Sound/PL_3min.img/direction/frog_shout");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController("142142367");
		ms.npc_LeaveField("142142367");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3");
		ms.fieldEffect_PlayBGM("Bgm05.img/WolfWood");
		ms.npc_setForceFlip("142142365", 1);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这是什么声音？", 9400047);
		ms.npc_setForceFlip("142142366", 1);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嘟嘟的声音！", 9400048);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.npc_ChangeController(9400039, "142150855", 2257, 375);
		ms.npc_SetSpecialAction("142150855", "summon");
		ms.npc_ChangeController(9400041, "142150856", 2523, 375);
		ms.npc_SetSpecialAction("142150856", "summon");
		ms.npc_ChangeController(9400036, "142150857", 2381, 375);
		ms.npc_SetSpecialAction("142150857", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 300, 2000, 300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4469);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(200, 1500, 500, 2200, 300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff/emotionBalloon/exclamation3", 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_setForceFlip("142150855", 1);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.npc_ChangeController("142150855");
		ms.npc_LeaveField("142150855");
		ms.npc_ChangeController("142150856");
		ms.npc_LeaveField("142150856");
		ms.npc_ChangeController("142150857");
		ms.npc_LeaveField("142150857");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("糟糕了！我得告诉大家！", 9400048);
		ms.fieldEffect_PlayBGM("Bgm00.img/Silence");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
		ms.inGameDirectionEvent_AskAnswerTime(250);
	} else if (status === i++) {
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.updateAchievement(558, 0, "");
		ms.npc_LeaveField("142142365");
		ms.npc_LeaveField("142142366");
		ms.warp(867111001);
		ms.dispose();
	}
}
