/**
-- BMS 道具脚本空白模板 ---------------------------------------------------------------------------
道具 ID： 2434284
道具名称： 02434284
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		im.dispose();
	} else if (status === i++) {
		var item = [1082707, 1082708, 1082709, 1082710, 1082711];
		var rand = randomNum(0, 100);
		im.gainItem(im.getItemId(), -1);
		if (rand < 1) {
			im.gainItemPeriod(item[0], 1, randomNum(3, 7 ));
		} else if (rand < 10) {
			im.gainItemPeriod(item[1], 1, randomNum(3, 7 ));
		} else if (rand < 25) {
			im.gainItemPeriod(item[2], 1, randomNum(3, 7 ));
		} else if (rand < 50) {
			im.gainItemPeriod(item[3], 1, randomNum(3, 7 ));
		} else {
			im.gainItemPeriod(item[4], 1, randomNum(3, 7 ));
		}
		im.dispose();
	} else {
		im.dispose();
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
