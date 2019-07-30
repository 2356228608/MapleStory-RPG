/* 鲁塔比斯 奇怪的少女
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 初始化
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.sendNextNoESC("我想离开这里。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("你说什么？");
	} else if (status === i++) {
		qm.sendNextNoESC("我想从这里出去。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("你到底在说什么啊？这里是什么地方？你是谁？");
	} else if (status === i++) {
		qm.sendNextNoESC("这里？这里是鲁塔比斯。我想离开这里。请你帮帮我。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("（唉……一直在自言自语。真费劲。）");
	} else if (status === i++) {
		qm.	askYesNoSNoESC("（看来她好像是迷路了。要帮帮她吗？）");
	} else if (status === i++) {
		qm.sendNextSNoESC("知道了。我来看看有没有办法离开这里。");
	} else if (status === i++) {
		qm.sendNextNoESC("你真的愿意帮我吗？不许骗我哦！", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("嗯，肯定在某处有出去的路……");
	} else if (status === i++) {
		// 镜头移动到最右边
		qm.inGameDirectionEvent_PushMoveInfo(0, 300, 500, 140);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 镜头移动到最左边
		qm.inGameDirectionEvent_PushMoveInfo(0, 300, -500, 140);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		// 镜头移动回玩家
		qm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		// 收尾
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 好像没用啊
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("你找到离开这里的办法了吗？", 1064001);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
