/* Dawnveil
[Ellinel Fairy Academy] Clue Number Two
Hidey Hole
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.askAcceptDecline("总觉得有个地方非常可疑。要去调查下吗？");
	} else if (status == 1) {
		qm.sendNextS("#v4033829#\r\n\r\n找到了一堆衣服。看上去不像是平时穿的衣服……要展开看看吗？");
	} else if (status == 2) {
		qm.sendNextS("#v1053066##v1052887##v1052804#\r\n\r\n果真如此……这些衣服是看上去就是为了演出而特别制作的。把衣服拿给库迪，看看他怎么说。");
	} else if (status == 3) {
		qm.forceStartQuest();
		qm.gainItem(4033829, 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendNext("女孩子们偷偷制作的东西原来是衣服啊！孩子们一直在为有关封印黑魔法师的五位英雄们的演出做准备。并且，做衣服也是非常隐秘地在进行。这意味着什么呢？");
	} else if (status == 1) {
		qm.sendNextPrev("我们能掌握的就只有这些。返回1楼，和大家谈谈吧。\r\n\r\n（#b前往艾利涅1楼。）");
	} else if (status == 2) {
		qm.removeAll(4033829);
		qm.forceCompleteQuest(32114);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
}
