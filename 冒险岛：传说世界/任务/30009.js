/* 鲁塔比斯 消灭东侧的封印守护者
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("回来啦。在你离开的这段时间，来了很多人！", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("都是来帮助我解开封印的人。冒险岛联盟答应把你从这里救出去，现在可以不用担心了。");
	} else if (status === i++) {
		qm.sendNextSNoESC("但是要想解开你的封印，必须消灭掉门外的封印守护者。你知道些什么吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("我没办法离开这里，所以什么都不知道。但是我可以感受到黑暗的力量。", 1064001);
	} else if (status === i++) {
		qm.askAcceptDecline("画着时钟的门外流出来的黑暗力量最弱。你先去消灭画着时钟的门外的封印守护者吧。", 1064001);
	} else if (status === i++) {
		qm.sendNextNoESC("一个人可能会很困难。虽然说是最弱，但我还是感觉浑身直起鸡皮疙瘩。所以你一定要和#r志同道合的同伴#k一起去！", 1064001);
	} else if (status === i++) {
		// 收尾		
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 打爆BOSS就好了？不需要脚本干活？
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
