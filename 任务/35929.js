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
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#既然找到了答案，就快点离开这里吧，勇士？\r\n啊，对了……按照约定，现在我不会再跟着你了。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#不管你要去哪里，都希望你能多保重。\r\n虽然我很笨，又很胆小……还是谢谢你能带我一起来。", 1013350);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face0#啊，如果你想再来我们卡鲁帕村……\r\n你想接受吗？这是可以随时来到这里的技能。", 1013350);
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false, false);
		qm.setStandAloneMode(true);
		qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		qm.teachSkill(1297, 1, 1);
		qm.playerMessage(5, "获得了<返回帕勒坦>技能。");
		qm.getTopMsgFont("获得了<返回帕勒坦>技能。", 3, 20, 4, 0);
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#嘿嘿，希望什么时候能再见面。\r\n我会一直在这里等待着你的到来。", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face2#我会把在废墟听到的事情告诉卡鲁帕们。\r\n虽然不知道大家会不会相信。啊，高尔根说不定会相信的，嘿嘿。", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#呼……虽然没什么自信，但我会鼓起勇气的。\r\n将来的某一天，我也能成为像你一样勇敢的人吗？", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#呃啊，我又在胡说八道什么呢……\r\n现在你可以走了。我也该走了。再见！", 1013350);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#只顾自己说完就走掉了。是啊，你也要保重。", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#事情总算暂时告一段落了……。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1##b（诅咒之力没办法消除，那就只能勇敢面对了。\r\n我一定要将遗物的力量完全掌握在手中。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（通过冒险让自己变得更强，是吧？\r\n既然知道了克服诅咒的方法，那就继续去冒险吧。）#k", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face6##b（但是……穿黑袍的怪人，到底是什么人呢？\r\n意念说他在遗物中注入力量之后，就杳无音讯了。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（如果能将遗物的力量完全解放出来，说不定还能再次对话。\r\n在这之前，只能自己去调查了。）#k", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
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
		qm.dispose();
		qm.warp(910090314);
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
