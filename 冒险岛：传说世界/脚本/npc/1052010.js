/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  脚本功能：航海奖励
 *  @Author 娜娜
 */
var itemList = Array(
		Array(4310100, 800, 50, 3),
		Array(4310100, 800, 60, 3),
		Array(4310100, 800, 70, 3));

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 910360203) {
		action地铁管理处(mode, type, selection);
	} else {
		action2(mode, type, selection);
	}
}

function action地铁管理处(mode, type, selection) {
	if (status >= 2 && mode == 0) {
		cm.sendOk("Alright, see you next time.");
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		if (cm.getQuestStatus(2057) == 1 && !cm.haveItem(4031041)) {
			cm.gainItem(4031041, 1); // Shumi's Roll of Cash
			cm.warp(103000000, 0);
		} else {
			var rand = 1 + Math.floor(Math.random() * 7);
			if (rand == 1) {
				cm.gainItem(4020005, 2); // Sapphire Ore
			} else if (rand == 2) {
				cm.gainItem(4020006, 2); // Topaz Ore
			} else if (rand == 3) {
				cm.gainItem(4020004, 2); // Opal Ore
			} else if (rand == 4) {
				cm.gainItem(4020001, 2); // Amethyst Ore
			} else if (rand == 5) {
				cm.gainItem(4020003, 2); // Emerald Ore
			} else if (rand == 6) {
				cm.gainItem(4020000, 2); // Garnet Ore
			} else if (rand == 7) {
				cm.gainItem(4020002, 2); // AquaMarine Ore
			}
			cm.warp(103000000, 0);
		}
		cm.gainAchievement(1069, 2, "script=1");
		cm.dispose();
	}
}

function action2(mode, type, selection) {
	if (status >= 2 && mode == 0) {
		cm.sendOk("Alright, see you next time.");
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var chance = Math.floor(Math.random() * 800);
		var finalitem = Array();
		for (var i = 0; i < itemList.length; i++) {
			if (itemList[i][1] >= chance) {
				finalitem.push(itemList[i]);
			}
		}
		if (finalitem.length != 0) {
			var item;
			var random = new java.util.Random();
			var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			var quantity = finalitem[finalchance][2];
			var notice = finalitem[finalchance][3];
			item = cm.gainGachaponItem(itemId, quantity, "航海奖励", notice);
			if (item != -1) {
				cm.worldSpouseMessage(0x25, "[航海奖励]玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "击败航海妖怪领取凯梅尔兹金币" + quantity + "个");
			} else {
				cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
			}
		} else {
			var item;
			var random = new java.util.Random();
			var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			var quantity = finalitem[finalchance][2];
			var notice = finalitem[finalchance][3];
			item = cm.gainGachaponItem(itemId, quantity, "航海奖励", notice);
			if (item != -1) {
				cm.worldSpouseMessage(0x25, "[航海奖励]玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "击败航海妖怪领取凯梅尔兹金币" + quantity + "个");
			} else {
				cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
			}
		}
		cm.gainItem(2433015, 1);
		cm.warp(103000000, 0);
		cm.dispose();
	}
}
