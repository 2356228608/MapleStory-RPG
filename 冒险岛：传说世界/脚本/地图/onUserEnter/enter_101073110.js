/* 妖精学院艾利涅
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	// 刷怪
	var em = ms.getEventManager("副本_妖精学院_解救2");
	var eim = em.getInstance("副本_妖精学院_解救2");
	var map = em.getMapFactoryMap(ms.getMapId());
	for (var i = 0; i < 20; i++) {
		var mob = em.getMonster(3501007);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-800, 400), 180));
	}
	ms.sendOk("呜呜呜……请想办法对付这些怪物吧！", 1500019);
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
