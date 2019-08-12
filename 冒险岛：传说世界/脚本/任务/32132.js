/* Dawnveil
[Ellinel Fairy Academy] Dr. Betty's Measures
Headmistress Ivana
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("这是孩子们带着感激之情，用花编的手镯。\r\n\r\n望你好好使用。");
		} else {
			qm.forceCompleteQuest();
			qm.forceCompleteQuest(32130);
			qm.dispose();
		}
	}
}
