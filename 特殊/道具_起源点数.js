/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var item = cm.getNpc();
	if (cm.haveItem(item, 1)) {
		switch (item) {
		case 2432503: // 起源点数包1
			var reward = randomNum(1, 10);
			cm.playerMessage(5, "获得了" + reward + "点起源点数。已被转化为了冒险岛世界的气息。");
			cm.gainItem(4036455, reward);
			break;
		case 2432502: // 起源点数包10
			var reward = randomNum(10, 100);
			cm.playerMessage(5, "获得了" + reward + "点起源点数。已被转化为了冒险岛世界的气息。");
			cm.gainItem(4036455, reward);
			break;
		case 2432464: // 起源点数包
			var reward = randomNum(100, 1000);
			cm.playerMessage(5, "获得了" + reward + "点起源点数。已被转化为了冒险岛世界的气息。");
			cm.gainItem(4036455, reward);
			break;
		}
		cm.gainItem(item, -1);
	}
	cm.dispose();
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
