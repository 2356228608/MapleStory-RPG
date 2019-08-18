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
		cm.effect_NormalSpeechBalloon("马上就要到宫殿了！", 1, 0, 0, 2000, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("哎呀，勇士，你是在故意放慢脚步吗？", 1, 1, 0, 2000, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("碧欧蕾塔公主。", 1, 0, 0, 2000, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("嗯？", 1, 1, 0, 2000, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("要是你再不闭嘴的话，我真的要把你丢下了。", 1, 0, 0, 2000, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.updateInfoQuest(30067, "clear3");
		cm.dispose();
	} else {
		cm.dispose();
	}
}
