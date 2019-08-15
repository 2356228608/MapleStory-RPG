/*
Made by Jessefjxm
 */
var status = -1;
function action(mode, type, selection) {
	status++;
	if (ms.isQuestFinished(37157) && !ms.isQuestFinished(37158)) {
		action37157(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action37157(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.sendNextSNoESC("呃呃……");
	} else if (status === i++) {
		ms.sendNextSNoESC("不是往这边走吗？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -50, 30);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNextSNoESC("啊……");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.forceCompleteQuest(37157);
		ms.dispose();
	}
}
