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
		cm.sendNextSNoESC_Bottom("这个蘑菇怎么这么可怕？！");
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("你是在嘲笑我太轻吗？", 1302001);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("所以父王一直很担心……", 1302001);
	} else if (status === i++) {
		cm.sendNextSNoESC_Bottom("……怎么可能？");
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("嗯？你说什么？", 1302001);
	} else if (status === i++) {
		cm.sendNextSNoESC_Bottom("没，没什么。走吧。");
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.updateInfoQuest(30067, "clear");
		cm.dispose();
	} else {
		cm.dispose();
	}
}
