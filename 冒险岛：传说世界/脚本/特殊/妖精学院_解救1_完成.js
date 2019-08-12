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
		cm.sendNextNoESC("呜呜，呜呜……真是吓死我了。", 1500017);
	} else if (status === i++) {
		cm.sendNextNoESC("我正和哥哥姐姐们一起排练演出时遭到了曼德拉草的袭击。由于我非常害怕，所以一直紧闭着双眼，等缓过神来后，发现自己在这个地方了……呜呜，呜呜。", 1500017);
	} else if (status === i++) {
		cm.sendNextSNoESC("#b（能找到一个孩子也算是万幸了。把这个孩子送回艾利涅吧。）");
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.warp(101073000, 0);
		cm.forceCompleteQuest(32123);
		cm.gainExp(3600);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
