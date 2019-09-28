/*
 *  功能：路西德副本第二阶段召唤BOSS(普通难度)
 *  Byte: 芬芬时尚潮流
 */

function start() {
	var eim = ms.getEventInstance();
	if (eim != null) {
		var em = ms.getEventManager("Boss_噩梦时间塔_路西德_普通");
		if (em != null && eim.getProperty("summom").equals("1")) {
			//eim.schedule("summonButterfly", 1000 * 5);
		 	//eim.schedule("dragon", 1000 * 15); //1分钟后召唤龙
			eim.setProperty("summom", "2");
			//eim.setProperty("stop", "0");
			var mob = em.getMonster(8880150);
			var modified = em.newMonsterStats();
			modified.setOHp(245000 * 100000000);
			modified.setOMp(mob.getMobMaxMp() * 2);
			mob.setOverrideStats(modified);
			eim.registerMonster(mob);
			ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(636, -491));

		}

	}
	ms.dispose();
}
