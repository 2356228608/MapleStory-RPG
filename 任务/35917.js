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
		qm.sendNext_Bottom("#face0#唉……真是乱来。向勇士提出了这么多奇怪的要求。\r\n他其实不是个坏人。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#啊，对了。快去找罗盘碎片吧。\r\n从现在开始，我来给你带路。", 1013350);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face2#嘿嘿，和我一起去，应该很快就能找到罗盘碎片。\r\n因为我很熟悉这里的路。好了……你想跟我一起去吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#好的，请跟我来，勇士。\r\n嘿嘿，我们快到森林虫之地去寻找罗盘碎片吧～！", 1013350);
	} else if (status === i++) {
		qm.OnStartNavigation(100051031, 1, "1013312", 35917);
		qm.forceStartQuest();
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
		qm.sendNext_Bottom("#face0#森，森林虫之地到了。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#高尔根说的没错，确实有罗盘碎片掉在地上……\r\n但是……有好多虫子……", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（周围森林里的虫子总是跑过来捣乱。\r\n这样好像没办法把碎片捡起来。）#k", 1013358);
	} else if (status === i++) {
		qm.gainExp(4000);//得到奖励经验
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
