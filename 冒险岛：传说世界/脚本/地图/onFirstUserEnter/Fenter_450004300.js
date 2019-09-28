/*
 *  功能：路西德副本第三阶段召唤奖励(普通难度)
 */

function start() {
	var eim = ms.getEventInstance();
	if (eim != null) {
		var em = ms.getEventManager("Boss_噩梦时间塔_路西德_普通");
		if (em != null && eim.getProperty("summom").equals("2")) {
			eim.startEventTimer(5 * 60 * 1000);
			eim.setProperty("summom", "3");
			var mob = em.getMonster(8880167);
			var modified = em.newMonsterStats();
			modified.setOHp(340000000000);
			eim.registerMonster(mob);
			ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(93, 36));
		}
	}
	ms.dispose();
}
