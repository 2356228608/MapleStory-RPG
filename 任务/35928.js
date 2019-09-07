// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false, false);
		qm.setStandAloneMode(true);
		qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		qm.askMenuNoESC_Bottom("#face0#啊……感受到了，你心中的那个谜团。\r\n你要找的答案就在这里。\r\n\r\n#b#L0# 遗物和诅咒之印 #l", 1013360);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
		qm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		qm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_past/0", 0, 500, 0, -85, -12, 4, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#很久以前便生活在这里的古代的卡鲁帕们，\r\n将神圣的树砍下来，做成神物以供崇拜。", 1013360);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face3#那是……", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#那种神物就是遗物。\r\n可以治好伤者，为迷路的人指明道路。", 1013360);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#但是，随着时间的推移……\r\n当世界的秩序开始形成，遗物的力量就自然而然地变弱了。", 1013360);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#知道遗物存在的人逐渐消失，一切都变成了传说。", 1013360);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#要是能那样被人遗忘就好了……", 1013360);
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		qm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_past/1", 0, 500, 0, -85, -12, 4, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#几百年前的某一天，一个穿着黑袍的怪人出现了。\r\n他冲着遗物施展了邪恶的魔法。", 1013360);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#仪式结束之后，他把遗物放回了原处，然后忽然消失了。\r\n那天之后，遗物就逐渐开始被邪恶的气息所侵蚀……", 1013360);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face3#穿着黑袍的怪人？", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0);
		qm.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0);
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission4");
		qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#现在你手上的那个遗物中，同时存在着古代之力和堕落之力。\r\n你也应该隐约地感觉到了。", 1013360);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#堕落之力与遗物融为一体，现在已经无法让它消失了。\r\n……但是可以抑制住它。", 1013360);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#成为遗物真正的主人。\r\n那是控制住堕落之力的唯一方法。", 1013360);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#灵物可以认出自己的主人。\r\n因此遗物会对你的意志做出反应，解放出隐藏的力量。", 1013360);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#通过冒险，让自己变得更强吧。\r\n到时机成熟的时候，遗物将会引导你……", 1013360);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#希望你能找到属于自己的路……", 1013360);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
		qm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#找到属于自己的路……", 1013358);
	} else if (status === i++) {
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
		qm.forceStartQuest();
		qm.npc_LeaveField(1013318);
		qm.dispose();
		qm.warp(100051040);
	}
}

function end(mode, type, selection) {
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
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
