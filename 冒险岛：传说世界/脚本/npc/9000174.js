var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
		}
		status--;
	}
	cm.sendOk("灵魂真是世间最奇妙的存在啊……");
	cm.dispose();
}
