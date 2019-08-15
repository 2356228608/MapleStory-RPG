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
		qm.sendNextNoESC("我并不想吓你，但你竟然晕了过去。胆子怎么这么小？");
	} else if (status === i++) {
		qm.sendNextSNoESC("什么……你在那种黑黢黢的地方，戴着像鬼魂一样的黑布……");
	} else if (status === i++) {
		qm.sendNextNoESC("鬼魂一样的黑布？你知道这有多贵重吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("因……因为那些鸟，我连觉都睡不好……后来好不容易才弄到了这个可以隔音的面纱……你却说是鬼魂一样的黑布？");
	} else if (status === i++) {
		qm.sendNextSNoESC("不……为……");
	} else if (status === i++) {
		qm.sendNextSNoESC("啊！那些惨叫声难道是鸟叫？");
	} else if (status === i++) {
		qm.sendNextNoESC("刚才我不是说了吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("不对！我们只是在唱鲁安教给我们的歌！", 1501003);
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_close");
		qm.sendNextNoESC("鲁安，你不是说如果想跟树说话，可以这样唱歌吗！", 1501003);
	} else if (status === i++) {
		qm.sendNextNoESC("那也叫歌吗！天哪，勇士部的野猪都发不岀那种可怕的声音！");
	} else if (status === i++) {
		qm.sendNextSNoESC("喂……");
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_close");
		qm.sendNextNoESC("求你别唱了！你的惨叫声让树木都变得抑郁了！");
	} else if (status === i++) {
		qm.sendNextSNoESC("……听我说……");
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_close");
		qm.sendNextNoESC("我为什么要停下来！不是鲁安教我们的吗！你说树木会对此做出应答！", 1501003);
	} else if (status === i++) {
		qm.forceStartQuest();
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
		// 初始化
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0); //创建一个遮布 0x10
		qm.updateInfoQuest(37159, "3");
		qm.warp(101082000, 0);
		qm.dispose();
	}
}
