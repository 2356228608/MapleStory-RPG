// 起源之塔通关奖励
var points = [4, 12, 14, 16, 24, 29, 35, 46, 75, 58, 73, 77, 96, 112, 137, 139, 169, 255, 186, 223, 243, 264, 280, 331, 323, 380, 555, 394, 419, 489, 472, 580, 557, 587, 679, 975, 750, 715, 749, 862, 856, 982, 1024, 1067, 2020]
var exps = [33474, 83687, 83687, 127118, 143248, 143248, 192090, 192090, 413928, 413928, 571006, 571006, 571006, 640872, 839876, 839876, 903628, 1355442, 1656447, 1656447, 1656447, 1830930, 2395173, 2395173, 2622873, 2622873, 4667404, 4667404, 5909948, 5909948, 5909948, 7038672, 7983508, 7983508, 10080948, 12601185, 13096065, 13096065, 13096065, 13562465, 13562465, 13562465, 13562465, 13562465, 16272958]
// 目前故障的楼层
var badMaps = [2, 4, 6, 16, 19, 21, 29, 37, 38, 42, 43, 46];

function enter(pi) {
	var mapId = pi.getMapId();
	if (mapId >= 992001000 && mapId <= 992050000) {
		var level = (mapId - 992000000) / 1000;
		var em = pi.getEventManager("Map_TowerOfOz");
		var prop = em.getProperty("stage" + level);
		// x5 层不给任何奖励
		if (level % 10 == 5 || (prop != null && prop.equals("clear"))) {
			var index = level - 1 - Math.floor(level / 5);
			pi.getPlayer().dropMessage(5, "获得了" + points[index] + "点起源点数。已被转化为了冒险岛世界的气息。");
			pi.gainItem(4036455, points[index]);
			pi.gainExp(exps[index]);
			// TODO 暂时避开故障楼层，等娜娜修复
			while (badMaps.indexOf(level + 1) > -1) {
				level++;
			}
			// 通关了
			if (mapId == 992050000) {
				pi.getPlayer().dropMessage(5, "传送回起源之塔的大厅。");
				pi.warp(992000000, 0);
			} else {
				pi.getPlayer().dropMessage(5, "传送到起源之塔的第" + (level + 1) + "层。");
				pi.warp(992000000 + (level + 1) * 1000, 0);
			}
		} else {
			pi.getPlayer().dropMessage(5, "传送阵目前还处于无法使用的状态。");
		}
	} else {
		// 枫之高校
		pi.openNpc(9330189, 1);
	}
	return true;
}
