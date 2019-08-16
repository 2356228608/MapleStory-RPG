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
		qm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_far");
		qm.sendNextSNoESC("嗯……怎么回事……？");
	} else if (status === i++) {
		qm.sendNextSNoESC("发生了什么事？快进屋里去看看吧！");
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
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
		qm.updateInfoQuest(37159, "2");
		qm.gainExp(8400);
		qm.warp(101082000, 0);
		qm.dispose();
	}
}
