/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var level = 45;
	var quest = 32024 + level/5;
	var medal = 1142685 + level/5;
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
		ms.sendNextNoESC("视贺你！你是第一次来到第" + level + "层吧？真是太了不起了！", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("我要送你一份礼物！", 2540000);
	} else if (status === i++) {
		ms.forceCompleteQuest(quest);
		ms.gainItem(medal, 1);
		ms.sendNextNoESC("希望你能继续保持，我们马上就要到达最深处了！", 2540000);
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
