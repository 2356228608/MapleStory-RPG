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
		case 2436614: // 低级联盟金币箱
			cm.gainMeso(randomNum(10000, 100000));
			break;
		case 2436615: // 中级联盟金币箱
			cm.gainMeso(randomNum(100000, 1000000));
			break;
		case 2436616: // 高级联盟金币箱
			cm.gainMeso(randomNum(1000000, 10000000));
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
