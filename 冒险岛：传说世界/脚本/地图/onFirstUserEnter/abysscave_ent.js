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
		if (eim != null) {
			var em = eim.getEventManager();
			var mobId = ms.getMapId() >= 105200810 ? 8930000 : 8930100;
			ms.getMap().spawnMonsterOnGroundBelow(
				em.getMonster(mobId), new java.awt.Point(256, 443));
		}
		ms.getMap().startSimpleMapEffect("竟敢无视我的警告，又到这里来。这次我不会再手下留情了。", 5120103);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
