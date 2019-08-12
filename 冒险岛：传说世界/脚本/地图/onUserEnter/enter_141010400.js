/* 列娜海峡
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	// 刷怪
	var em = ms.getEventManager("副本_列娜海峡_迷路的诺拉");
	var eim = em.getInstance("副本_列娜海峡_迷路的诺拉");
	var map = em.getMapFactoryMap(ms.getMapId());
	for (var i = 0; i < 15; i++) {
		var mob = em.getMonster(3502000);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-800, 400), 180));
		var mob = em.getMonster(3502001);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-800, 400), 180));
	}
	ms.sendOk("请消灭我周围的怪物！\r\n#b（消灭所有怪物后，再次对话。）", 1514002);
	ms.dispose();
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
