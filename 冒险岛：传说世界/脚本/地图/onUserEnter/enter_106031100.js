/* 
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	if (ms.isQuestActive(30068)) {
		action拼图(mode, type, selection);
	} else {
		action片头(mode, type, selection);
	}
	return true;
}

function action片头(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.playerMessage(-1, "本故事需要在1024*768以上的分辨率下进行。");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_Direction("Effect/Direction2.img/flowervioleta/opennig");
		ms.inGameDirectionEvent_AskAnswerTime(10000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106031000, 0);
		ms.forceCompleteQuest(30050);
		ms.gainExp(31125);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action拼图(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.inGameDirectionEvent_AskAnswerTime(750);
	} else if (status === i++) {
		ms.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/puzzle");
		ms.inGameDirectionEvent_AskAnswerTime(2750);
	} else if (status === i++) {
		// 收尾
		ms.warp(106030600, 3);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		ms.forceCompleteQuest(30068);
		ms.forceStartQuest(30069);
		ms.gainExp(41800);
		ms.gainItem(4034114, -10);
	} else {
		ms.dispose();
	}
}
