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
		switch (ms.getMapId()) {
		case 925100000:
			ms.getMap().startSimpleMapEffect("击败外的怪物的船舶推进!", 5120020);
			break;
		case 925100100:
			ms.getMap().startSimpleMapEffect("我们必须证明自己！给我海盗勋章!", 5120020);
			break;
		case 925100200:
			ms.getMap().startSimpleMapEffect("在这里击败守卫!", 5120020);
			break;
		case 925100300:
			ms.getMap().startSimpleMapEffect("消灭这里的守卫!", 5120020);
			break;
		case 925100400:
			ms.getMap().startSimpleMapEffect("锁上门！密封船舶动力的根!", 5120020);
			break;
		case 925100500:
			ms.getMap().startSimpleMapEffect("消灭海盗!", 5120020);
			break;
		}
		var em = ms.getEventManager("Pirate");
		if (ms.getMapId() == 925100500 && em != null
			 && em.getProperty("stage5") != null) {
			switch (parseInt(em.getProperty("stage5"))) {
			case 1:
				var mobId = randomNum(1, 2) == 1 ? 9300119 : 9300105; // angry
				break;
			case 2:
				var mobId = randomNum(1, 2) == 1 ? 9300106 : 9300105; // enraged
				break;
			}
			var eim = ms.getEventInstance();
			var shammos = em.getMonster(mobId);
			eim.registerMonster(shammos);
			ms.getMap().spawnMonsterOnGroundBelow(shammos, new java.awt.Point(411, 236));
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
