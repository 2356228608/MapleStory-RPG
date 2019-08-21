var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceStartQuest();
		if (!qm.haveItem(4032859))
			qm.gainItem(4032859, 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		if (qm.haveItem(4032859)) {
			qm.sendNext("嗯……给我的信？是谁给你的啊？");
		} else {
			qm.sendNext("信到底在哪里啊……别跟我开玩笑……");
			qm.dispose();
		}
	} else if (status == i++) {
		qm.sendNext("呵呵……那个家伙……无视我的警告，最后变成了这个样子……啧啧……");
	} else if (status == i++) {
		qm.sendNext("几天前，#p2161004#来到了这里，说要到狮子王之城去寻找狮子王的勋章。不久前我在狮子王之城里感觉到了奇怪的气息，所以就劝他不要去，但是他却趁着夜深人静的时候溜了出去。");
	} else if (status == i++) {
		qm.sendNext("为了找到他，我们派出了救援队。但是城里突然出现了怪物，我们没能找到他，结果变成了这个样子……");
	} else if (status == i++) {
		qm.sendOk("这封信我会交给他的家人的……");
	} else if (status == i++) {
		qm.gainItem(4032859, -1);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
