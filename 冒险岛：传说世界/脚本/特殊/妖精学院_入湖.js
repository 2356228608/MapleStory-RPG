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
function action(mode, type, selection) {}

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendNextS("嗯？好奇怪的感觉，身体怎么变得那么重？");
	} else if (status === i++) {
		cm.warp(101070001, 0);
		cm.forceCompleteQuest(32102);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
