/*
 * Time Temple - Kirston
 * Twilight of the Gods
 */
        function start() {
            cm.sendOk("如果我有善良之镜,我就能召唤黑魔法师!\r\n等等!好像哪里错了!为什么召唤不了黑魔法师?我感觉到跟黑魔法师完全不同的……啊啊啊!!!!!!!\r\n\r\n #b(请把奇拉的使命传递下去.)");
        }

function action(mode, type, selection) {
    if (cm.getMapId() == 270050100) {
        cm.removeNpc(cm.getMapId(), 2141000);
		cm.killAllMob();
        cm.spawnMonster(8820008);
		cm.spawnMonster(8820010);
		cm.spawnMob(9010126, 1, -54, -42);
		cm.addPopupSay(1540108, 2000, "请先击败普通品克缤化身!");
        //cm.forceStartReactor(cm.getMapId(), 2709000);
    }
	if (cm.getMapId() == 270051100) {//进阶
        cm.killAllMob();
		cm.addPopupSay(1540108, 2000, "请先击败混沌品克缤化身!");
		cm.spawnMob(8820008, 1, 7, -42);
		cm.spawnMob(8820300, 1, 7, -42);
		cm.spawnMob(9010126, 1, -236, -42);
		//cm.killAllMob();
		//cm.killMonster(8820300);
		//cm.killMonster(8820000);
        cm.removeNpc(cm.getMapId(), 2141000);
    }
    cm.dispose();
}