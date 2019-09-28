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

ms.npc_ChangeController(9390304, "oid=114777", -396, 28, 0);
ms.npc_ChangeController(9390305, "oid=114778", -509, 28, 0);
ms.npc_ChangeController(9390306, "oid=114779", -448, 28, 1);
ms.npc_ChangeController(9390307, "oid=114780", -258, 28, 0);
ms.npc_ChangeController(9390308, "oid=114781", -330, 28, 0);
ms.npc_ChangeController(9390309, "oid=114782", -564, 28, 1);
ms.npc_ChangeController(9390310, "oid=114783", -602, 28, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.npc_ChangeController(9390383, "oid=20211455", -300, 0, 0);
ms.npc_SetSpecialAction("oid=20211455", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9390383,  "做得很好,老大!\r\n我真是太惊讶了!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9390383,  "真的?我干的很漂亮是吗?\r\n我真的是像一个英雄一样消灭怪物的吗?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/21", 1500, -270, -150, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1800);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "稍等!\r\n我闻到了非常危险的气味。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 1496, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2495);
} else if (status === i++) {
ms.npc_ChangeController(9390443, "oid=20211574", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20211574", "summon", 0, 0);
ms.npc_SetForceMove("oid=20211574",-1,1100,100);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.npc_ChangeController(9390436, "oid=20211588", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20211588", "summon", 0, 0);
ms.npc_SetForceMove("oid=20211588",-1,1000,100);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.npc_ChangeController(9390437, "oid=20211599", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20211599", "summon", 0, 0);
ms.npc_SetForceMove("oid=20211599",-1,600,100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_ChangeController(9390438, "oid=20211601", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20211601", "summon", 0, 0);
ms.npc_SetForceMove("oid=20211601",-1,900,100);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_ChangeController(9390439, "oid=20211603", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20211603", "summon", 0, 0);
ms.npc_SetForceMove("oid=20211603",-1,700,100);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.npc_ChangeController(9390440, "oid=20211605", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20211605", "summon", 0, 0);
ms.npc_SetForceMove("oid=20211605",-1,700,100);
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(10000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "真是些烦人的家伙啊!\r\n 嘿~ 老大! 那个家伙,让我一个人对付吧？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20211455", "special0", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_LeaveField("oid=20211455");
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/ChapterA/11", 2150, -300, 0, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.fieldEffect_Tremble(0, 350, 30);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse0", 100);
ms.npc_SetSpecialAction("oid=20211574", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(450);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
ms.fieldEffect_Tremble(0, 0, 30);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.npc_ChangeController(9390383, "oid=20211899", 20, 0, 0);
ms.npc_SetSpecialAction("oid=20211899", "summon", 0, 0);
ms.npc_SetSpecialAction("oid=20211899", "freeze0", 0, 1);
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/0", 700, 90, -150, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(750);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "呃!那个家伙,竟然穿了我的爪子抓不穿的盔甲!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20211899", "move", 0, 1);
ms.npc_SetForceMove("oid=20211899",-1,150,100);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "切,这个家伙怎么这么慢啊?", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/21", 1500, -150, -150, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.fieldEffect_Tremble(0, 0, 30);
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/12", 1000, 0, -200, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_Tremble(0, 0, 30);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_Tremble(0, 0, 30);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/PoPo1", 100);
ms.inGameDirectionEvent_AskAnswerTime(200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/ChapterA/15", 1700, 200, 0, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/PoPo2", 100);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_Tremble(0, 0, 30);
ms.npc_SetSpecialAction("oid=20211574", "die1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(150);
} else if (status === i++) {
ms.npc_ChangeController(9390382, "oid=20212037", 200, 0, 0);
ms.npc_SetSpecialAction("oid=20212037", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.npc_SetForceMove("oid=20212037",-1,30,100);
ms.npc_SetSpecialAction("oid=20211899", "move", 0, 1);
ms.npc_SetForceMove("oid=20211899",1,50,100);
ms.inGameDirectionEvent_AskAnswerTime(1550);
} else if (status === i++) {
ms.npc_LeaveField("oid=20211574");
ms.fieldEffect_PlayBGM("BgmBT.img/RemembranceBear", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "我觉得…… 波波……好脏……呜呃呃……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "哇! 是可爱的小熊哦!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ 像熊一样慢到家的家伙!!! \r\n 为何这么晚才出现啊？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "嘿嘿!我觉得,波波……确实是熊, 嘿嘿嘿!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "赶紧醒醒啊,波波! \r\n 现在正需要你那无知的力量呢!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嗯?这个可爱的小熊也是冒险岛动物英雄团吗?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "那个,那个,叫我波波吧。 嘿嘿。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "啊,好可爱!!!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "呃呵,呃呵", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetForceMove("oid=20211588",-1,100,100);
ms.npc_SetForceMove("oid=20212037",1,30,100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_LeaveField("oid=20211588");
ms.inGameDirectionEvent_AskAnswerTime(2500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "吓……吓一大跳……\r\n有点害怕呢……", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "呃呵,呃呵!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "(总……总觉得有点害怕!!!)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿~ 波波！现在没空让你这样了。\r\n 你也快和老大签订守护契约，然后去消灭那个硬帮帮的家伙吧！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "嗯!知道了,来,就和波波签订契约吧。嘿嘿嘿。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.npc_SetForceMove("oid=20212037",-1,80,100);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "嚓,嚓,嚓!!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "来,老大!现在就用波波的力量,消灭那个家伙吧!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.forceCompleteQuest(59013);
ms.forceStartQuest(11620, "0");
ms.updateInfoQuest(15710, "lasttime=19/09/24/01/07");
ms.npc_LeaveField("oid=20211599");
ms.npc_LeaveField("oid=20211601");
ms.npc_LeaveField("oid=20211603");
ms.npc_LeaveField("oid=20211605");
ms.npc_LeaveField("oid=20211899");
ms.npc_LeaveField("oid=20212037");
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.dispose();
ms.forceCompleteQuest(59015);
ms.warp(866128000,0);

	} else {
		ms.dispose();
	}
}
