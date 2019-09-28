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
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#你要现在进入我的小屋吗？", 0, 16, 36, 0, 1, 9010000); // [类型] 接受/拒绝
	} else if (status === i++) {
		cm.updateInfoQuest(64590, "rMap=" + cm.getMapId());
		cm.dispose();
	} else {
		cm.dispose();
	}
}
