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
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status == i++) {
		cm.askAcceptDecline("#b#h ##k！你能马上到圣地来一趟吗？我有紧急的事情想跟你说情况非常紧急，请尽快过来。", 1101002);
	} else if (status == i++) {
		cm.sendNextNoESC("#b#h ##k，我会用神兽的力量立刻把你传送到圣地。", 1101002);
	} else if (status == i++) {
		cm.dispose();
		cm.warp(913080000, 0);
	} else {
		cm.dispose();
	}
}
function action普通(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (askMenu)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(askMenu/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	// 初次对话

	// 结束
	cm.dispose();
}

function test() {
	var item = cm.getInventory(1).getItem(1);
	var toDrop = item.copy();
	toDrop.setArc(5000);
	cm.removeSlot(1, 1, 1);
	cm.addFromDrop(cm.getClient(), toDrop, false);
	cm.askMenu("result: " + cm.getReqLevel(item.getItemId()));

	cm.askMenu("说点啥");
}
