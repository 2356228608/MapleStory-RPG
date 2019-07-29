/* 鲁塔比斯 逃出巨大的树根2
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("看样子利用出口逃出去是不可能了。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("那该怎么办？");
	} else if (status === i++) {
		qm.sendAcceptDecline("这是我来这里时带来的卷轴。据说可以用它移动到附近的村庄，我才带的。可是我使用后却什么变化也没有。估计是假货。你帮我瞧瞧吧。", 1064001);
	} else if (status === i++) {
		qm.sendNext("给，这是卷轴！", 1064001);
	} else if (status === i++) {
		qm.gainItem(2431151,1);
		// 收尾		
		qm.forceStartQuest();
		// 这个还没完成
		//qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 传送到 910700000
function 后续action(mode, type, selection) {
	status++;
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
		ms.sendNextSNoESC("虽然卷轴很陈旧，但是一点问题都没有。重新回去吧。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// 传送到 巨大的树根	
		ms.warp(910700200, 0);
	} else {
		ms.dispose();
	}
}

// 说不定不需要？
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("确认了吗？", 1064001);
	} else if (status === i++) {
		qm.sendNextS("这次的卷轴也什么问题都没有。");
	} else if (status === i++) {
		qm.sendNext("这次又失败了……我真的没办法出去吗……？", 1064001);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
