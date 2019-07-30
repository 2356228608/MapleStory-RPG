/* 鲁塔比斯
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	if (ms.isQuestActive(30000)) {
		action30000(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action30000(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
        ms.effect_Direction("Effect/Direction11.img/meet/Scene0");
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		ms.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
        ms.effect_Direction("Effect/Direction11.img/meet/Scene2");
		ms.inGameDirectionEvent_AskAnswerTime(14000);
	} else if (status === i++) {
		// 收尾
		ms.forceCompleteQuest(30000);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
	} else {
		ms.dispose();
	}
}
