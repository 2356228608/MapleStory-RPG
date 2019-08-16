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
		qm.sendNextSNoESC("但是你为什么要把灯全部关掉，让这里变得这么黑呢？本来森林深处就已经够黑的了。");
	} else if (status === i++) {
		qm.sendNextNoESC("啊……那个嘛……");
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 0, 2000, 0, 0, 0, 4, 1);
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.sendNextNoESC("有一天，我发现那家伙一个人在哭。");
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b1", "Effect/Direction21.img/Elodin/birdgrow/1", 0, 2000, 0, 0, 0, 4, 1);
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.sendNextNoESC("我就把它带到了家里，悉心地照顾它。但是没能找到它的父母。");
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b2", "Effect/Direction21.img/Elodin/birdgrow/2", 0, 2000, 0, 0, 0, 4, 1);
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.sendNextNoESC("后来有一天，它说想像我一样跟树木说话，也是我告诉它只要唱歌，就能和树木对话。");
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b3", "Effect/Direction21.img/Elodin/birdgrow/3", 0, 2000, 0, 0, 0, 4, 1);
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.sendNextNoESC("我不该那么干的……");
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b3", "Effect/Direction21.img/Elodin/birdgrow/3", 0, 1000, 0, 0, 0, 4, 1);
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 2, 1000, 0, 0, 0, 4, 1);
		qm.fieldEffect_ProcessOnOffLayer("b1", "Effect/Direction21.img/Elodin/birdgrow/1", 2, 1000, 0, 0, 0, 4, 1);
		qm.fieldEffect_ProcessOnOffLayer("b2", "Effect/Direction21.img/Elodin/birdgrow/2", 2, 1000, 0, 0, 0, 4, 1);
		qm.fieldEffect_ProcessOnOffLayer("b3", "Effect/Direction21.img/Elodin/birdgrow/3", 2, 1000, 0, 0, 0, 4, 1);
		qm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.sendNextNoESC("……然后，不在家里开灯的理由……");
	} else if (status === i++) {
		qm.sendNextNoESC("鲁安说在森林中的微光的映照下，可以让歌声变得更加美妙！", 1501003);
	} else if (status === i++) {
		qm.sendNextNoESC("……是的，我错了。");
	} else if (status === i++) {
		qm.sendNextSNoESC("……");
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(8400);
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
	qm.forceCompleteQuest();
	qm.dispose();
}
