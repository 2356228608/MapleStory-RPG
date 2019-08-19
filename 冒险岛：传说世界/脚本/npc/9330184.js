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
			cm.sendOk("不打扰你学习了。你去下一间教室吧~");
			cm.dispose();
		} else if (prop != null && prop.equals("done")) {
			cm.sendOk("谢谢你帮助我。使用僵尸捕获术的话，可以收集到不少的图腾，嘿嘿嘿。\r\n\r\n僵尸都消失了，我帮你把门打开了。");
		} else {
			cm.sendOk("请帮帮我~僵尸竟然这么多……");
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
