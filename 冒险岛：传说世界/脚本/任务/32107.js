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
		qm.sendNext("（校长伊瓦纳很仔细地看了那本书。)");
	} else if (status == 1) {
		qm.sendNextPrev("这本书很专业，没有一定的专业知识是没办法看懂了。但是只凭这本书，还是无法证明那个少年的清白。就算我可以读懂这本书，也是无法证明什么的。\r\n（回去找魔法师库迪。)");
	} else if (status == 2) {
		qm.forceCompleteQuest();
		qm.removeAll(4033826);
		qm.gainExp(4800);
		qm.dispose();
	}
}
