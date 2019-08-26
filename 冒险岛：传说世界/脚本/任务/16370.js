var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("你好，勇士～很高兴见到你！", 9000086);
	} else if (status === i++) {
		qm.sendNextPrev("今天我想给你介绍一下有关#e#b冒险岛成就#k#n的内容～", 9000086);
	} else if (status === i++) {
		qm.sendNextPrev("勇士，你有过如果自己进行的各种#b冒险#k都被记录在某处就好了……这样的想法吗？", 9000086);
	} else if (status === i++) {
		qm.sendNextPrevS("嗯……我……");
	} else if (status === i++) {
		qm.sendNextPrev("我平时可是经常这么想。\r\n而且，此时此刻！我就要满足勇士你的梦想了。", 9000086);
	} else if (status === i++) {
		qm.sendNextPrevS("不，我……");
	} else if (status === i++) {
		qm.sendNextPrev("#b冒险岛成就#k简单说来，就是记录勇士冒险的空间。\r\n你进行过的各种冒险都会以成就的形式记录在#b冒险岛成就#k中。", 9000086);
	} else if (status === i++) {
		qm.sendNextPrev("完成成就，可以提高成就分数和等级，还可以获得各式各样的徽章哦。快来使用一次吧。", 9000086);
	} else if (status === i++) {
		qm.sendNextPrev("此外，如果需要更详细的说明，可以点击UI的帮助按钮。从现在开始，在#b冒险岛成就#k中留下你浓墨重彩的一笔吧！", 9000086);
	} else if (status == i++) {
		qm.forceStartQuest();
		// TODO 获得成就1
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.forceCompleteQuest();
	qm.dispose();
}
