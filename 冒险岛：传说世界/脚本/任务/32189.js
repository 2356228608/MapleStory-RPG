/* 列娜海峡 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("你来了。你手上拿得是……？");
	} else if (status == 1) {
		qm.sendNext("#b#i4030030##z4030030#\r\n\r\n#k这是冰川之核碎片……冰川之核是一种具有极强冷却效果的神秘物质。他们居然大量搜集这种物质，难道是想用来启动某个巨大的引擎装置？");
	} else if (status == 2) {
		qm.sendNextS("这事很可疑。敌人的目的到底是什么?");
	} else if (status == 3) {
		qm.warp(141050400, 0);
		qm.gainExp(48500);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
