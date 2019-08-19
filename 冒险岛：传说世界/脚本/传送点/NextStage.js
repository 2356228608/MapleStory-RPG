function enter(pi) {
	var em = pi.getEventManager("副本_枫之高校");
	var map = pi.getMapId() - 744000000;
	var prop = em.getProperty("map_" + map);
	if (prop != null && prop.equals("clear")) {
		var state = parseInt(em.getProperty("state"));
		if (state == 5) { // map 6 固定仓库
			var next = 2;
		} else if (state > 5) {	// 少抽取了一个随机数
			var next = parseInt(em.getProperty("next_map_" + state));
		} else {
			var next = parseInt(em.getProperty("next_map_" + (state + 1)));
		}
		pi.warp(744000000 + next, 0);
		em.setProperty("state", state + 1);
	} else {
		pi.getPlayer().dropMessage(5, "这里的考试还没有结束，不能前往下一间教室。");
	}
	return true;
}
