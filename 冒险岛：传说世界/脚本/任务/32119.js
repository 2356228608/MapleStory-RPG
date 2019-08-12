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
			qm.sendNext("#b(告诉巴缇博士这期间发生的事情。)#k\r\n竟然有这样的事……你等一下。说不定我这里有你需要的东西。");
		} else {
			qm.forceCompleteQuest();
			qm.dispose();
		}
	}
}
