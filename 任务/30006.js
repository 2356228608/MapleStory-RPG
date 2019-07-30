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
		qm.sendNextS("为了解开你的封印，必须先了解入侵者的身份。");
	} else if (status === i++) {
		qm.sendNext("但是他们已经全部走掉了。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("也许会留下什么线索，让我们找找看吧。对于那边的四扇门，你知道些什么吗？");
	} else if (status === i++) {
		qm.sendNext("把我封印起来的那些人制造了那些门之后就走了。我试着到门外去，但是因为封印的原因，没办法出去。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("那些门的外面会不会有什么线索呢？到门外面去……嗯？这是怎么回事？");
	} else if (status === i++) {
		// 被加特效了
		qm.sendNext("哇，你的身体发出了白光！", 1064001);
	} else if (status === i++) {
		qm.sendNextS("到底是怎么回事？嗯，嗯？身，身体被吸进去了！");
	} else if (status === i++) {
		// 隐藏主角
		qm.inGameDirectionEvent_SetHideEffect(1);
		// 瞬移特效
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.sendNext("#k #！", 1064001);
	} else if (status === i++) {
		qm.warp(910700300, 0);
		// 收尾		
		qm.forceStartQuest();
		// 这个还没完成
		//qm.forceCompleteQuest();
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
		qm.sendNextS("如果你真的是世界树，为什么会被困在这里呢？既然鲁塔比斯是你创造的，那应该不会无法离开这里啊？");
	} else if (status === i++) {
		qm.sendNext("都是那些家伙干的！", 1064001);
	} else if (status === i++) {
		qm.sendNextS("那些家伙？");
	} else if (status === i++) {
		qm.sendNext("在这里沉睡之前，我在周围设置了结界。但是不久前有一些人打破了结界，入侵了这里。由于结界被打破的冲击，我从沉睡中醒了过来，他们想把我抓走。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("入侵者是黑魔法师的手下吗？");
	} else if (status === i++) {
		qm.sendNext("我也不知道。他们全都披着斗篷，看不见脸。啊，对了，有个一只眼睛戴着眼罩的魔族男子好像是他们的队长。", 1064001);
	} else if (status === i++) {
		// 放图片
		ms.inGameDirectionEvent_AskAnswerTime(8000); 
	} else if (status === i++) {
		qm.sendNextS("（一只眼睛戴着眼罩的魔族？到底是谁呢？）");
	} else if (status === i++) {
		qm.sendNext("他们发现我的力量还没有完全恢复，就把我封印在了这里，说要等我完全恢复力量之后再把我带走。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("把你封印在了这里？所以你才没办法出去吗？");
	} else if (status === i++) {
		qm.sendNext("嗯，我试了各种办法，但还是没法出去。而且那些家伙在鲁塔比斯注入了黑暗力量。因为黑暗力量的影响，我现在一点力气都使不出……", 1064001);
	} else if (status === i++) {
		qm.sendNext("这样下去的话，在我完全恢复力量之前，黑暗就会把我吞噬掉。请你一定要帮帮我。我必须尽快离开这里。", 1064001);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
