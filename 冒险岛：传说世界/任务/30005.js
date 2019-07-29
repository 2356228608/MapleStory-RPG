 ﻿/* 鲁塔比斯 少女的身份
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextS("你是怎么到这种地方来的？这里不是你这种小孩子该来的地方。");
	} else if (status === i++) {
		qm.sendNext("鲁塔比斯是我很久以前创造的地方。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("你创造了这里？你在说什么啊？");
	} else if (status === i++) {
		qm.sendNext("我是为了恢复力量，才在大陆的中心住了下来。但是现在这里充满了黑暗的力量，我再也受不了了。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("听不懂你在说些什么。你到底是谁？");
	} else if (status === i++) {
		qm.sendNext("我叫阿丽莎，人们都叫我#r世界树#k。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("世界树？你就是世界树？拥有生命力量的世界树？听说世界树在很久以前就消失了啊？");
	} else if (status === i++) {
		qm.sendNext("嗯，和黑魔法师战斗之后，我的力量变得很弱。为了恢复力量，我在这里沉睡。这里是大陆的中心，充满了生命的气息。", 1064001);
	} else if (status === i++) {
		qm.sendNextS("这么说，几百年来你一直在这里恢复力量？实在太让人吃惊了，让人有点不敢相信。我该不会是在做梦吧？");
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
