var pos = [[-505, -445], [-357, -205], [-505, -95], [745, -445], [545, -205], [755, -95]];
var posDesc = ["左上方", "左边", "左下方", "右上方", "右边", "右下方"];
// 27F 怪物
var mobs27F = [2600106, 9800145];

function act() {
	var em = rm.getEventManager("Map_TowerOfOz");
	var map = em.getMapFactoryMap(rm.getMapId());
	var loc = randomNum(0, pos.length);
	var mobType = mobs27F[randomNum(0, 1)];
	var count = randomNum(3, 10);
	for (var j = 0; j < count; j++) {
		var mob = em.getMonster(mobType);
		var modified = em.newMonsterStats();
		modified.setOHp(2118450);
		mob.setOverrideStats(modified);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(pos[i][0] + randomNum(-50, 50), pos[i][1]));
	}
	rm.addPopupSay(0, 2000, posDesc[loc] + "的那些家伙出现了！在它们消失之前赶紧消灭掉！");
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
