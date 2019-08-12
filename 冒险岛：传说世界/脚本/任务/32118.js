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
			qm.sendNext("#b(跟#p1032101#说了这期间发生的事情。)#k\r\n竟然有这样的事情？这可怎么办啊……请给我点时间让我想一想。");
		} else {
			qm.forceCompleteQuest();
			qm.dispose();
		}
	}
}
