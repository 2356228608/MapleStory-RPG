/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("孩子！");
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/meet/0", 0, 2000, 0, 0, 0, 4, 1);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.sendNextNoESC("呃啊啊啊！我好想你！", 1501007);
	} else if (status === i++) {
		qm.sendNextNoESC("这段时间你跑到哪里去了？我不知有多担心……");
	} else if (status === i++) {
		qm.sendNextNoESC("鲁安一直在照顾我！", 1501007);
	} else if (status === i++) {
		qm.sendNextNoESC("鲁安……？那鲁安说要交给我的小鸟！");
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 2, 1000, 0, 0, 0, 4, 1);
		qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.sendNextNoESC("看来我得向魯安道谢。啊，#h #，你把我的孩子送回来，我也得向你表示感谢。");
	} else if (status === i++) {
		qm.sendNextNoESC("我在森林里找了好久，都没找到我的孩子……");
	} else if (status === i++) {
		qm.sendNextNoESC("最近因为奇怪的声音，整片森林都变得很敏感，我还担心你会受伤呢……");
	} else if (status === i++) {
		qm.sendNextSNoESC("……");
	} else if (status === i++) {
		qm.sendNextSNoESC("魯安也很担心。她说最近没听到歌声，不知道发生了什么事。");
	} else if (status === i++) {
		qm.sendNextSNoESC("她说不能把小鸟一个人留在家里，但是最近森林又变得很敏感，因此无法外出，所以才会找我帮忙。");
	} else if (status === i++) {
		qm.sendNextNoESC("原来是这样。看来有时间我得去看望一下鲁安。\r\n不过在这之前……");
	} else if (status === i++) {
		qm.sendNextNoESC("要现在开始学习唱歌吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("#h #，我需要你的帮助。相信你一定可以帮我。");
	} else if (status === i++) {
		qm.sendNextSNoESC("（果然……）");
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(10320);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.dispose();
}
