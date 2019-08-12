/* [起源之塔]发现可疑的海底建筑？！
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.askAcceptDecline("#b#h ##k，有件紧急的事情需要你的帮忙。是与前阵子出现的世界树有关。", 1101002);
	} else if (status == 1) {
		qm.sendNextNoESC("我们最近得到情报，据说在冒险岛世界的北部，在被称为世界尽头的地方发现了可疑的建筑。此外还发现了生命超越者——世界树阿丽莎的古老的思念体。", 1101002);
	} else if (status == 2) {
		qm.sendNextNoESC("现在迫切需要人手对塔进行调查。我们相信你是适合的人选。", 1101002);
	} else if (status == 3) {
		qm.sendNextSNoESC("没问题。什么时候出发？");
	} else if (status == 4) {
		qm.sendNextNoESC("#b#h ##k，我会用神兽的力量立刻把你传送到目的地。祝你好运。", 1101002);
	} else if (status == 5) {
		qm.forceStartQuest();
		qm.warp(992000010, 0);
		qm.dispose();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
