/* global ms */
var status = -1;

function action(mode, type, selection) {
	if (mode === 0) {
		status--;
	} else {
		status++;
	}
	if (!cm.isQuestFinished(30062)) {
		cm.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendNextS_Bottom("好像应该就在这里……这个附近一定有可以爬到大海盗的飞艇上的装置……找到了！");
	} else if (status === i++) {
		var newStatus = cm.getQuestNoRecord(30063);
		newStatus.setCustomData("clear");
		cm.getPlayer().updateQuest(newStatus, true);
		cm.warp(106030102, 0);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
