/*
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askYesNo("我可以送你到城堡后门入口。\r\n要立即移动吗？\r\n\r\n#b（接受时，将移至城堡后门入口。）");
	} else if (status === i++) {
		qm.warp(106030302, 3);
		qm.dispose();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	qm.dispose();
}
