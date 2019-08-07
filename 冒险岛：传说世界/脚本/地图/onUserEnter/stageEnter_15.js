/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var level = 15;
	var quest = 32024 + level/5;
	// 领取过了
	if (ms.isQuestFinished(quest)) {
		ms.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.forceStartQuest(quest);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC("视贺你！你是第一次来到第15层吧？你如此敢于探验，甚至让我感到非常意外。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("我要送你一份礼物！", 2540000);
	} else if (status === i++) {
		ms.forceCompleteQuest(quest);
		ms.sendNextNoESC("希望你能继续发挥出色，我们的目标还在更深处呢。", 2540000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
	} else {
		ms.dispose();
	}
}
