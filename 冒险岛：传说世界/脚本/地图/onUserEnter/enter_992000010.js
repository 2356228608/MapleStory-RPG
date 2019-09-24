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
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextSNoESC("是这里吗？似乎移动了很远的距离……");
	} else if (status === i++) {
		ms.sendNextNoESC("快过来。", 2540000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 0, 0, -100);
		ms.inGameDirectionEvent_MoveAction(7);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextSNoESC("？这是什么声音。");
	} else if (status === i++) {
		ms.sendNextNoESC("这边。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("再观察观察。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.sendNextSNoESC("所谓世界的尽头……真是与之相衬的绝境啊。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		// 召唤阿丽莎
		ms.npc_ChangeController(2540000, 1100, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(2540000, "summon");
		ms.sendNextSNoESC("啊，你是？！生命超越者，世界树阿丽莎？！");
	} else if (status === i++) {
		ms.sendNextNoESC("哼，看来你眼力不错嘛。真不知道我的真身到底都在外面做了什么，怎么每个来到这里的人都知道生命超越者的事实。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("？真身，这是什么意思？那么也就是说你是阿丽莎的分身？");
	} else if (status === i++) {
		ms.sendNextNoESC("什么叫分身，说话小心点。我是阿丽莎的思念体。也是在黑魔法师被封印之前，那个像傻瓜一样的阿丽莎的思念体。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("黑魔法师被封印之前？");
	} else if (status === i++) {
		ms.sendNextNoESC("是的。那时候的我是……", 2540000);
	} else if (status === i++) {
		// 收尾
		ms.warp(992000020, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// NPC离场
		ms.npc_LeaveField(2540000);
	} else {
		ms.dispose();
	}
}
