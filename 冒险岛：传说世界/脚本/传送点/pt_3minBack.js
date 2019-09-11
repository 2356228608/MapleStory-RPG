function enter(pi) {
	var cm = ms = rm = qm = im = pi;
	var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
	ms.warp(mapId);
	ms.dispose();
}
