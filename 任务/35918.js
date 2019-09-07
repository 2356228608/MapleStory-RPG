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
		qm.sendNext_Bottom("#face1#呃啊，走开！快走开！\r\n像这样…… 木森林虫总是过来捣乱，根本没办法把罗盘碎片捡起来。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#勇士，勇士，要想把罗盘碎片捡起来，\r\n必须先解决掉这些烦人的虫子。", 1013350);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face1#消灭掉一些，周围应该就会安静一点……\r\n你能去教训#b30个#k左右的#r#o2300205##k吗？", 1013350);
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
		qm.sendNext_Bottom("#face2#哇，这么快就把周围清理干净啦。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#现在它们的气势好像也没那么嚣张了。\r\n好了，我去把罗盘碎片捡起来。", 1013350);
	} else if (status == i++) {
		qm.OnStartNavigation(100051032, 1, "1013313", 35919);
		qm.gainExp(4000);//得到奖励经验
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
