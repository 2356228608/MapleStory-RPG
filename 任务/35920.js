// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNext_Bottom("#face0#虽然威力不敢保证……但我想到了一个会嘭嘭爆炸的东西。\r\n过去村里举办节日的时候，曾经用它制作过烟花。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#那时使用的材料……让我想想……啊，对了，易燃的木柴和火石……\r\n都是在附近可以找到的东西。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#在之前那些森林虫身上应该能找到那两样东西。\r\n就是木森林虫和石森林虫。", 1013350);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face0#请你从森林虫身上搜集#b#i4036529# #t4036529##k和#b#i4036530# #t4036530##k各#b5个#k。\r\n哪里能找到森林虫，你应该已经知道了。", 1013350);
	} else if (status === i++) {
		qm.forceStartQuest(35920, "");
		qm.OnStartNavigation(100051033, 0, "", 34920);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
		qm.getEA();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	//(mode == 1) ? status++ : status--;
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false, false);
		qm.setStandAloneMode(true);
		qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		qm.sendNextNoESC_Bottom("#face2#嘿嘿，材料全都搜集到啦。\r\n我来帮你把木柴和火石混合在一起，做成炸药。", 1013350);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.OverlapScreenDetail19(0, 1000, 3000, 1);
		qm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		qm.fieldEffect_RemoveOverlapScreenDetail(1000);
		qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		qm.setStandAloneMode(false);
		qm.setInGameDirectionMode(false, false, false);
		qm.warp(910090309);
		qm.gainExp(4000);//得到奖励经验
		qm.dispose();
	} else if (status == i++) {
		//qm.forceCompleteQuest();
		qm.dispose();
	}
}
