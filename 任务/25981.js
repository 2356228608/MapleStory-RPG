/* 
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendNext("你知道什么是#r引路#k吗？\r\n这是冒险岛世界的经验汇总，当你等级提升时，查看引路就可以了解到哪些地方需要你的帮助、适合你去挑战了。");
	} else if (status == 1) {
		qm.sendNextS("这样吗？真是好东西啊。");
	} else if (status == 2) {
		qm.sendNext("是的，等你的等级提升到#r30#k之后，引路就可以对你起到帮助作用了。好好体验吧！");
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
