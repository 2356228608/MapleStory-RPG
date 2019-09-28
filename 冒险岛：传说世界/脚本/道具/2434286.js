/**
-- BMS 道具脚本空白模板 ---------------------------------------------------------------------------
道具 ID： 2434286
道具名称： 02434286
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
		var id = im.getItemId();
		var traitName = ["charisma", "insight", "will", "craft", "sense", "charm"];
		var traitNameCN = ["领导力", "洞察", "意志力", "手技", "感性", "魅力"];
		var rand = randomNum(0, traitName.length - 1);
		cm.addTrait(traitName[rand], 30);
		im.gainItem(im.getItemId(), -1);
		cm.playerMessage(5, traitNameCN[rand] + "提高了30点。");
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
