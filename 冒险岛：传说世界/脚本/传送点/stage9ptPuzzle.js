var startPortal = 44;
var answers = new Array();

function enter(pi) {
	var em = pi.getEventManager("副本_起源之塔");
	var stage9_level = parseInt(em.getProperty("stage9_level")); // 从0开始计数，共8层
	if (answers.length == 0) {
		for (var i = 0; i < 8; i++) {
			answers.push(startPortal + i * 4 + parseInt(em.getProperty("stage9_puzzle_" + i)))
		}
	}
	var curPortal = pi.getPortal().getId();
	var index = answers.indexOf(curPortal);
	// 失败
	if (index < 0) {
		var fail = parseInt(em.getProperty("stage9_fail")) + 1;
		em.setProperty("stage9_fail", fail);
		var pos = pi.getMap().getPortal(0).getPosition();
		pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY());
		pi.getMap().getWeatherEffectNotice("第" + fail + "次错误。虽然这全靠运气，但已经错了一次，所以请担心不要再错。", 147, 60000, 1);
	} else { // 成功解锁新一层
		pi.mapMessage("[stage9_level " + stage9_level + "][curPortal " + curPortal + "][next] " + (startPortal + index * 4 + 4));
		if (index == stage9_level) {
			em.setProperty("stage9_level", index + 1);
			var pos = pi.getPortal().getPosition();
			pi.spawnNpc(10310, pos.getX() - 15, pos.getY() - 30);
		}
		// 通关
		if (index + 1 == 8) {
			var pos = pi.getMap().getPortal(startPortal - 1).getPosition();
			pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY()-30);

			em.setProperty("stage9", "clear");
			pi.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
		} else {
			var pos = pi.getMap().getPortal(startPortal + index * 4 + 4 + randomNum(0, 3)).getPosition();
			pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY()-30);
		}
	}
	return true;
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
