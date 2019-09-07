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
	} else if (status == i++) {
		cm.sendNext_Bottom("#face3##b（遗物发出了明亮的光，似乎会有什么事情发生。\r\n必须集中精神。）#k", 1013358);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/relic");
		cm.fieldEffect_Unew150("", "Effect/Direction22.img/effect/PF_relic/skeleton", "1-->2", 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face3##b（伴随着神秘的光，遗物的力量又解放了一个阶段。\r\n感觉古代之力变得更强了。）#k", 1013358);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0##i03801377# #b（运用强化的古代之力，应该就可以使用更强的技能了……）#k", 1013358);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face2##b（真厉害……不试不知道，一试吓一跳。刚刚掌握，就已经这么厉害了……）#k", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0##i03801374#  #b（根据使用的#s3011004#暗红之力技能，遗物的纹样改变了。）#k", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0##i03801373#  #b（用#s3011004#暗红之力技能攻击敌人时，数值条会逐渐充满。）#k", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face1##b（消耗充满的数值条，可以使用强力技能#s3301008#……\r\n好好使用，今后一定能起到很大的作用。）#k", 1013358);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
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
		cm.setStandAloneMode(false);
		cm.setInGameDirectionMode(false, false, false);
		cm.changeJob(310);
		qm.gainItem(1592001, 1); //玛拉德远古弓 - 30级
		qm.gainItem(1353701, 1);//潜力遗物- 30级
		cm.openUI(1);
		cm.openUI(2);
		cm.openUIWithOption(3, 3);
		cm.forceCompleteQuest(35939);
		qm.dispose();
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
