/*
 *  功能：测试
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	status++;
	if (status <= 0) {
		cm.dispose();
	} else if (status < 10) {
		cm.warp(992005000 + (status%9)*5000, 0);
		cm.getMap().startMapEffect("startMapEffect Code "+5120000+status,5120000+status);
		cm.askMenu("NEXT CODE : "+(5120000+status));
	} else {
		cm.dispose();
	}
}
