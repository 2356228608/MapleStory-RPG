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

// 主体

// 剧情专用单向事件
function action(mode, type, selection) {
	status++;
	if (status < 10) {
		cm.getMap().startMapEffect(status + 5120001, status + 51200001, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else {
		cm.dispose();
	}
}