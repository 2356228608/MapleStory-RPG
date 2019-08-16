/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("咳咳咳……");
	} else if (status === i++) {
		qm.sendNext("啊……抱歉。最近事情太多，我嗓子有些不舒服。");
	} else if (status === i++) {
		qm.sendNextS("有什么我能帮忙的吗……？");
	} else if (status === i++) {
		qm.sendNext("啊……那能麻烦你帮我收集#i4036505# #r#t4036505##k吗？");
	} else if (status === i++) {
		qm.sendNext("附近的#b#o3501108##k和#b#o3501109##k身上就有。\r\n请灌满我给你的小水瓶就行了。");
	} else if (status === i++) {
		qm.gainItem(4220196, 1);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.forceCompleteQuest();
	qm.gainExp(8400);
	qm.dispose();
}
