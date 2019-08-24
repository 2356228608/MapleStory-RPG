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
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		if (qm.haveItem(4030035)) {
			qm.sendNext("塞希莉亚真是个心地善良的孩子。她现在还记得呢……管理花草的方法是我亲自教她的呢。宫中的人都很惊慌, 说王妃的手怎么能沾染泥土, 但我还是喜欢亲手去触摸泥土和花。\r\n");
		} else {
			qm.sendOk("你找我有事吗……? \r\n\r\n(需要玫瑰花束。如果把花束弄丢了的话, 可以向塞希莉亚重新领取。)");
			qm.dispose();
		}
	} else if (status == i++) {
		qm.sendOk("怎么样, 塞希莉亚制作的花束很美吧？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.removeAll(4030035);
		qm.dispose();
	}
}
