/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]魔链影士系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;

	if (!ms.isQuestActive(34600) && !ms.isQuestFinished(34600)) {
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
cm.updateInfoQuest(26900, "mt=1");
cm.updateInfoQuest(26900, "mt=1;al=1");
cm.updateInfoQuest(26900, "mt=1;id=0;al=1");
cm.updateInfoQuest(26900, "mt=1;id=0;al=1");
cm.updateInfoQuest(26902, "");
cm.updateInfoQuest(26903, "");
cm.updateInfoQuest(26904, "");
cm.updateInfoQuest(26905, "");
cm.updateInfoQuest(26900, "sf=0;mt=1;id=0;al=1");
cm.updateInfoQuest(34655, "0=1");
cm.forceCompleteQuest(34655);
cm.forceStartQuest(11620, "0");
cm.updateInfoQuest(15710, "lasttime=19/09/19/00/13");
cm.updateInfoQuest(25980, "normal=#");
cm.updateInfoQuest(25980, "normal=#;hard=#");
cm.forceStartQuest(11620, "0");
cm.forceStartQuest(11620, "0");
cm.forceStartQuest(11620, "0");
cm.forceStartQuest(11620, "0");
cm.forceStartQuest(11620, "0");
cm.forceStartQuest(11620, "0");
cm.forceStartQuest(11620, "0");
cm.forceStartQuest(11620, "0");
cm.updateInfoQuest(34655, "gender=1;0=1");
cm.updateInfoQuest(34655, "10=1;gender=1;0=1");
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, false, false);
cm.setStandAloneMode(true);
cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 288, -57);
} else if (status === i++) {
cm.updateInfoQuest(16119, "");
cm.updateInfoQuest(16150, "");
cm.updateInfoQuest(27039, "");
cm.updateInfoQuest(56995, "state=0");
cm.updateInfoQuest(14756, "d=19/09/19/00/13");
cm.updateInfoQuest(14755, "");
cm.updateInfoQuest(52998, "");
cm.updateInfoQuest(65132, "");
cm.updateInfoQuest(56070, "LUT=19000101");
cm.updateInfoQuest(61585, "0=20190919");
cm.updateInfoQuest(1025, "0=20190919;1=20190918;2=20190917;3=20190916;4=20190915;5=20190912;6=20190909;7=20190906;8=20190905");
cm.updateInfoQuest(26015, "");
cm.updateInfoQuest(26011, "");
cm.updateInfoQuest(32547, "lastDecTime=2019/09/19 00:13:11");
cm.updateInfoQuest(19019, "id=0");
cm.updateInfoQuest(19019, "date=0;id=0");
cm.updateInfoQuest(19019, "expired=1;date=0;id=0");
cm.forceStartQuest(15148, "");
cm.updateInfoQuest(16019, "");
cm.forceStartQuest(16019, "");
cm.forceStartQuest(16021, "");
cm.forceStartQuest(16023, "");
cm.updateInfoQuest(16025, "");
cm.forceStartQuest(16025, "");
cm.updateInfoQuest(16027, "");
cm.forceStartQuest(16027, "");
cm.forceStartQuest(16029, "");
cm.forceStartQuest(16874, "");
cm.forceCompleteQuest(16874);
cm.forceStartQuest(16875, "");
cm.forceCompleteQuest(16875);
cm.forceStartQuest(16876, "");
cm.forceCompleteQuest(16876);
cm.forceStartQuest(500678, "");
cm.forceStartQuest(62458, "");
cm.forceStartQuest(62462, "");
cm.forceStartQuest(62464, "");
ms.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.playVideoByScript("Cadena1.avi");
ms.playerMessage(-1, "播放动画失败。");
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(4);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_OneTimeAction(4, 100);
ms.onScriptMessage(3, 0, 1, 3001270,  "#face4#不要！！！！！！！！！！！！！！！！！！！！！！！", 256, 0, 37, 0, 1, 3001270); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(5);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_ForcedFlip10(1, 100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(5);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(5);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_ForcedFlip10(1, 200);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_ForcedFlip10(2, 50);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_ForcedFlip10(1, 50);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_OneTimeAction(4, 1000);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.getTopMsgFont("点击灯泡，即可开始任务。任务状态快捷键(Q)/选择型(J)", 3, 20, 20, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.effect_OnUserEff("UI/tutorial.img/34");
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.setInGameDirectionMode(false, false, false);
ms.setStandAloneMode(false);
//灯泡任务呢？源里屏蔽了？
ms.forceStartQuest(34600);
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
