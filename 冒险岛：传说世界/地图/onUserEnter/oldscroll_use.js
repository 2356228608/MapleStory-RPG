/* 鲁塔比斯
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
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {		
		ms.sendNextSNoESC("虽然卷轴很陈旧，但是一点问题都没有。重新回去吧。");
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
		ms.updateInfoQuest(30004,"oldscroll=2");
	} else {
		ms.dispose();
	}
}
