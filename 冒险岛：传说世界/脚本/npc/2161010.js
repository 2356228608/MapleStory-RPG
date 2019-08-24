/*
Made by jessefjxm
 */
var status = -1; // status: 当前聊天交互轮数
var itemid = [4009237, 4009238];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askYesNo("你想离开阿尼的监狱吗？");
	} else if (status === i++) {
		cm.warp(211061000, 6);
		cm.dispose();
	}
}
