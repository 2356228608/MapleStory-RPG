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
		cm.sendNext_Bottom("啊……你……", 3003658);
	} else if (status === i++) {
		cm.askAcceptDecline_Bottom("#face0##b（跟师父讲讲这段时间发生的事情吧。\r\n我好像隐隐约约想到了自己要去的地方。）#k", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0##b（跟赫丽娜讲述了之前发生的事。\r\n遗物和古代之弓……以及在遗迹中发生的一切。）#k", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("竟然遇到了这种事……还好你平安无事。\r\n那接下来你打算怎么办呢，#b#ho##k？", 3003658);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face6#意念让我去寻找属于自己的路。\r\n遗物选择我一定存在着某种理由。", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0#我觉得我要走的路，就在他所说的话中。\r\n我要通过冒险来找到答案。", 1013358);
	} else if (status === i++) {
		cm.sendNext_Bottom("看来你又成长了，#b#ho##k。\r\n和离开弓箭手培训中心的时候相比，你更像是一个堂堂正正的冒险家了。", 3003658);
	} else if (status === i++) {
		cm.sendNext_Bottom("希望你能找到属于自己的路。\r\n我会一直在这里关注着你。祝你好运。", 3003658);
	} else if (status === i++) {
		cm.sendNext_Bottom("#face0#我一定会找到属于我的冒险，师父。后会有期。", 1013358);
	} else if (status == i++) {
		qm.forceCompleteQuest();
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
