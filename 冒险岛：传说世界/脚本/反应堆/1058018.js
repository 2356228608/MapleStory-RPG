function act() {
	rm.getWeatherEffectNotice("哎呀，可爱的客人来啦。", 113, 4000, 1);
	rm.spawnMonster(8920100, 1);
	var eim = rm.getEventInstance();
	var em = eim.getEventManager();
	scheduleNew(em, "notice2", 2);
	scheduleNew(em, "notice3", 4);
	scheduleNew(em, "notice4", 6);
}

// 循环调动事件
function scheduleNew(em, funcName, seconds) {
	var setupTask = em.scheduleAtTimestamp(funcName, java.lang.System.currentTimeMillis() + seconds * 1000);
	return setupTask;
}
