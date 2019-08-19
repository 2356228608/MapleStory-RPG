/*
Made by jessefjxm
 */
var status = -1;
var pass = ["希望你继续进步，变得更强。你做得真是太好了。", "你很强啊……虽然还是有点不足，但已经很不错了。"];

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
			if (mapid == 16) {
				cm.sendOk("你今天的学习已经圆满结束了。可以放学了。");
			} else {
				cm.sendOk("你已经通过这里的考核了。去下一间教室吧。");
			}
			cm.dispose();
		} else {
			cm.sendOk(pass[randomNum(0, pass.length - 1)]);
		}
	} else if (status == 1) {
		var state = Math.min(15, parseInt(em.getProperty("state")));
		if (mapid == 16) {
			cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clearF");
		} else {
			cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
		}
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
