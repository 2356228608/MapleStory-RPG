/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;
	if (!ms.isQuestFinished(56427)) {
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
ms.npc_ChangeController(9390467, "oid=114733", 286, 71, 1);
ms.forceStartQuest(56427, "");
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_ForcedFlip10(2, 100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.sendNextSNoESC("咿呀！未来的冒险岛英雄！到达大人们都恐惧的狼之森林！！",9390300); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextSNoESC("嗯?那个陷阱是什么?好像还有什么东西……我得去看看!!",9390300); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("喂,可爱的人,救救我喵!",9390467); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("哇!猫居然会说话啊!!!",9390467); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("喵!!我是会说话的猫阿尔喵!!!\r\n啊,现在重要的不是这个喵。",9390467); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("现在掉到陷阱里而无法出去喵。\r\n而且我还想撒尿喵。\r\n可不可以救我一下喵。",9390467); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("把这个捕兽器摧毁喵。请试着用力连击#e#b[Ctrl]#k#n键喵。大概按几次，捕兽器就会被摧毁了喵。",9390467); // [类型] 接受/拒绝
} else if (status === i++) {
ms.sendNextPrevNoESC("在陷阱前连击#e#b[Ctrl]#k#n键是吧?",9390467); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("哦耶！你好像和我一样聪明喵。",9390467); // [类型] 普通对话
} else if (status === i++) {
ms.forceStartQuest(59003, "");
ms.forceStartQuest(56427, "");
ms.effect_OnUserEff("Effect/Direction14.img/effect/ShamanBT/ChapterA/29");
ms.updateInfoQuest(59003, "react1=1");
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.forceCompleteQuest(59002);
ms.dispose();
ms.warp(866104000);
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
