﻿function act() {
	var eim = rm.getEventInstance();
	if (eim != null) {
		var em = eim.getEventManager();
		var mob = em.getMonster(8910100);
		eim.registerMonster(mob);
		var map = eim.getMapInstance(0);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-131, 455));
	}
}
