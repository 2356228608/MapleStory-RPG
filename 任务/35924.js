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
		qm.sendNext_Bottom("#face1#啊，有好多石头做成的怪物……\r\n路被挡住了。它，它们好像想攻击我们，呃啊！", 1013350);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face1#勇士，好像没办法继续往前走了。\r\n如果能消灭掉#b50个#k#r#o2300207##k，应该就能把路打通……", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#在一边等着，小孩。我来搞定那些东西。", 1013358);
	} else if (status == i++) {
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
		qm.sendNext_Bottom("#face0#路打通了，勇士。\r\n我这就把你带到传来声音的地方去。好了，请跟我来。", 1013350);
	} else if (status === i++) {
		qm.forceCompleteQuest(35924);
		qm.OnStartNavigation(100051042, 1, "1013316", 35925);
		qm.gainExp(4000);//得到奖励经验
		qm.dispose();
	}
}
