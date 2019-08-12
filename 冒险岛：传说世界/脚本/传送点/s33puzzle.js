var portals = [[29, 30, 31, 32, 45], [33, 34, 35, 36, 46], [37, 38, 39, 40, 47], [41, 42, 43, 28, 48], [50, 51, 52, 53, 54]];
var next = [[0, -1], [-1, 0], [0, 1], [1, 0]];

function enter(pi) {
	var id = pi.getPortal().getId();
	var em = pi.getEventManager("Map_TowerOfOz");
	var eim = em.getInstance("Map_TowerOfOz");
	var teleport = parseInt(em.getProperty("stage33_teleport"));
	var map = em.getMapFactoryMap(pi.getMapId());
	if (id == 49) {
		pi.warp(pi.getMapId(), 44);
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
		pi.warp(pi.getMapId(), 49);
		em.setProperty("stage33_teleport", teleport + 1);
	} else if (nextLoc[0] >= 0 && nextLoc[0] < 5 && nextLoc[1] >= 0 && nextLoc[1] < 5) {
		pi.warp(pi.getMapId(), portals[nextLoc[0]][nextLoc[1]]);
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
