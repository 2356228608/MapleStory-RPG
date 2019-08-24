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
		qm.sendOk("喏，你找的#t4032834#来了。你一定要打败#o8210007#，帮助人们。如果弄丢了钥匙就回来找我，重做一把还是很简单的。");
		qm.forceCompleteQuest();
		qm.gainItem(4000627, -100);
		if (!qm.haveItem(4032834))
			qm.gainItem(4032834, 1);
		qm.dispose();
	}
}
