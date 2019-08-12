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
		qm.askYesNo("找我有什么事吗？你想问黑水灵为什么会突然在金海滩出现？我看到了什么东西，但我也不知道那是什么。你想知道我看到了什么吗?");
	} else if (status == 1) {
		qm.sendNext("我得回想一下那天的事情，请稍等一下。那天晚上月亮非常明亮，为了抒发思乡之情，我正在演奏乐器。就在那时，我突然看到有什么东西在动。");
	} else if (status == 2) {
		qm.fieldEffect_ScreenMsg("Map/Effect.img/goldBeach/submarine");
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendOk("嗯……我……我……我们部落的文明非常发达。别把我们当成是未开化的种族。");
	} else if (status == 1) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
