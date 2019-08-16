/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/song_close");
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.sendNextSNoESC("果然……");
	} else if (status === i++) {
		qm.sendNextNoESC("等……等等！别再唱了！", 1501015);
	} else if (status === i++) {
		qm.sendNextNoESC("嗯？大家怎么了？我的声音比以前更大了，歌也好像唱得更好了啊？");
	} else if (status === i++) {
		qm.sendNextNoESC("难道响彻森林的那个怪声……？", 1501015);
	} else if (status === i++) {
		qm.sendNextSNoESC("你好像猜对了……");
	} else if (status === i++) {
		qm.sendNextNoESC("嗯？你说什么？");
	} else if (status === i++) {
		qm.sendNextNoESC("我说你唱得非常好。", 1501015);
	} else if (status === i++) {
		qm.sendNextSNoESC("……");
	} else if (status === i++) {
		qm.sendNextNoESC("嗯……虽然唱得很好，但我的嗓子好像还没有完全放松。", 1501015);
	} else if (status === i++) {
		qm.sendNextSNoESC("（什么……就算是母亲，也不能睁眼说瞎话吧……）");
	} else if (status === i++) {
		qm.sendNextNoESC("……请小声点……）", 1501015);
	} else if (status === i++) {
		qm.sendNextNoESC("你们俩在说什么呢？我也想听听！");
	} else if (status === i++) {
		qm.sendNextSNoESC("啊……没什么……");
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceCompleteQuest();
		qm.gainExp(10320);
		qm.dispose();
	}
}
