/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	var item = Math.floor(cm.getItemQuantity(2630159) / 10);
	if (item <= 0) {
		cm.sendOkS("得收集#b10个草屑#k才能制作一把扫帚。");
		cm.dispose();
		return;
	}
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.askNumber("要用草屑再制作几个扫帚呢？", 1, 1, item);
	} else if (status === i++) {
		cm.gainItem(2630159, -item * 10);
		cm.gainItem(4036502, 1);
		cm.dispose();
	} else if (status === i++) {
		cm.dispose();
	}
}
