/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "41";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请小心越过障碍，向第41层突破吧。");
		//ms.warp(992019000, 1);
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		ms.dispose();
		return;
	}

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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#嗯……以前的这里可不是这个样子的，一定是发生了什么变化。\r\n\r\n这里曾经只是一个普通的森林，生活着各种生物，不过现在的道路变得极为复杂。\r\n\r\n等等。这里似乎还有陷阱。一看就知道不是那么容易通过的。\r\n\r\n走到这一步已经无法回头了。让我们奋力冲出这里吧。", 30000);
	} else if (status === i++) {	// 下猴子 右下火 右上台阶 左边终点 左边入口
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, -400, -400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1750);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, 1300, -200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, 2700, -700);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, 500, -700);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(5500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请小心越过障碍，向第41层突破吧。");
		//ms.warp(992019000, 1);
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	} else {
		ms.dispose();
	}
}
