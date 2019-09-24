/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;
	var info = ms.getInfoQuest(32970);
	if (!ms.isQuestFinished(32970)) {
		action1(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
    ms.curNodeEventEnd(true);
    ms.setInGameDirectionMode(true, false, false);
    ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
    ms.setStandAloneMode(true);
    ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -400, -25);
} else if (status === i++) {
    ms.curNodeEventEnd(true);
    ms.onTeleport(1, ms.getPlayer().getId(), 360, -30);

    //防重复
    ms.npc_LeaveField("oid=20567094");
    ms.npc_LeaveField("oid=20567095");
    ms.npc_LeaveField("oid=20567096");
    ms.npc_LeaveField("oid=20567097");
    ms.npc_LeaveField("oid=20567098");

    ms.npc_ChangeController(2560009, "oid=20567094", -560, -30, 0);
    ms.npc_SetSpecialAction("oid=20567094", "summon");
    ms.npc_ChangeController(2560009, "oid=20567095", -710, -30, 0);
    ms.npc_SetSpecialAction("oid=20567095", "summon");
    ms.npc_ChangeController(2560009, "oid=20567096", -280, -30, 1);
    ms.npc_SetSpecialAction("oid=20567096", "summon");
    ms.npc_ChangeController(2560009, "oid=20567097", -80, -30, 1);
    ms.npc_SetSpecialAction("oid=20567097", "summon");
    ms.npc_ChangeController(2560003, "oid=20567098", -400, -30, 1);
    ms.npc_SetSpecialAction("oid=20567098", "summon");
    ms.npc_SetSpecialAction("oid=20567098", "stand2");
    ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
    ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
    ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
    ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
    ms.npc_SetSpecialAction("oid=20567094", "die1");
    ms.npc_SetSpecialAction("oid=20567095", "die1");
    ms.npc_SetSpecialAction("oid=20567096", "die1");
    ms.npc_SetSpecialAction("oid=20567097", "die1");
    ms.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
    ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
    ms.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
    ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
    ms.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
    ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
    ms.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
    ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
    ms.sendNextNoESC_Bottom("#face0#轻松搞定。", 2560003);
} else if (status === i++) {
    ms.sendNextSNoESC_Bottom("（哇……）");
} else if (status === i++) {
    ms.npc_SetForceMove("oid=20567098", 1, 10, 150);
    ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
    ms.inGameDirectionEvent_AskAnswerTime(230);
} else if (status === i++) {
    ms.sendNextNoESC_Bottom("#face0#嗯？", 2560003);
} else if (status === i++) {
    ms.npc_setForceFlip("oid=20567098", -1);
    ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
    ms.npc_SetSpecialAction("oid=20567098", "fight");
    ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
    ms.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
    ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
    ms.sendNextNoESC_Bottom("#face0#哎呀，差点漏掉了一个。", 2560003);
} else if (status === i++) {
    ms.sendNextSNoESC_Bottom("那么强，那么帅……\r\n有时真的很难相信他就是#r不洁者#k……");
} else if (status === i++) {
    ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
    ms.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
    ms.inGameDirectionEvent_Monologue("只要有机会，我就会出神地偷看他战斗的场景。", 0);
} else if (status === i++) {
    ms.effect_Voice("Voice3.img/DLep5/pangF/B_1.mp3", 100);
    ms.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
    ms.inGameDirectionEvent_Monologue("坚定的脚步，敏捷的身形，高超华丽的剑术。", 0);
} else if (status === i++) {
    ms.effect_Voice("Voice3.img/DLep5/pangF/B_2.mp3", 100);
    ms.inGameDirectionEvent_Monologue("他是个很强大骑士。", 1);
} else if (status === i++) {
    ms.effect_Voice("Voice3.img/DLep5/pangF/B_3.mp3", 100);
    ms.inGameDirectionEvent_Monologue("但是……现实却不允许我崇拜他。", 0);
} else if (status === i++) {
    ms.effect_Voice("Voice3.img/DLep5/pangF/B_4.mp3", 100);
    ms.inGameDirectionEvent_Monologue("因为他是#r不洁者#k。", 0);
} else if (status === i++) {
    ms.effect_Voice("Voice3.img/DLep5/pangF/B_5.mp3", 100);
    ms.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
    ms.inGameDirectionEvent_Monologue("我的任务就是欺骗他。", 1);
} else if (status === i++) {
    ms.effect_Voice("Voice3.img/DLep5/pangF/B_6.mp3", 100);
    ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
    ms.sendNextSNoESC_Bottom("在外面的世界，也许我也是个帅气的骑士。");
} else if (status === i++) {
    ms.sendNextSNoESC_Bottom("也许……但估计不可能。");
} else if (status === i++) {
    ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
    ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
    ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
    //顺序不能错 移除、处理、传送、解锁
    ms.npc_LeaveField("oid=20567094");
    ms.npc_LeaveField("oid=20567095");
    ms.npc_LeaveField("oid=20567096");
    ms.npc_LeaveField("oid=20567097");
    ms.npc_LeaveField("oid=20567098");
    ms.dispose();
    ms.warp(307000110);
    ms.setStandAloneMode(false);
    ms.setInGameDirectionMode(false, false, false);
	} else {
		ms.dispose();
	}
}

function action2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(1000);

	} else if (status === i++) {
		// 收尾
		ms.warp(992000000, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// NPC离场
		ms.npc_LeaveField(2540000);
	} else {
		ms.dispose();
	}
}