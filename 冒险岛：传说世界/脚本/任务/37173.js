/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("要想唱好歌，首先要充分放松声带。");
	} else if (status === i++) {
		qm.sendNext("喝下这附近的#b#o3501108##k和#b#o3501109##k拥有的#i4036505# #r#t4036505##k，不仅能解渴，对于放松声带也非常有效。");
	} else if (status === i++) {
		qm.askYesNo("我会像刚才一样给你一个小水瓶，请你用它灌满水交给我吧。");
	} else if (status === i++) {
		qm.gainItem(4220197, 1);
		qm.dispose();
		qm.forceStartQuest();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("哈……真爽！", 1501010);
	} else if (status === i++) {
		qm.sendNextS("有没有感觉喉咙像被疏通了一样？");
	} else if (status === i++) {
		qm.sendOk("那倒没有，不过这水真清爽啊。我还想再喝一瓶！", 1501010);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.gainExp(10320);
		qm.dispose();
	}
}
