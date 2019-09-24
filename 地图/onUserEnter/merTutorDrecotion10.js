/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;
function action(mode, type, selection) {
	status++;
	if (!ms.getQuestStatus(24007)==1) {
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
ms.npc_ChangeController(1033202, "oid=214359", -106, -303, 1);
ms.npc_ChangeController(1033203, "oid=214360", -191, -303, 1);
ms.npc_ChangeController(1033204, "oid=214361", -13, -303, 1);
ms.npc_ChangeController(1033205, "oid=214362", -1531, 1, 1);
ms.npc_ChangeController(1033103, "oid=214363", 766, -94, 1);
ms.npc_ChangeController(1033104, "oid=214364", 586, 1, 0);
ms.npc_ChangeController(1033105, "oid=214365", 863, 1, 1);
ms.npc_ChangeController(1033106, "oid=214366", 702, 1, 0);
ms.npc_ChangeController(1033000, "oid=214367", 1585, 1, 1);
ms.npc_ChangeController(1033001, "oid=214368", 1529, -158, 1);
ms.npc_ChangeController(1033002, "oid=214369", 1550, -315, 1);
ms.npc_ChangeController(1033206, "oid=214370", 1085, 1, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_Effect( "Effect/Direction5.img/effect/mercedesInIce/merBalloon/6", 3300, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(2);
ms.updateInfoQuest(24006, "Afrien=o;Eurel=1");
ms.inGameDirectionEvent_Effect( "Effect/Direction5.img/effect/mercedesInIce/merBalloon/8", 2000, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.dispose();
ms.getTopMsgFont("按下键盘的[Alt]键就能跳跃。", 3, 20, 20, 0);
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