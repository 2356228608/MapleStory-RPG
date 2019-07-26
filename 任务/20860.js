/* Cygnus revamp
Noblesse tutorial
五条路
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	if (status == 0) {
		qm.sendNext("你的等级已经达到了10级，可以选择一条职业道路，进行第一次转职了。");
	} else if (status == 1) {
		qm.sendNext("可以选择的道路共有五条，光之剑客、火之魔法师、风之弓箭手、暗之飞侠、闪电之海盗。你的选择，到底是什么呢？");
	} else if (status == 2) {
		qm.sendNext("去见见导师们吧，完成转职吧！");
	} else if (status == 3) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
