/* 鲁塔比斯 逃出巨大的树根1
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("怎么才能从这里出去呢？", 1064001);
	} else if (status === i++) {
		qm.sendNextS("那边有个通往外面的出口。只要通过出口出去就行。");
	} else if (status === i++) {
		qm.sendNext("我已经试过好几次了，但是没办法出去。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("没办法出去？出口堵住了吗？知道了，我去试试看。");
	} else if (status === i++) {
		qm.sendNext("快去帮我确认一下。我真的很想出去……", 1064001);
		// 收尾		
		qm.forceStartQuest();
		// 这个还没完成
		//qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

/ 传送到 ？？？？任务地图
//ms.warp(？？？？, 0);
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
		qm.sendNextS("嗯，没问题，可以通往外面。");
	} else if (status === i++) {
		qm.sendNext("真的吗？看来只有我没办法出去……", 1064001);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
