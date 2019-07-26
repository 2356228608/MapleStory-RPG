var status = -1;
var questid = 200100;
var playerid = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			im.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
			im.dispose();
			im.openNpc(9001000, "获得指定的BUFF")
	}
}