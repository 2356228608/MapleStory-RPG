function enter(pi) {
	var id = pi.getPortal().getId();
	var em = pi.getEventManager("Map_TowerOfOz");
	var eim = em.getInstance("Map_TowerOfOz");
	var trigger = parseInt(em.getProperty("stage47_trigger"));
	if (id != trigger) {
		return true;
	}
	var map = em.getMapFactoryMap(pi.getMapId());
	var mob = em.getMonster(9309128);
	var modified = em.newMonsterStats();
	modified.setOHp(2100000000);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(500, 185));

	pi.fieldEffect_ScreenMsg("Effect/OnUserEff.img/aquarisTower/success");
	pi.playerMessage(5, "似乎触发了什么机关。去门口看看吧。");
	return true;
}
