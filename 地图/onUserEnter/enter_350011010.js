/*
 * 黑色天堂剧情 - 1
 * 地图：黑色天堂的事先定义(350011010)
 * @author 娜娜
 */
var status = -1;

function action(mode, type, selection) {

	status++;

	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		cm.npc_ChangeController(1540446, "oid=32531", -576, 156, 1);
		cm.updateInfoQuest(33128, "act1=350011010");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(1540502, "oid=8202556", 43, 146, 0);
		cm.npc_SetSpecialAction("oid=8202556", "summon");
		cm.npc_ChangeController(1540503, "oid=8202557", 191, 146, 1);
		cm.npc_SetSpecialAction("oid=8202557", "summon");
		cm.npc_ChangeController(1540504, "oid=8202558", -80, 146, 0);
		cm.npc_SetSpecialAction("oid=8202558", "summon");
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 50, 210);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("你明明晚出了啊. \r\n你这骗子一样的家伙. ", 1540502);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("骗子一样的家伙?\r\n你刚刚说我是骗子一样的家伙?", 1540503);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("抱歉, 我说得有些过分了. ", 1540502);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("我可不是像骗子一样的家伙. \r\n我就是骗子. 嘻嘻嘻!", 1540503);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=8202558", 1, 490, 200);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=8202557", 1);
		cm.inGameDirectionEvent_PushMoveInfo(0, 200, 175, 146);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3700);
	} else if (status === i++) {
		cm.userSetFieldFloating(350011010, 0, 10, 1000);
		cm.sendNextNoESC_Bottom("如果继续等哥哥们争论下去, 天都要亮了. ", 1540504);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=8202558", "spin");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Voice("Weapon.img/spear/Attack");
		cm.npc_LeaveField("oid=8202558");
		cm.inGameDirectionEvent_PushMoveInfo(0, 500, -70, 326);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=8202557", -1);
		cm.sendNextNoESC_Bottom("……就是说, 你早就应该听我的话. ", 1540502);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=8202556", 1, 380, 300);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=8202557", 1);
		cm.inGameDirectionEvent_PushMoveInfo(0, 500, 175, 146);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=8202556", "spin");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Voice("Weapon.img/spear/Attack");
		cm.npc_LeaveField("oid=8202556");
		cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 1-\r\n#fs28#黑色之翼的黑幕", 1);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/flowervioleta/wink");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=8202557", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Ambience.img/flyingdeck")
		cm.updateInfoQuest(33151, "onBoard=1");
		cm.setInGameDirectionMode(false, false, false);
		cm.userSetFieldFloating(350011010, 0, 10, 1000);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.sendNextNoESC_Bottom("队长, 你做好准备了吗?能和你一起战斗我很荣幸. \r\n我已经从希纳斯女皇那里听说了, 你的实力十分出众. ", 1540503);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("我来介绍一下自己吧. 我叫德皮. \r\n刚刚跳下去的是我的大哥古皮, 还有我的小妹莉皮. ", 1540503);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#b布吉#k肯定会平安无事的. \r\n为此, 我们来到了这个地方, 而且还有队长率领着我们. ", 1540503);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("好了, 我们先热热身吧?\r\n我会先跳下去, 队长你准备好之后, 就跳下来吧!", 1540503);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=8202557", 1);
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=8202557", 1, 350, 300);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=8202557", "spin");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Voice("Weapon.img/spear/Attack");
		cm.npc_LeaveField("oid=8202557");
		cm.updateInfoQuest(16157, "point=272");
		cm.forceCompleteQuest(33150);
		cm.updateInfoQuest(18418, "B=273");
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		//ms.warp(910000000, 0);
		//ms.addPopupSay(1540108, 3000, "剧情未完善.已被遣送回来");
	} else {
		ms.dispose();
	}
}
