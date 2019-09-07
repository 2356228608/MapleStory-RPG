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
		qm.sendNext_Bottom("#face0##b（刚才路上遇到的遗迹攻击兵。\r\n头上装着发光的东西。用那个东西……）#k", 1013358);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face3##b（好，回到#m100051042#去吧。\r\n从#o2300208#身上搜集10个#i4036531# #t4036531#。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#我有点事情需要确认一下。你在这里等一下。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#啊，果然不愧是勇士……这么快就想到了办法。\r\n那我在这里等你。", 1013350);
	} else if (status === i++) {
		qm.OnStartNavigation(100051042, 0, "", 35926);
		qm.forceStartQuest();
		//qm.warp(100051042);
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
		qm.sendNext_Bottom("#face0#啊，这么快就回来啦。你手里拿着的那个东西……\r\n是遗迹攻击兵身上的东西吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#碰到之后，就会这样发光。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#有了这个，应该就能潜入水里了。\r\n不过为了以防万一，最好还是丢一个进去试试……", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face3##b（拿起一个发光的闪光石，丢进了水坑。\r\n光在水里亮了好久，然后化作一阵烟消失了。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（看来坚持不了多久。用一个到不了底下。\r\n把搜集到的全都带上吧。）#k", 1013358);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face0#那就打开闪光石，到下面去看看吧。\r\n啊……好紧张……小心小心……\r\n\r\n #r ※ 自动移动到任务地图。#k", 1013350);
	} else if (status === i++) {
		//qm.forceCompleteQuest();
		qm.warp(910090312);
		qm.dispose();
	}
}
