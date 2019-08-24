var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.askYesNo("我在玫瑰花园里找到了含有雷昂和我的记忆的花谱。我们俩的手艺都不怎么好，做得不是很好看，不过做这个的时候我们真的很开心……好的，请你帮我把它交给雷昂。");
	} else if (status == i++) {
		qm.sendNext("这是我们过去一起制作的#t4032837#，你把它给雷昂看看，告诉他我变成了幽灵，正在这里等他。那就拜托你了。请你再到#b接见室#k去一趟……");
	} else if (status == i++) {
		var newStatus = qm.getQuestRecord(3175);
		newStatus.setStatus(1);
		// 这样才能有效更新
		qm.getPlayer().updateQuest(newStatus, true);
		if(!qm.haveItem(4032837))
			qm.gainItem(4032837, 1);
		qm.warp(211070200, 1);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
