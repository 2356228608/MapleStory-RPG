/* Dawnveil
[Ellinel Fairy Academy] Ivana's Misunderstanding
Headmistress Ivana
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 0) {
		qm.sendNext("……（校长伊瓦纳陷入了短暂的沉思。)");
	} else if (status == 1) {
		qm.sendNextPrev("我现在还不能完全相信他。不过至少我可以给他松绑了……就当做是对一个热情的学生最起码的照顾吧。");
	} else if (status == 2) {
		qm.removeAll(4033827);
		qm.forceCompleteQuest();
		qm.gainExp(3600);
		qm.dispose();
	}
}
