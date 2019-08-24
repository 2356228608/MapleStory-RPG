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
		qm.sendOk("#t4032833#啊，如果弄丢了就回来找我吧，做过一次的钥匙是很容易重新制做的。反正我留在这里就是为了给你制作钥匙，你不用过意不去。");
		qm.forceCompleteQuest();
		qm.gainItem(4000626, -100);
		if (!qm.haveItem(4032833))
			qm.gainItem(4032833, 1);
		qm.dispose();
	}
}
