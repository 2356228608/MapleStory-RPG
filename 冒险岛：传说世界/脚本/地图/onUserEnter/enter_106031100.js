/* 起源之塔
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
