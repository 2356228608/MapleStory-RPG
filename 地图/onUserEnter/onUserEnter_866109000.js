/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

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
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.npc_ChangeController(9390442, "oid=20209907", 77, 0, 1);
ms.npc_SetSpecialAction("oid=20209907", "summon", 0, 0);
ms.npc_ChangeController(9390432, "oid=20209908", 184, 0, 1);
ms.npc_SetSpecialAction("oid=20209908", "summon", 0, 0);
ms.npc_ChangeController(9390433, "oid=20209909", 246, 0, 1);
ms.npc_SetSpecialAction("oid=20209909", "summon", 0, 0);
ms.npc_ChangeController(9390434, "oid=20209910", 327, 0, 1);
ms.npc_SetSpecialAction("oid=20209910", "summon", 0, 0);
ms.npc_ChangeController(9390435, "oid=20209911", 393, 0, 1);
ms.npc_SetSpecialAction("oid=20209911", "summon", 0, 0);
ms.npc_ChangeController(9390304, "oid=20209912", -209, 0, 1);
ms.npc_SetSpecialAction("oid=20209912", "summon", 0, 0);
ms.npc_ChangeController(9390305, "oid=20209913", -359, 0, 1);
ms.npc_SetSpecialAction("oid=20209913", "summon", 0, 0);
ms.npc_ChangeController(9390306, "oid=20209914", -389, 0, 1);
ms.npc_SetSpecialAction("oid=20209914", "summon", 0, 0);
ms.npc_ChangeController(9390307, "oid=20209915", -169, 0, 1);
ms.npc_SetSpecialAction("oid=20209915", "summon", 0, 0);
ms.npc_ChangeController(9390308, "oid=20209916", -259, 0, 1);
ms.npc_SetSpecialAction("oid=20209916", "summon", 0, 0);
ms.npc_ChangeController(9390309, "oid=20209917", -409, 0, 1);
ms.npc_SetSpecialAction("oid=20209917", "summon", 0, 0);
ms.npc_ChangeController(9390310, "oid=20209918", -459, 0, 1);
ms.npc_SetSpecialAction("oid=20209918", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1700);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209907", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209908", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209909", "attack1", 0, 1);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209907", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209910", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209911", "attack1", 0, 1);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/10", 2000, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.emotion(5, 1500);
ms.inGameDirectionEvent_AskAnswerTime(2100);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/9", 2000, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_SetForceMove("oid=20209910",1,100,100);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.npc_SetForceMove("oid=20209911",1,120,100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209907", "attack1", 0, 1);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209910", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209908", "attack1", 0, 1);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209911", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209909", "attack1", 0, 1);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.emotion(5, 5000);
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/10", 1000, 0, -120, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_OneTimeAction(444, 540);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/ChapterA/7", 3620, -160, 0, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse0", 100);
ms.fieldEffect_Tremble(0, 300, 30);
ms.npc_SetSpecialAction("oid=20209911", "hit1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse1", 100);
ms.npc_SetSpecialAction("oid=20209910", "hit1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(350);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209911", "hit1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(50);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209910", "hit1", 0, 1);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse2", 100);
ms.fieldEffect_Tremble(0, 600, 30);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209911", "die1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209910", "die1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20209909", "die1", 0, 1);
ms.npc_SetSpecialAction("oid=20209908", "die1", 0, 1);
ms.npc_SetSpecialAction("oid=20209907", "die1", 0, 1);
ms.npc_LeaveField("oid=20209911");
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse0", 100);
ms.npc_LeaveField("oid=20209910");
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_LeaveField("oid=20209909");
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_LeaveField("oid=20209908");
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_LeaveField("oid=20209907");
ms.inGameDirectionEvent_AskAnswerTime(740);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_ChangeController(9390383, "oid=20210183", 540, 0, 0);
ms.npc_SetSpecialAction("oid=20210183", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1300);
} else if (status === i++) {
ms.fieldEffect_PlayBGM("BgmBT.img/rock'nBattleTiger", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20210183", "special0", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ 可爱的小孩！你是#b#h0##k吗？我从阿尔那里得到消息之后，就亲自来找你，你居然和这些弱爆了的家伙在一起！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "额啊！！什么啊！是凶猛的猛兽！！", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ 怕什么,好让我伤心哦。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "呃,竟然还说话啊? \r\n难道你就是猫猫#b阿尔#k所说的#b同伴#k?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ 小鬼。\r\n还挺机灵的嘛。\r\n我的名字叫#b拉伊#k,是一只勇敢的#b雪豹#k。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "哇~!你好啊。\r\n其他同伴呢?#b阿尔#k呢?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ 小鬼。那件事以后再说~\r\n 最好抓紧时间。\r\n 赶紧先和我签订#b守护契约#k。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "守护契约?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "这~ 这~ #b阿尔#k这家伙,看来连一句都没说啊?\r\n 就是让你可以使用我们#b动物英雄之力量#k的契约。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "#b动物英雄们的力量#k?你?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ 小鬼,没时间了。\r\n 赶紧出来击三次掌啊!!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/Contract", 100);
ms.onScriptMessage(3, 0, 1, 9390383,  "嚓,嚓,嚓!!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "呃?就这样结束了?", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ #b老大#k! \r\n 契约可不一定越复杂越好哦!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.forceCompleteQuest(59008);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_LeaveField("oid=20210183");
ms.npc_LeaveField("oid=20209912");
ms.npc_LeaveField("oid=20209913");
ms.npc_LeaveField("oid=20209914");
ms.npc_LeaveField("oid=20209915");
ms.npc_LeaveField("oid=20209916");
ms.npc_LeaveField("oid=20209917");
ms.npc_LeaveField("oid=20209918");
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.dispose();
ms.warp(866126000,0);
	} else {
		ms.dispose();
	}
}
