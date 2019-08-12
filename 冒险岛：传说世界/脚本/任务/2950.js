/* Dawnveil
[Ellinel Fairy Academy] Clue Number Two
Hidey Hole
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.askAcceptDecline("你好？我是大贸易商金利奇。我想给你一个特别的机会。冒险岛最好的度假胜地金海滩度假村即将开业，在开业之前我想给你次体验的机会。你想现在就去吗？");
	} else if (status == 1) {
		qm.sendNext("好的，我现在就把你送到金海滩度假村去。");
	} else if (status == 2) {
		qm.forceStartQuest();
		qm.warp(120040300, 0);
		qm.dispose();
		qm.forceCompleteQuest();
	}
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
