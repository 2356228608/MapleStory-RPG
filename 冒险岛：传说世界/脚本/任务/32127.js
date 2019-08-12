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
			qm.sendNext("绑架小女孩的人一定就是劈坏曼陀罗田的元凶。说不定他的实力很强。");
		} else {
			qm.forceCompleteQuest();
			qm.dispose();
		}
	}
}
