/* 妖精学院艾利涅
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	// 刷怪
	var em = ms.getEventManager("副本_妖精学院_Boss");
	var eim = em.getInstance("副本_妖精学院_Boss");
	var map = em.getMapFactoryMap(ms.getMapId());
	var mob = em.getMonster(3501008);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-800, 800), 180));
	if (!ms.isQuestFinished(32128)) {
		ms.sendOk("请消灭那个凶恶的土地鼠！\r\n#b（消灭地鼠王后,重新进行对话。）", 1500016);
	}
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
