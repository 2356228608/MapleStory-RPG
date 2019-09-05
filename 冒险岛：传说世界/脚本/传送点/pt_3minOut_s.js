function enter(pi) {
	var cm = ms = rm = qm = im = pi;
	var mapId = cm.getMapId();
	var eim = cm.getEventInstance();
	var em = eim.getEventManager();
	if (parseInt(em.getProperty("clear")) == 0) {
		cm.playerMessage(5, "请先消灭野外的所有怪物.");
		return;
	}
	if (mapId == 867111060) {
		cm.warp(867111080);
	} else if (mapId == 867111080) {
		cm.warp(867111100);
	} else if (mapId == 867111100) {
		cm.warp(867111120);
	} else if (mapId == 867111120) {
		cm.warp(867111140);
	} else if (mapId == 867111150) {
		cm.warp(867111170);
	} else if (mapId == 867111180) {
		cm.warp(867111200);
	} else if (mapId == 867111200) {
		cm.warp(867111220);
	} else if (mapId == 867111220) {
		cm.warp(867111240);
	} else if (mapId == 867111240) {
		cm.warp(867111260);
	} else if (mapId == 867111270) {
		cm.warp(867111290);
	} else if (mapId == 867111290) {
		cm.warp(867111300);
	} else if (mapId == 867111300) {
		cm.warp(867111320);
	} else if (mapId == 867111320) {
		cm.warp(867111340);
	} else if (mapId == 867111350) {
		cm.warp(867111899);
	}
}
