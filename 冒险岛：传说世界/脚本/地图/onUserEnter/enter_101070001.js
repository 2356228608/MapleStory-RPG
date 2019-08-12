/* 妖精学院艾利涅
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
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextS("#b（呃……差一点就淹死了。）");
	} else if (status === i++) {
		ms.sendNext("啊，好像是中了无法游泳的魔法，喵。", 1040002);
	} else if (status === i++) {
		ms.sendNextS("#b你应该早说嘛！");
	} else if (status === i++) {
		ms.sendNext("别用这神眼光看我，喵。我也不是样样都知道的，喵。看来得想想其他办法才行，喵。", 1040002);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(101070000, 0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
