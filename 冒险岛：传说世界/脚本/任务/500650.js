var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askMenu("去#b<操作之神>#k挑战#e神之操作#n吧！\r\n\r\n#b每周三上午10点#k，可以获得上周在<操作之神>中获得的#b星星数量10倍#k的#b大冒险币#k！\r\n\r\n#e[本周奖励]#n\r\n#b大冒险币0个#k（★ 0个）\r\n\r\n#e[下周可获得奖励]#n\r\n#b大冒险币0个#k（★ 0个）\r\n\r\n#L0# #b领取本周<操作之神>奖励#k#l", 9062148);
	} else if (status === i++) {
		qm.sendOk("本周在<操作之神>中没有获得星星！\r\n下周一定要好好努力！", 9062148);
	} else if (status == i++) {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.dispose();
	}
}
