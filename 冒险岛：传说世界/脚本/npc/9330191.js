/*
Made by jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	var em = cm.getEventManager("副本_枫之高校");
	var mapid = cm.getMapId() - 744000000;
	// 不在枫之高校？
	if (mapid < 0 || mapid > 16) {
		cm.dispose();
		return;
	}
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	status++;
	if (status == 0) {
		var prop = em.getProperty("map_" + mapid);
		if (prop != null && prop.equals("clear")) {
			cm.sendOk("教……教室门开了。去……去教室吧。");
			cm.dispose();
		} else if (prop != null && prop.equals("done")) {
			cm.sendOk("谢……谢谢……我们……是真正的朋友……\r\n\r\n教……教室门开了。");
		} else {
			cm.sendOk("讨厌怪……怪物。");
			cm.dispose();
		}
	} else if (status == 1) {
		var state = Math.min(15, parseInt(em.getProperty("state")));
		cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
		cm.gainExp(1000 * state * cm.getPlayer().getLevel());
		cm.gainItem(4310105, parseInt(state * cm.getPlayer().getLevel() / 10));
		em.setProperty("map_" + mapid, "clear");
		cm.dispose();
	} else {
		cm.dispose();
	}
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
