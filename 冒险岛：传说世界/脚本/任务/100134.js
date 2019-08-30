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
		qm.sendNext("\r\n#b#h0##k！\r\n你听说有关#b#e大冒险岛#n#k的消息了吗？", 9010010);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n冒险家们聚集的岛！\r\n必须做好准备才行哟！", 9010010);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n在出去冒险之前，需要做好什么准备呢？", 9010010);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n那就是……\r\n\r\n#fs18#        #b#e经验值！！#n#k", 9010010);
	} else if (status === i++) {
		qm.askYesNo("怎么样，#b#h0##k～？准备好带上我的#e#b经验值包#k#n，来一场真正的冒险吧！", 9010010);
	} else if (status === i++) {
		qm.sendOk("\r\n很好！待我准备一下，稍候再来找我吧～！", 9010010);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.dispose();
}
