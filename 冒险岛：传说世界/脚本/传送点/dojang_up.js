function enter(pi) {
	var cm = ms = rm = qm = im = pi;
	var eim = cm.getEventInstance();
	var em = eim.getEventManager();
	if (!em.getProperty("clear").equals("true")) {
		pi.playerMessage("还有剩下的怪物。");
	} else {
		pi.dojoAgent_NextMap();
	}
}
