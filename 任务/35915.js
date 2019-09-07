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
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#如果你愿意听我的命令……不，接受我的请求，我就告诉你。\r\n别皱眉头。其，其实也没那么难。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#我好像说过吧，收集古董是我的爱好。\r\n但是……自从罗盘坏掉之后，就没法找到新的古董了。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#所以必须通过其他方法来收集古董，嗯哼。\r\n这一带的怪物也会掉落古董，呵呵……", 1013351);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face1#你只要帮我从#r#o2300203##k身上搜集#b15个#k#b#i4036527# #t4036527##k就行。\r\n陶瓷兔是#r#m100051022##k很常见的怪物。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#如果你不肯答应，我也不能告诉你罗盘碎片掉在了什么地方。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#如果你愿意听我的命令……不，接受我的请求，我就告诉你。\r\n别皱眉头。其，其实也没那么难。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#我好像说过吧，收集古董是我的爱好。\r\n但是……自从罗盘坏掉之后，就没法找到新的古董了。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#所以必须通过其他方法来收集古董，嗯哼。\r\n这一带的怪物也会掉落古董，呵呵……", 1013351);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face1#你只要帮我从#r#o2300203##k身上搜集#b15个#k#b#i4036527# #t4036527##k就行。\r\n陶瓷兔是#r#m100051022##k很常见的怪物。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#陶瓷兔拥有的碎片是我喜欢的收藏品。\r\n好的，那就拜托了，呵呵……", 1013351);
	} else if (status == i++) {
		qm.OnStartNavigation(100051022, 0, "", 35915);
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
		qm.sendNext_Bottom("#face0#哦，陶瓷碎片已经搜集到了吗？一，二……\r\n哦，数量刚刚好。这种东西……毋庸置疑是古代的东西。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#嗯，怎么回事？你是在想，“还不快告诉我碎片掉在什么地方了”吗？\r\n抱歉，我还有一个请求，嗯哼，嗯哼。", 1013351);
	} else if (status == i++) {
		qm.gainExp(2500);//得到奖励经验
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
