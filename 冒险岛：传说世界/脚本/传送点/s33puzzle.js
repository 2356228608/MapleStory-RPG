var portals = [[29, 30, 31, 32, 45], [33, 34, 35, 36, 46], [37, 38, 39, 40, 47], [41, 42, 43, 28, 48], [50, 51, 52, 53, 54]];
var next = [[0, -1], [-1, 0], [0, 1], [1, 0]];

function enter(pi) {
	var id = pi.getPortal().getId();
	var em = pi.getEventManager("副本_起源之塔");
	var eim = em.getInstance("副本_起源之塔");
	var teleport = parseInt(em.getProperty("stage33_teleport"));
	var map = em.getMapFactoryMap(pi.getMapId());
	if (id == 49) {
		var pos = pi.getMap().getPortal(44).getPosition();
		pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY()-30);
		if (teleport >= 9) {
			em.setProperty("stage33", "clear");
			pi.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
		}
		return true;
	}

	var reactorLoc = findPortal(id);
	var reactor = map.getReactorByName(reactorLoc[0] + "" + reactorLoc[1]);
	var state = parseInt(reactor.getState());
	var nextLoc = [reactorLoc[0] + next[state][0], reactorLoc[1] + next[state][1]];
	if (nextLoc[0] == 5 && nextLoc[1] == 4) {
		var pos = pi.getMap().getPortal(49).getPosition();
		pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY()-30);
		em.setProperty("stage33_teleport", teleport + 1);
	} else if (nextLoc[0] >= 0 && nextLoc[0] < 5 && nextLoc[1] >= 0 && nextLoc[1] < 5) {
		var pos = pi.getMap().getPortal(portals[nextLoc[0]][nextLoc[1]]).getPosition();
		pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY()-30);

		em.setProperty("stage33_teleport", teleport + 1);
	} else {
		// 失败特效
		pi.fieldEffect_ScreenMsg("Effect/OnUserEff.img/aquarisTower/failed");
		pi.playerMessage(5, "这样哪里也去不了。");
	}
	return true;
}

function findPortal(id) {
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			if (portals[i][j] == id)
				return [i, j];
		}
	}
	return [-99, -99];
}
