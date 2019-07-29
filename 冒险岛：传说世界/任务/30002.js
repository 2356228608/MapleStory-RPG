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
		qm.sendNext("我想离开这里。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("你说什么？");
	} else if (status === i++) {
		qm.sendNext("我想从这里出去。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("你到底在说什么啊？这里是什么地方？你是谁？");
	} else if (status === i++) {
		qm.sendNext("这里？这里是鲁塔比斯。我想离开这里。请你帮帮我。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("（唉……一直在自言自语。真费劲。）");
	} else if (status === i++) {
		qm.sendYesNoS("（看来她好像是迷路了。要帮帮她吗？）");
	} else if (status === i++) {
		qm.sendNextS("知道了。我来看看有没有办法离开这里。");
	} else if (status === i++) {
		qm.sendNext("你真的愿意帮我吗？不许骗我哦！", 1064001);
	} else if (status === i++) {
		qm.sendNextS("嗯，肯定在某处有出去的路……");
	} else if (status === i++) {
		// 镜头移动到最右边
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 镜头移动到最左边
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 镜头移动回玩家
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 收尾		
		qm.forceStartQuest();
		// 这个还没完成
		//qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 左边传送门触发
function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextS("果然有出口。应该把这一事实告诉少女。");
	} else if (status === i++) {
		// 客户端干活？
		//qm.forceCompleteQuest(30002);
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 说不定不需要？
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("你找到离开这里的办法了吗？", 1064001);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
