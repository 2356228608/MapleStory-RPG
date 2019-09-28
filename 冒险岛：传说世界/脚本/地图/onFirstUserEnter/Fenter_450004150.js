/*
 *  功能：路西德副本第一阶段召唤BOSS(普通难度)
 *  Byte: 芬芬时尚潮流
 */

function start() {
	var eim = ms.getEventInstance();
	if (eim != null) {
		//普通模式
		var em = ms.getEventManager("Boss_噩梦时间塔_路西德_普通");
		if (em != null && eim.getProperty("summom").equals("0")) {
			//eim.schedule("summonButterfly", 1000 * 5);
			eim.schedule("dragon", 1000 * 15); //2分钟后召唤龙
			eim.setProperty("summom", "1");
			//eim.setProperty("stop", "0");

			var mob = em.getMonster(8880140); //梦中路西德
			var modified = em.newMonsterStats();
			modified.setOHp(145000 * 100000000);
			modified.setOMp(mob.getMobMaxMp() * 2);
			mob.setOverrideStats(modified);
			eim.registerMonster(mob);
			ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(1000, 48));

			mob = em.getMonster(8880166); //路西德之花
			mob.setOverrideStats(modified);
			eim.registerMonster(mob);
			ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(1000, 48));
		}

	}

	ms.dispose();
}
