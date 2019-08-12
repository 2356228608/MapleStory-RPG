/* 列娜海峡 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
		status++;
	if (status == 0) {
		qm.sendNext("航海士，你搜集的木材就是这种吧？\r\n\r\n#b#i4030022##z4030022#", 1510006);
	} else if (status == 1) {
		qm.gainItem(4030022, 1);
		qm.forceStartQuest();
		qm.dispose();
	}
}
