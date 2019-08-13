/* 列娜海峡 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("看来咱们得到魔女芭芭拉的家去一趟。嗯……希望勇士你也可以一起去。\r\n\r\n#e#b（接受时，将自动移动。）");
	} else if (status == 1) {
		qm.warp(141040001, 0);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	qm.dispose();
}
