/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;
	if (!ms.isQuestFinished(59003)) {
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
ms.npc_ChangeController(9390300, "oid=114735", 284, 70, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.sendNextSNoESC("你没事吧，猫咪？"); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("谢，谢谢你喵…… 但是我现在有点内急…… 你到后面点，我好害羞喵。",9390300); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextSNoESC("好了吗？"); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("喵喵！！！很抱歉喵！！！你再等一会儿喵！！！！",9390300); // [类型] 普通对话
} else if (status === i++) {
cm.sendNextPrevNoESC("谢谢！但是我的铃铛不见了喵。\r\n\r\n好像是在那树上丢的…… 请按#b[Ctrl]#k键攻击那棵树，如果铃铛掉落下来，就按#b[Z]#k键拾取！", 9390300); // [类型] 普通对话
} else if (status === i++) {
cm.sendNextPrevNoESC("快找一下吧喵。要没有它的话,我跟赤身裸体没什么区别喵!",9390300); // [类型] 接受/拒绝
} else if (status === i++) {
cm.sendNextPrevNoESC("像刚才一样,在树前用#e#b[Ctrl]#k#n键进行攻击,铃铛的话,就用#e#b[Z]#k#n键捡取是吧?",9390300); // [类型] 普通对话
} else if (status === i++) {
cm.forceStartQuest(59004, "");
cm.gainItem(4034005, 1);
ms.forceCompleteQuest(59003);
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
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
