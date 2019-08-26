var pos = [[724, -700], [724, -460], [724, -220], [724, 20], [1270, -640], [1270, -400], [1270, -160], [1270, 80], [-700, -700], [-700, -460], [-700, -220], [-700, 20], [-1250, -640], [-1250, -400], [-1250, -160], [-1250, 80]];

function act() {
	var em = rm.getEventManager("副本_起源之塔");
	var map = em.getMapFactoryMap(rm.getMapId());
	for (var i = 0; i < pos.length; i++) {
		if (randomNum(0, 100) > 75)
			continue;
		var mobType = 9309035;
		var count = randomNum(2, 5);
		for (var j = 0; j < count; j++) {
			var mob = em.getMonster(mobType);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(pos[i][0] + randomNum(-50, 50), pos[i][1]));
		}
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
