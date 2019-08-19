var status = 0;
var selStr;
var sel;
var selitem;
var fail = ["你是认真的吗……？", "我在画画，可以不要一直防碍我吗？", "请不要这样，你会困扰我的。"];

function start() {
	status = -1;
	action(1, 0, 0);
}

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
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var prop = em.getProperty("map_" + mapid);
		if (prop != null && prop.equals("clear")) {
			cm.sendOk("嘻嘻，我已经答应你了。你先去下一间教室吧！");
			cm.dispose();
		} else {
			selStr = "喔？来这边有什么事吗？#b\r\n";
			selStr += "#L1#那个……你有喜欢的人吗？#l\r\n";
			selStr += "#L2#我喜欢你#l\r\n";
			selStr += "#L3#跟我交往吧！！#l\r\n";
			selStr += "#L4#这样的感觉是第一次，最近看到你都心跳加快……#l\r\n";
			cm.askMenu(selStr);
		}
	} else if (status == 1) {
		if (selection == randomNum(1, 4)) {
			cm.sendOk("这样啊……事实上我也……我们交往看看。");
		} else {
			cm.sendOk(fail[randomNum(0, fail.length - 1)]);
			cm.dispose();
		}
	} else if (status == 2) {
		var state = Math.min(15, parseInt(em.getProperty("state")));
		cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
		cm.gainExp(1000 * state * cm.getPlayer().getLevel());
		cm.gainItem(4310105, parseInt(state * cm.getPlayer().getLevel() / 10));
		em.setProperty("map_" + mapid, "clear");
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
