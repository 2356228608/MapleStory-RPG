/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextS("连路都找不到了！\r\n这些东西又是什么！荆棘树和……鸟？！");
	} else if (status === i++) {
		qm.sendNextS("这都是从哪儿冒出来的？呃呃……怎么突然跑出来把路给挡住了！");
	} else if (status === i++) {
		qm.askYesNo("消灭拦住前路的荆棘树和泣者，赶快离开吧！");
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.dispose();
	}	
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
