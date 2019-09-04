/*
 * 起源之塔
 * by Jessefjxm
 */
// 起源之塔通关奖励
var points = [4, 12, 14, 16, 24, 29, 35, 46, 75, 58, 73, 77, 96, 112, 137, 139, 169, 255, 186, 223, 243, 264, 280, 331, 323, 380, 555, 394, 419, 489, 472, 580, 557, 587, 679, 975, 750, 715, 749, 862, 856, 982, 1024, 1067, 2020]
var exps = [33474, 83687, 83687, 127118, 143248, 143248, 192090, 192090, 413928, 413928, 571006, 571006, 571006, 640872, 839876, 839876, 903628, 1355442, 1656447, 1656447, 1656447, 1830930, 2395173, 2395173, 2622873, 2622873, 4667404, 4667404, 5909948, 5909948, 5909948, 7038672, 7983508, 7983508, 10080948, 12601185, 13096065, 13096065, 13096065, 13562465, 13562465, 13562465, 13562465, 13562465, 16272958]
// 目前故障的楼层
var badMaps = [2, 4, 6, 16, 19, 21, 29, 37, 38, 42, 43, 46];
// 跑酷楼层，直接通过   
var bypassFloor = [12, 17, 19, 22, 23, 27, 41, 44, 48];

function enter(pi) {
	//pi.mapMessage("[curPortal " + pi.getPortal().getId() + "]");
	var mapId = pi.getMapId();
	// 【1】枫之高校
	if (mapId < 992001000 || mapId > 992050000) {
		pi.openNpc(9330189, "枫之高校_离开");
		return true;
	}
	// 【2】起源之塔
	var level = parseInt((mapId - 992000000) / 1000);
	var em = pi.getEventManager("副本_起源之塔");
	var prop = em.getProperty("stage" + level);
	// 没有通关，也不是 x5 层
	if (level % 10 != 5 && (prop == null || !prop.equals("clear"))) {
		if (bypassFloor.indexOf(level) < 0) {
			pi.getPlayer().dropMessage(5, "传送阵目前还处于无法使用的状态。");
		} else { // 部分关卡直接通关
			em.setProperty("stage" + level, "clear");
			pi.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
		}
		return true;
	}
	// 通关清理
	if (level == 3) {
		var itemid = [4009237, 4009238];
		pi.getPlayer().removeItem(itemid[0], pi.getPlayer().getItemAmount(itemid[0]));
		pi.getPlayer().removeItem(itemid[1], pi.getPlayer().getItemAmount(itemid[1]));
	}
	if (level == 18) {
		var itemid = [4000136];
		pi.getPlayer().removeItem(itemid[0], pi.getPlayer().getItemAmount(itemid[0]));
	}
	if (level == 34) {
		var itemid = [4009234, 4009235];
		pi.getPlayer().removeItem(itemid[0], pi.getPlayer().getItemAmount(itemid[0]));
		pi.getPlayer().removeItem(itemid[1], pi.getPlayer().getItemAmount(itemid[1]));
	}
	// 发放奖励
	var index = level - 1 - Math.floor(level / 5);
	var pointsReward = pi.getPlayer().hasEquipped(1113128) ? points[index] * 2 : points[index]; // 起源之塔增强之戒
	pi.getPlayer().dropMessage(5, "获得了" + pointsReward + "点起源点数。已被转化为了冒险岛世界的气息。");
	pi.gainItem(4036455, pointsReward);
	pi.gainExp(exps[index]);
	cm.updateAchievement(1266, 0, "script", 1, 200);
	// TODO 暂时避开故障楼层，等娜娜修复
	while (badMaps.indexOf(level + 1) > -1) {
		level++;
	}
	// 通关了？放动画
	if (mapId == 992050000) {
		pi.openNpc(0, "起源之塔_50F_通关");
	} else {
		pi.getPlayer().dropMessage(5, "传送到起源之塔的第" + (level + 1) + "层。");
		pi.warp(992000000 + (level + 1) * 1000, 0);
	}
	return true;
}
