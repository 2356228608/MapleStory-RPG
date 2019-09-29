/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var map = ms.getMapId();
	if (map == 101084400 && ms.getPlayer().getQuestStatus(37167) == 1) {
		ms.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h2;04=h1");
		ms.dispose();
	} else if (ms.isQuestActive(37169)) {
		action收集水1(mode, type, selection);
	} else if (ms.isQuestActive(37171)) {
		ms.setPartner(1, 1501010, 80002688, 0);
		ms.dispose();
	} else if (ms.isQuestActive(37173)) {
		action收集水2(mode, type, selection);
	} else if (ms.isQuestActive(37176)) {
		action收集水3(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action收集水1(mode, type, selection) {
	var quest = 37169;
	var water = 4036503;
	var need = 9;
	var i = -1;
	var item = ms.getItemQuantity(water);
	if (item <= 0) {
		ms.dispose();
		return;
	}
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.askYesNoS("收集到一些#b#i" + water + "##z" + water + "##k了。要把它们倒入到瓶子里面吗？");
	} else if (status === i++) {
		var cur = parseInt(ms.getQuestCustomData(quest));
		var newStatus = ms.getQuestNoRecord(quest);
		var next = Math.min(need, cur + item);
		newStatus.setCustomData("" + next);
		ms.removeAll(water);
		ms.getPlayer().updateQuest(newStatus, true);
		if (next < need) {
			ms.sendOkS("已经往瓶子里倒入#b" + next + "滴#z4036503##k了。再收集#b" + (need - next) + "滴就够了。");
			ms.playerMessage(5, "小水瓶中装了不少干净的泉水。");
		} else {
			ms.sendOkS("啊，这下满足要求了。拿给#b艾洛丁之鸟#k吧。");
			ms.playerMessage(5, "小水瓶中装满了干净的泉水。");
		}
		ms.dispose();
	}
}

function action收集水2(mode, type, selection) {
	var quest = 37173;
	var water = 4036505;
	var need = 15;
	var i = -1;
	var item = ms.getItemQuantity(water);
	if (item <= 0) {
		ms.dispose();
		return;
	}
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.askYesNoS("收集到一些#b#i" + water + "##z" + water + "##k了。要把它们倒入到瓶子里面吗？");
	} else if (status === i++) {
		var cur = parseInt(ms.getQuestCustomData(quest));
		var newStatus = ms.getQuestNoRecord(quest);
		var next = Math.min(need, cur + item);
		newStatus.setCustomData("" + next);
		ms.removeAll(water);
		ms.getPlayer().updateQuest(newStatus, true);
		if (next < need) {
			ms.sendOkS("已经往瓶子里倒入#b" + next + "滴#z4036503##k了。再收集#b" + (need - next) + "滴就够了。");
			ms.playerMessage(5, "小水瓶中装了不少干净的泉水。");
		} else {
			ms.sendOkS("啊，这下满足要求了。拿给#b艾洛丁之鸟#k吧。");
			ms.playerMessage(5, "小水瓶中装满了干净的泉水。");
		}
		ms.dispose();
	}
}

function action收集水3(mode, type, selection) {
	var quest = 37176;
	var water = 4036506;
	var need = 21;
	var i = -1;
	var item = ms.getItemQuantity(water);
	if (item <= 0) {
		ms.dispose();
		return;
	}
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		var cur = parseInt(ms.getQuestCustomData(quest));
		var newStatus = ms.getQuestNoRecord(quest);
		var next = Math.min(need, cur + item);
		newStatus.setCustomData("" + next);
		ms.removeAll(water);
		ms.getPlayer().updateQuest(newStatus, true);
		if (next < need) {
			ms.sendOkS("已经往瓶子里倒入#b" + next + "滴#z4036503##k了。再收集#b" + (need - next) + "滴就够了。");
			ms.playerMessage(5, "小水瓶中装了不少干净的泉水。");
		} else {
			ms.sendOkS("啊，这下满足要求了。拿给#b艾洛丁之鸟#k吧。");
			ms.playerMessage(5, "小水瓶中装满了干净的泉水。");
		}
		ms.dispose();
	}
}
