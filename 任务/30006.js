/* 鲁塔比斯 被封印的世界树
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
		qm.sendNextSNoESC("为了解开你的封印，必须先了解入侵者的身份。");
	} else if (status === i++) {
		qm.sendNextNoESC("但是他们已经全部走掉了。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("也许会留下什么线索，让我们找找看吧。对于那边的四扇门，你知道些什么吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("把我封印起来的那些人制造了那些门之后就走了。我试着到门外去，但是因为封印的原因，没办法出去。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("那些门的外面会不会有什么线索呢？到门外面去……嗯？这是怎么回事？");
	} else if (status === i++) {
		// 特效，光圈
		qm.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/Aura/0", 0, 0, 0);
		qm.sendNextNoESC("哇，你的身体发出了白光！", 1064001);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.sendNextSNoESC("到底是怎么回事？嗯，嗯？身，身体被吸进去了！");
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 特效，瞬移
		qm.inGameDirectionEvent_SetHideEffect(1);
        qm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, 0, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextNoESC("#h #！", 1064001);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾		
		qm.warp(910700300, 0);
		qm.inGameDirectionEvent_SetHideEffect(0);
		qm.forceStartQuest();
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.dispose();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
