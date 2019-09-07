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
		cm.forceStartQuest(33900, "4");
		cm.fieldEffect_Unew150("Map/Effect2.img/Blizzard/skeleton", "normal", "", 257, 0, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Ambience.img/blizzard_soft")
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1134, 365);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_MoveAction(2);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.sendNextNoESC_Bottom("#face1#啊，是暴风雪！小心点！", 1540807);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(4);
		cm.fieldEffect_Unew150("Map/Effect2.img/Blizzard/skeleton", "normal", "", 257, 0, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/blizzard_strong");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Ambience.img/blizzard_soft")
		cm.sendNextNoESC_Bottom("主人，暴风雪来袭之前，#b似乎雪会暂停一会儿！#k \r\n我们看准时机，#b趴下#k藏好，就能避免冰冻！", 1540807);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("等暴风雪来袭，怪物都会被冻住，这样打猎也会更方便。", 1540807);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("别忘了，当我在飞龙穿梭#b(S)#k的时候，如果主人能够使用\r\n狂风穿梭#b(A)#k，\r\n就能够触发#b融合技能#k哦，主人。", 1540807);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
		cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
		cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
		cm.addPopupSay(1540805, 1000, "#face3#呆呆雪精灵！看看额头上的图案！");
		cm.addPopupSay(1540807, 1000, "看样子像是被什么人洗脑了吧。");
		cm.addPopupSay(1540805, 1000, "#face2#视线变得越来越糟糕了……");
		cm.updateInfoQuest(16119, "");
		cm.updateInfoQuest(16150, "");

		ms.dispose();
	} else {
		ms.dispose();
	}
}
