// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		var map = ms.getMap();
		map.resetFully();

		if (!map.containsNPC(2141000)) {
			map.spawnNpc(2141000, new java.awt.Point(-190, -42));
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
