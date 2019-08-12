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
		qm.sendOk("谢谢你。多亏了你，我才保住了性命。");
	} else if (status == 1) {
		qm.gainItem(4001756, -20);
		qm.gainExp(510000);
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
