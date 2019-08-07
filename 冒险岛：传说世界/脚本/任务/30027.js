/* 鲁塔比斯 领钥匙
Made by Jessefjxm
 */

function start(mode, type, selection) {
	qm.gainItemPeriod(4033611, 5, 24, true);
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
