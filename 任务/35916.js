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
		qm.askAcceptDecline_Bottom("#face0#你再去帮我从#r#o2300204##k身上搜集#b15个#k#b#i4036528# #t4036528##k。\r\n香炉兔是#r#m100051021##k常见的怪物。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#香炉兔的灰会散发出让人内心平静的香味。\r\n那就拜托你了，嗯哼，嗯哼。", 1013351);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.OnStartNavigation(100051021, 0, "", 35916);
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
		qm.sendNext_Bottom("#face0#哦，来啦。我说怎么感觉心情变得更平静了。一，二……\r\n数量刚刚好。啊，这是……呼呼……古代的味道。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#虽然还想让你帮忙做别的事……\r\n但更多的要求，似，似乎就不太讲道理了。好吧，就到此为止吧。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#罗盘的碎片就掉落在森林虫之地附近。\r\n在大地发出轰鸣的那天，我亲眼看到了。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#如果我没记错，一共是裂成了三块碎片。\r\n去森林虫之地附近仔细找找，应该就能找到，咳咳。", 1013351);
	} else if (status == i++) {
		qm.gainItem(4036528, -15);
		qm.gainExp(2500);//得到奖励经验
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
