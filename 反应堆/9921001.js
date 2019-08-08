function act() {
	switch (randomNum(1, 3)) {
	case 1:
		rm.dropSingleItem(4000136);
		break;
	case 2:
		rm.dropSingleItem(4000136);
		rm.dropSingleItem(4000136);
		break;
	case 3:
		var em = rm.getEventManager("Map_TowerOfOz");
		var map = em.getMapFactoryMap(rm.getMapId());
		var modified = em.newMonsterStats();
		modified.setOHp(915750);
		var mobType = randomNum(1, 2) == 1 ? 3230102 : 4230104;
		for (var i = 0; i < randomNum(1, 10); i++) {
			var mob = em.getMonster(mobType);
			mob.setOverrideStats(modified);
			map.spawnMonsterOnGroundBelow(mob, rm.getPosition());
		}
		break;
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
