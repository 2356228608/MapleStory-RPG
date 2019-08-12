/* 列娜海峡 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("木材全部收集来了吗？\r\n\r\n#b#i4030022#", 1510006);
	} else if (status == 1) {
		qm.sendNext("谢谢你，勇士。看样子你对乘船有点天赋，我很期待你加入我们一起航行的那一天！", 1510006);
	} else if (status == 2) {
		qm.gainItem(4030022, -3);
		qm.gainExp(26609);
		qm.forceCompleteQuest();
		qm.forceCompleteQuest(32164);
		qm.forceCompleteQuest(32165);
		qm.forceCompleteQuest(32166);
		qm.dispose();
	}
}
