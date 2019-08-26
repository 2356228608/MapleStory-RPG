var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askYesNo("\r\n怎么样，#b#h0##k～？\r\n你对#e<大冒险岛>#n感兴趣吗？");
	} else if (status === i++) {
		var map = qm.getMapId();
		if (map >= 993080000 || (map >= 993001000 && map <= 993001400)) {
			qm.sendOk("你已经在大冒险岛上了，好好体验精彩的冒险吧！");
			qm.dispose();
		} else {
			qm.sendNextPrev("\r\n好了！那就去#b#e<大冒险岛>#k#n\r\n体验精彩的冒险吧！");
		}
	} else if (status == i++) {
		qm.warp(993080000, 0);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.dispose();
	}
}
