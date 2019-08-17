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
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNextSNoESC_Bottom("马上就要到宫殿了！");
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("哎呀，勇士，你是在故意放慢脚步吗？", 1302001);
	} else if (status === i++) {
		cm.sendNextSNoESC_Bottom("碧欧蕾塔公主。");
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("嗯？", 1302001);
	} else if (status === i++) {
		cm.sendNextSNoESC_Bottom("要是你再不闭嘴的话，我真的要把你丢下了。");
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.updateInfoQuest(30067, "clear3");
		cm.dispose();
	} else {
		cm.dispose();
	}
}
