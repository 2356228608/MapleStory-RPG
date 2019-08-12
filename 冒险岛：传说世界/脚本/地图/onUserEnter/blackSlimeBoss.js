/* 金海滩
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	// 刷怪
	var em = ms.getEventManager("副本_金海滩_Boss");
	var eim = em.getInstance("副本_金海滩_Boss");
	var map = em.getMapFactoryMap(ms.getMapId());
	var mob = em.getMonster(3401011);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-174, -169));
	if (!ms.isQuestFinished(2975)) {
		ms.fieldEffect_ScreenMsg("Map/Effect.img/goldBeach/blackSlimeBoss");
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
