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
		cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNextNoESC("万岁！得救啦…之前我被怪物围住，所以一动都不敢动。", 1500019);
	} else if (status === i++) {
		cm.sendNextNoESC("你是谁？难道你是来拯救我们的英雄吗？", 1500020);
	} else if (status === i++) {
		cm.sendNextSNoESC("#b（失踪的孩子一共有五名。那其他孩子在哪里呢？）");
	} else if (status === i++) {
		cm.sendNextNoESC("啊，对了，请救救乌尼和特勒西吧！乌尼和特勒西都是女孩子……有个骑着战车的奇怪影子嗖的一下把她们劫走了！", 1500020);
	} else if (status === i++) {
		cm.sendNextSNoESC("#b奇怪的影子……？");
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.gainExp(3600);
		cm.warp(101073201, 0);
		cm.forceCompleteQuest(32126);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
