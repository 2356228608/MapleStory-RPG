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
		cm.dispose();
	} else if (status == i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status == i++) {
        cm.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/Aura/0", 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status == i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
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
