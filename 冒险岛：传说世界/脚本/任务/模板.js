/* by jessefjxm
 */
var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("该内容只有分辨率达到1024*768以上时才能正常进行.", 9400031);
	} else if (status === i++) {
		qm.sendNext_Bottom("在背包里发现了一本旧笔记本，我什么时候得到了这种东西？", 9400031);
	} else if (status === i++) {
		qm.sendNext_Bottom("我有点记不清了，但是似乎又能想起来什么。", 9400031);
	} else if (status === i++) {
		qm.askMenu_Bottom("那就让我来看一下吧？\r\n#b#L0#打开笔记本。#l\r\n#L1#没必要看。#l", 9400031);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendOk("好了，#b#e#h0##k#n，你也会经常来找我 #b#e#p9000185##k#n的吧？\n一定要来啊！\n希望你通过冒险岛聊天工具结识更多的朋友，\n#r#e祝你度过美丽的一天#k#n~\n");
		qm.gainItem(3700135, 1);
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
