/* Dawnveil
[Ellinel Fairy Academy] Fanzy's Magic 2
Fanzy
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendNext("找到#b#t4033825##k了吗？");
	} else if (status == 1) {
		qm.sendNextPrev("太好咯。这样就能使用魔法了。稍等哦……");
	} else if (status == 2) {
		qm.removeAll(4033824);
		qm.removeAll(4033825);
		qm.warp(101070010, 0);
		qm.gainExp(4748);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
