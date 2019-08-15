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
	var map = cm.getNpc();
	status++;
	var i = -1;
	// 迷路中
	if (!cm.isQuestFinished(37157)) {
		var next = map == 1010810000 ? 101081200 : 101081000;
		var portal = map == 1010810000 ? 2 : 1;
		cm.warp(next, portal);
		cm.sendOkS("糟糕……好像完全迷路了……");
	} else if (!cm.isQuestFinished(37160)) { // 找魔女
		cm.warp(101080900, 0);
	} else { // 找到路了
		var next = map == 1010810000 ? 101080900 : 101081300;
		var portal = map == 1010810000 ? 1 : 2;
		cm.warp(next, portal);
	}
	cm.dispose();
}
