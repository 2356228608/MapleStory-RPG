var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.sendOk("好了，#b#e#h0##k#n，你也会经常来找我 #b#e#p9000185##k#n的吧？\n一定要来啊！\n希望你通过冒险岛聊天工具结识更多的朋友，\n#r#e祝你度过美丽的一天#k#n~\n");
		qm.gainItem(3700135, 1);
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
