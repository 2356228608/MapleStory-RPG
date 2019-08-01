/* 起源之塔
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
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 03 F\r\n\r\n#fs22#在你之前来的探险家们正在展开精彩的对决！用鸡蛋……鸡蛋攻击？！\r\n\r\n把古代乌龟蛋押注在你信任的人身上吧。如果他能在比试中取胜的话，你将获得几倍于押注数量的龟蛋。\r\n\r\n那么，这一层有1000个古代乌龟蛋，就用你搜集到的来下注吧。我相信你是聪明人。", 30000);
	} else if (status === i++) {
		ms.sendNextSNoESC("（什么呀，这家伙……既然这一层没什么特别的，让我直接下去不就行了，为何非要……怎么想都觉得奇怪。）");
	} else if (status === i++) {
		ms.sendNextNoESC("……不要在意这些细节！", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("？！");
	} else if (status === i++) {
		ms.sendNextSNoESC("我能罢工吗？");
	} else if (status === i++) {
		ms.sendNextNoESC("你找死吗？赶紧照我说的去做就对了！", 2540000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// TODO
		ms.getMap().startMapEffect("请搜集1000个古代乌龟蛋。", 5120085);
		ms.warp(992003000, 1);
	} else {
		ms.dispose();
	}
}
