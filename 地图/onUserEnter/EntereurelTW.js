/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;
	if (ms.getQuestStatus(24008)==1) {
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
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 0,  "长老们? ", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 0,  "孩子们也......", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_LeaveField("oid=1333");
ms.npc_LeaveField("oid=1334");
ms.npc_LeaveField("oid=1335");
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 0,  "大家仍然被冰封着......", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.forceStartQuest(24009, "1");
ms.forceStartQuest(24008, "2");
ms.forceCompleteQuest(24008);
ms.dispose();
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