/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 初始化
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextS("难……难道是进了那座房子……？");
	} else if (status === i++) {
		qm.inGameDirectionEvent_MoveAction(2);
		qm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		qm.inGameDirectionEvent_MoveAction(0);
		qm.sendNextS("你好……");
	} else if (status === i++) {
		qm.sendNextS("有人吗……？");
	} else if (status === i++) {
		qm.sendNextS("是……是鬼魂吗……？");
	} else if (status === i++) {
		qm.sendNextS("呃……但是如果回到刚才那片森林……就又会迷路……被刺戳……被鸟啄……");
	} else if (status === i++) {
		qm.sendNextS("怎么办呢……");
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
