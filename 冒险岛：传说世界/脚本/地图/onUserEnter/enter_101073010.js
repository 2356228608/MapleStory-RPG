/* 妖精学院艾利涅
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	// 刷怪
	var em = ms.getEventManager("副本_妖精学院_解救1");
	var eim = em.getInstance("副本_妖精学院_解救1");
	var map = em.getMapFactoryMap(ms.getMapId());
	for (var i = 0; i < 20; i++) {
		var mob = em.getMonster(3501006);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-800, 400), 180));
	}
	ms.sendOk("救命啊……那些怪物吓得我一动都不敢动！\r\n\r\n#b（消灭所有怪物后，再进行对话吧。）", 1500017);
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
