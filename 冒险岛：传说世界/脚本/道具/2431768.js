/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var chat = ["#e#b我们的秘密物品已经安全地藏在书桌下了。这可千万不能让副校长发现。", "困死了……何时才下课啊？", "你更傻！彩虹反射"];
var randChat = 0;
// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	if (!im.isQuestActive(32110)) {
		im.sendOkS("#b（上面写的都是一些闲聊的内容……没什么有价值的东西）");
		im.dispose();
		im.gainItem(im.getItemId(), -1);
		return;
	}
	if (status == 0) {
		im.gainItem(im.getItemId(), -1);
		randChat = randomNum(0, chat.length - 1);
		im.sendNext(chat[randChat], 1500029);
	} else if (status == 1) {
		if (randChat == 0) {
			im.sendOkS("书桌下,秘密物品……？这个应该能成为线索。和#b魔法师库迪#k商议一下吧。");
			im.gainExp(4800);
			im.forceCompleteQuest(32110);
			im.dispose();
		} else {
			im.sendOkS("……总之，好像并不是十分重要的样子。看看别的纸条吧。");
		}
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
