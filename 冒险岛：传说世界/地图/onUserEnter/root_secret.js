/* 鲁塔比斯
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	if (ms.isQuestActive(30003)) {
		action30003(mode, type, selection);
	}else{
		actionDefault(mode, type, selection);
	}
}

function action30003(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {		
		ms.sendNextSNoESC("出口没有任何问题啊？重新回去吧。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// 传送到 巨大的树根	
		ms.warp(910700200, 0);
		ms.updateInfoQuest(30003,"portaluse=2");
	} else {
		ms.dispose();
	}	
}

function actionDefault(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {		
		ms.sendNextSNoESC("四周的雾很浓，看不清东西。不知道会有什么东西出现，必须小心一点。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 然后就自然掉下去了
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		// 传送到 105010201 - 树干 - 树干
		ms.warp(105010201, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
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