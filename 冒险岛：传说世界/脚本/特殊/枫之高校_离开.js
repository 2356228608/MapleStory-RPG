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
	var em = cm.getEventManager("副本_枫之高校");
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var state = parseInt(em.getProperty("state"));
		if (state < 100) {
			cm.askYesNoS("今天的课程还没有结束，这样就要走了吗？");
		} else {
			cm.warp(744000000, 0);
			cm.dispose();
		}
	} else if (status == i++) {
		cm.sendOkS("呼！还好没有被老师们发现。");
	} else {
		cm.warp(744000000, 0);
		cm.dispose();
	}
}
