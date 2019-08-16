/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	if (ms.isQuestActive(37155)) {
		action37155(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action37155(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextSNoESC("桉说的地方是哪里呢？");
	} else if (status === i++) {
		// 拉近
		ms.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -850, 540);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.sendNextSNoESC("是……那边吗？");
	} else if (status === i++) {
		// 呼啸声
		ms.fieldEffect_PlayFieldSound("Sound/Ambience.img/wind");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Ambience.img/wind");
		ms.sendNextSNoESC("呃……");
	} else if (status === i++) {
		ms.sendNextSNoESC("有点可怕……不过……还是进去看看吧。");
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Ambience.img/wind");
		ms.inGameDirectionEvent_PushScaleInfo(1500, 1000, 1500, -875, -285);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_PlayFieldSound("Sound/Ambience.img/wind");
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
	} else {
		ms.dispose();
	}
}
