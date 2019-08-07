/*
鲁塔比斯地图返回到以前的地图
 */

function enter(pi) {
	if (pi.getMapId() == 105200100 || pi.getMapId() == 105200200 || pi.getMapId() == 105200300 || pi.getMapId() == 105200400) {
		pi.warp(105200000, 0);
	} else {
		var returnMap = pi.getSavedLocation("ROOT");
		pi.clearSavedLocation("ROOT");
		if (returnMap < 0) {
			returnMap = 105000000; ;
		}
		pi.warp(returnMap);
		pi.playerMessage("从鲁塔比斯回到原来所在的地方。");
	}
}
