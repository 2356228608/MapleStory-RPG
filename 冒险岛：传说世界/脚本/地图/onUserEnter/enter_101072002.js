/* 妖精学院艾利涅
Made by Jessefjxm
 */
var status = -1;
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.sendNextNoESC("啊？让我做艾利涅的实习老师？", 1500015);
	} else if (status === i++) {
		ms.sendNextNoESC("校，校长先生？您是要任命人类为实习老师吗？", 1500002);
	} else if (status === i++) {
		ms.sendNextNoESC("我觉得，借这次机会，艾利涅里也需要一些改变。真是因为我们过度排斥人类文明，才招来了这样的结果。因此，我们艾利涅也需要和外部进行沟通。", 1500001);
	} else if (status === i++) {
		ms.sendNextNoESC("曾几何时，黑魔法师将冒险岛世界笼罩在恐怖之下……很多势力为了将其复活，而在大陆各处活动着。在这种情况下，我们妖精不能再袖手旁观下去了。要想合力，那就先要同心。你说对不对？", 1500001);
	} else if (status === i++) {
		ms.sendNextNoESC("呵呵，既然校长先生这样想的话…", 1500002);
	} else if (status === i++) {
		ms.sendNextNoESC("谢谢！这多亏了你啊，#b#h ##k！", 1500015);
	} else if (status === i++) {
		ms.sendNextSNoESC("那么，孩子们又可以继续演出了吧。");
	} else if (status === i++) {
		ms.sendNextNoESC("啊，孩子们好像已经修改了剧本正在排练呢。看来，这次事件让他们收获了很多感动啊。", 1500001);
	} else if (status === i++) {
		ms.sendNextSNoESC("……？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 300, -800, 500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		ms.sendNextNoESC("来呀，你这个恶党地鼠王！我#b#h ##k，要以正义的名义消灭你，让我送你回地下世界去吧！", 1500006);
	} else if (status === i++) {
		ms.sendNextNoESC("啊，可恶的家伙！我要履行#b#h ##k的职责！", 1500005);
	} else if (status === i++) {
		ms.sendNextNoESC("我也是，我也是！", 1500004);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC("演出的题目是#b邪恶的恶党地鼠王和正义的守护者#h ##k。", 1500001);
	} else if (status === i++) {
		ms.sendNextSNoESC("……");
	} else if (status === i++) {
		ms.sendNextNoESC("哈哈哈，演出一定会非常有趣的。", 1500015);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(101072000, 0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
