/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  第一幕：866135000
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;
	if (ms.getLevel() < 11) {
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
ms.updateInfoQuest(26900, "mt=1");
ms.updateInfoQuest(26900, "mt=1;al=1");
ms.updateInfoQuest(26900, "mt=1;id=0;al=1");
ms.updateInfoQuest(26900, "mt=1;id=0;al=1");
ms.updateInfoQuest(26902, "");
ms.updateInfoQuest(26903, "");
ms.updateInfoQuest(26904, "");
ms.updateInfoQuest(26905, "");
ms.updateInfoQuest(26900, "sf=0;mt=1;id=0;al=1");
//ms.npc_ChangeController(9390308, "oid=114712", -710, 28, 0);
//ms.npc_ChangeController(9390307, "oid=114713", -1041, 28, 1);
//ms.npc_ChangeController(9390304, "oid=114714", 254, 28, 1);
//ms.npc_ChangeController(9390305, "oid=114715", 577, 28, 1);
//ms.npc_ChangeController(9390306, "oid=114716", 714, -72, 1);
//ms.npc_ChangeController(9390309, "oid=114717", -647, -166, 1);
//ms.npc_ChangeController(9390310, "oid=114718", 765, 28, 1);
ms.updateInfoQuest(6, "enter=201909");
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.updateInfoQuest(16119, "");
ms.updateInfoQuest(16150, "");
ms.updateInfoQuest(27039, "");
ms.updateInfoQuest(56995, "state=0");
ms.updateInfoQuest(14756, "d=19/09/24/00/59");
ms.updateInfoQuest(14755, "");
ms.updateInfoQuest(52998, "");
ms.updateInfoQuest(65132, "");
ms.updateInfoQuest(56070, "LUT=19000101");
ms.updateInfoQuest(61585, "0=20190924");
ms.updateInfoQuest(1025, "0=20190924");
ms.updateInfoQuest(26015, "");
ms.updateInfoQuest(26011, "");
ms.updateInfoQuest(19019, "id=0");
ms.updateInfoQuest(19019, "date=0;id=0");
ms.updateInfoQuest(19019, "expired=1;date=0;id=0");
ms.forceStartQuest(14431, "");
ms.forceStartQuest(15148, "");
ms.updateInfoQuest(16019, "");
ms.forceStartQuest(16019, "");
ms.forceStartQuest(16021, "");
ms.forceStartQuest(16023, "");
ms.updateInfoQuest(16025, "");
ms.forceStartQuest(16025, "");
ms.updateInfoQuest(16027, "");
ms.forceStartQuest(16027, "");
ms.forceStartQuest(16029, "");
ms.forceStartQuest(16874, "");
ms.forceCompleteQuest(16874);
ms.forceStartQuest(16875, "");
ms.forceCompleteQuest(16875);
ms.forceStartQuest(16876, "");
ms.forceCompleteQuest(16876);
ms.forceStartQuest(18938, "");
ms.forceStartQuest(33189, "");
ms.forceStartQuest(33190, "");
ms.forceStartQuest(33243, "");
ms.forceStartQuest(33265, "");
ms.forceStartQuest(33267, "");
ms.forceStartQuest(39346, "");
ms.forceStartQuest(500678, "");
ms.onScriptMessage(3, 0, 1, 9390305,  "我是 #b#h0##k!\r\n这里是亚伯兰森林中的大树村！", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.updateInfoQuest(32547, "lastDecTime=2019/09/24 00:59:16");
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.emotion(1, 2000);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390305,  "我的耳朵和尾巴是不是很神奇啊?", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.emotion(0, 5000);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390305,  "这不就是我将成为未来之英雄的证据吗?", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390305,  "每晚睡觉前,罗斯娜奶奶都会给我讲故事。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390305,  "击退可怕的#b黑魔法师#k的#b五大英雄#k之故事!!! \r\n我总有一天也会成为像他们一样的大英雄!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/10", 2000, 0, -120, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 700, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/7", 2000, 571, -120, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/sound0", 100);
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.emotion(4, 5000);
ms.onScriptMessage(3, 0, 1, 9390305,  "啊!出大事啦!!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.warp(866101000,0);
ms.dispose();
ms.setEventCount("林之灵第一幕", 1);
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