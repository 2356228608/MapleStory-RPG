var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		cm.askMenu("如果你还没有接受过授课，那就快去学校吧。\r\n\r\n#L1##b前往枫之高校#l");
	} else if (status == 1) {
		cm.warp(744000000, 0);
		cm.dispose();
	}
}