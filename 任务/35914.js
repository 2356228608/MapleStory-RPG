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
		qm.sendNext_Bottom("#face0#我有个用来找东西的罗盘。\r\n只要把与想找的东西有关的东西放上去，它就会指出方向。", 1013351);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face0#要是感兴趣，就跟我来。\r\n就在房子后面，不用走太远。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（和想找的东西有关的东西……\r\n那么把遗物放上去，也许就能找到某种和遗迹有关的东西。）#k", 1013358);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.OnStartNavigation(100051030, 1, "1013321", 35914);
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
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#那可是不管什么东西都能找到的家伙，真可惜。\r\n不过如果能找到所有碎片重新拼好，应该还能启动。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#我，我……很忙，所以一直没去找……\r\n如果你想启动罗盘，就必须找齐碎片，咳咳。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#碎片掉在哪里了呢？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#那，那个……", 1013351);
	} else if (status == i++) {
		qm.gainExp(2500);//得到奖励经验
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
