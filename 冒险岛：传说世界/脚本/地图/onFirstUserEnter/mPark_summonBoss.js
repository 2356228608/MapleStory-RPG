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
		var eim = ms.getEventInstance();
		if (eim != null && eim.getProperty("boss") != null && eim.getProperty("boss").equals("0")) {
			var em = eim.getEventManager();
			for (var i = 9800119; i < 9800125; i++) {
				eim.registerMonster(boss);
				ms.getMap().spawnMonsterOnGroundBelow(em.getMonster(i),
					new java.awt.Point(ms.getMap().getPortal(2).getPosition()));
			}
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
