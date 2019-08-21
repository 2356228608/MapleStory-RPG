/* 妖精学院艾利涅
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 300, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.playerMessage(-1, "好似从梦中惊醒，妖精森林渐渐变远了。");
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(101030000, 5);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
