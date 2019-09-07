/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	if (ms.getQuestStatus(35193)==1) {
		ms.dispose();
		ms.warp(910090308,0);
	} else {
		ms.dispose();
	}
}


