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
ms.npc_ChangeController(9390304, "oid=114795", -396, 28, 0);
ms.npc_ChangeController(9390305, "oid=114796", -509, 28, 0);
ms.npc_ChangeController(9390306, "oid=114797", -448, 28, 1);
ms.npc_ChangeController(9390307, "oid=114798", -258, 28, 0);
ms.npc_ChangeController(9390308, "oid=114799", -330, 28, 0);
ms.npc_ChangeController(9390309, "oid=114800", -564, 28, 1);
ms.npc_ChangeController(9390310, "oid=114801", -602, 28, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.npc_ChangeController(9390383, "oid=20212863", -150, 0, 0);
ms.npc_SetSpecialAction("oid=20212863", "summon", 0, 0);
ms.npc_ChangeController(9390382, "oid=20212864", 200, 0, 0);
ms.npc_SetSpecialAction("oid=20212864", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9390383,  "很好! 老大,波波!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9390382,  "呃呵,波波做的好吗?", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "嘿嘿嘿,嗯!做的很好,可爱的小熊!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "呵…… 老大,我也……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "这么可爱,力气还那么大!!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "呃呵,呃呵!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "呃…… 老大……这……我?", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 1496, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2495);
} else if (status === i++) {
ms.npc_ChangeController(9390436, "oid=20212993", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20212993", "summon", 0, 0);
ms.npc_SetForceMove("oid=20212993",-1,950,100);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.npc_ChangeController(9390437, "oid=20212995", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20212995", "summon", 0, 0);
ms.npc_SetForceMove("oid=20212995",-1,600,100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_ChangeController(9390438, "oid=20213019", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20213019", "summon", 0, 0);
ms.npc_SetForceMove("oid=20213019",-1,900,100);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_ChangeController(9390439, "oid=20213020", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20213020", "summon", 0, 0);
ms.npc_SetForceMove("oid=20213020",-1,700,100);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.npc_ChangeController(9390440, "oid=20213022", 1496, 0, 1);
ms.npc_SetSpecialAction("oid=20213022", "summon", 0, 0);
ms.npc_SetForceMove("oid=20213022",-1,700,100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/22", 1500, 0, -150, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/22", 1500, 200, -150, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/23", 1500, -80, -150, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1800);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "哇啊!那些家伙还真缠人啊!!!\r\n老大!照此下去,真是没完没了,\r\n最好得赶紧让人们躲一躲才是。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "我觉得,我觉得,\r\n 波波觉得爬上那个木藤到树上的话,应该就可以。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "ok,波波。想法很好。\r\n 老大,就是得赶紧让人们躲一躲。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "知道了,就交给我好了!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(1300);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 9390383,  "各位!!!罗斯娜奶奶!布兰! 赫卡大嫂! \r\n 赶紧逃到那棵树上边去吧!!!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_LeaveField("oid=20212863");
ms.npc_LeaveField("oid=20212864");
ms.npc_LeaveField("oid=20212993");
ms.npc_LeaveField("oid=20212995");
ms.npc_LeaveField("oid=20213019");
ms.npc_LeaveField("oid=20213020");
ms.npc_LeaveField("oid=20213022");
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.dispose();
ms.forceCompleteQuest(59016);
ms.warp(866130000,0);

	} else {
		ms.dispose();
	}
}
