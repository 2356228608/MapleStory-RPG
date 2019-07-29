/* 鲁塔比斯
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	if (ms.isQuestActive(30000)) {
		action30000(mode, type, selection);
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
	} else if (status === i++) {
		// 文字淡入 黑体 起来…起来……
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status == i++) {
		// 文字淡出
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status == i++) {
		// 放动画 睁眼
		ms.inGameDirectionEvent_AskAnswerTime(10000); 
	} else if (status === i++) {
		// 收尾
		ms.forceCompleteQuest(30000);
		ms.curNodeEventEnd(true);
		// ! 上下黑屏还是要保留，不知道怎么操作
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
	} else {
		ms.dispose();
	}
}
