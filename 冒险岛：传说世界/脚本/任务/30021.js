/* 鲁塔比斯 
Made by Jessefjxm
 */
var status = -1;
function start(mode, type, selection) {
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
		qm.sendOk("多亏了你，我们一族才找回了和平。我会一辈子记着你的恩情的。");
	} else if (status == 1) {
		qm.gainExp(510000);
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
