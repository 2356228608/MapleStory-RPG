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
	var id = cm.getNpc();
	var curmap = cm.getMapId();
	if (cm.getMonsterCount(curmap) == 0) {
		cm.warp(id, 0);
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		cm.askYesNoS("确定要就这样结束挑战吗？");
	} else if (status == 1) {
		cm.warp(id, 0);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
