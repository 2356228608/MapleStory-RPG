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
	if (!cm.isQuestFinished(37154)) {
		cm.sendOkS("这地方看上去不太对劲。我还是谨慎一点吧……");
		cm.dispose();
		return;
	} else if (cm.isQuestFinished(37160)) {
		cm.warp(101080900, 0);
		cm.dispose();
		return;
	}
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextSNoESC("嗯……不会有什么事吧……？");
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.warp(910143001, 0);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
