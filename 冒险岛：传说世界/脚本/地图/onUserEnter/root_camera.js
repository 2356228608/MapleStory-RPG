/* 鲁塔比斯
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	if (ms.isQuestActive(30000)) {
		action30000(mode, type, selection);
	}else{
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
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status == i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, 0, -400);
	} else if (status == i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, 500, -1000);
	} else if (status == i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextSNoESC("啊，那边有通往新地区的路。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
	} else if (status == i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// 传送到 湿地 - 隐秘湿地
		// ms.warp(105010200, 0);
	} else {
		ms.dispose();
	}
}
