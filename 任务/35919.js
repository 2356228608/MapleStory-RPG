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
		qm.sendNext_Bottom("#face1#勇士，勇士！找，找到罗盘碎片啦！\r\n但，但是……这里也有好多虫子！", 1013350);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face1#呃啊，看来这次还得消灭掉一些虫子，周围才能安静一点！\r\n请你去教训#b30个#k左右的#r#o2300206##k！", 1013350);
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
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#哇，这次又这么快就解决啦。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#现在它们的气势好像也没那么嚣张了。\r\n好了，我去把罗盘碎片捡起来。", 1013350);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.OnStartNavigation(100051034, 0, "", 35920);
		qm.sendNext_Bottom("#face2#嘿嘿，第二个碎片回收完成！\r\n现在还剩下一个碎片。只要再跑一个地方就行了。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#好了，我们去寻找最后的罗盘碎片吧～！", 1013350);
	} else if (status === i++) {
		qm.gainExp(4000);//得到奖励经验
		qm.dispose();
	} else {
		qm.dispose();
	}
}
