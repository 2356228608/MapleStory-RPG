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
		ms.getMap().resetFully();
		var eim = ms.getEventInstance();
		if (eim != null) {
			var em = eim.getEventManager();
			var rand = randomNum(1, 10);
			if (rand >= 4) { // 60%
				var mob_ToSpawn = 3300007;
			} else if (rand >= 1) {
				var mob_ToSpawn = 3300006;
			} else {
				var mob_ToSpawn = 3300005;
			}
			ms.getMap().spawnMonsterOnGroundBelow(em.getMonster(mob_ToSpawn), ms.getPlayer().getPosition());
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
