/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var NPC = 2540000;
// UI
var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
var lock = "#v2200001#";

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var item = cm.getNpc();
	if (!cm.haveItem(item, 1)) {
		cm.dispose();
		return;
	}
	if (item >= 2028263 && item <= 2028272) {
		cm.gainItem(item, -1);
		var base = 2028273 - item;
		var text = "箱子里的东西有：\r\n";
		// 2435049	咒语痕迹		10%
		text += roll(2435049, 10, base, 30);
		// 2432503	起源点数包 1	5%
		text += roll(2432503, 5, base, 1);
		// 2432502	起源点数包 10	2%
		text += roll(2432502, 2, base, 1);
		// 2432464	起源点数包 100 	1%
		text += roll(2432464, 1, base, 1);
		// 2432468	碎裂的箱子碎片 	1%
		text += roll(2432468, 1, base, 1);
		// 2049043	白衣卷轴10%		10%
		text += roll(2049043, 10, base, 1);
		// 5064100	保护卷轴		10%
		text += roll(5064100, 10, base, 1);
		// 5062010	终极神奇魔方	1%
		text += roll(5062010, 1, base, 1);
		// 5062000	神奇魔方		10%
		text += roll(5062000, 10, base, 1);
		// 1402224	柳德之剑		1%
		text += roll(1402224, 1, base, 1);
		// 1112534~1112590	戒指	1%
		text += roll(randomNum(1113098, 1113128), 1, base, 1);
		cm.sendOkS(text);
	} else if (item == 2028273) {
		cm.gainItem(item, -1);
		var text = "箱子里的东西有：\r\n";
		// 1112534~1112590	戒指	100%
		text += roll(randomNum(1113098, 1113128), 100, 1, 1);
	} else if (item == 2433841) {
		cm.gainItem(item, -1);
		var text = "箱子里的东西有：\r\n";
		// 1112534~1112590	戒指	100%
		text += rollPeriod(randomNum(1113098, 1113128), 100, 1, 1, 3, 7);
	}
	cm.dispose();
}

function rollPeriod(rewardId, rate, base, count, minTime, maxTime) {
	var number = randomNum(0, 100) < rate * base ? count : 0;
	if (number > 0) {
		cm.gainItemPeriod(rewardId, number, randomNum(minTime, maxTime));
		return (number + " 个 #v" + rewardId + "##z" + rewardId + "#\r\n");
	} else {
		return "";
	}
}

function roll(rewardId, rate, base, count) {
	var number = randomNum(0, 100) < rate * base ? count : 0;
	if (number > 0) {
		cm.gainItem(rewardId, number);
		return (number + " 个 #v" + rewardId + "##z" + rewardId + "#\r\n");
	} else {
		return "";
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
