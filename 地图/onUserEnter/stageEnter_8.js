/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "08";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.addPopupSay(2540000, 6000, "希望你能消灭100个左右的火山虫。");
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
		ms.inGameDirectionEvent_Monologue(header + "是#fs22#地下8层的#fs27#火山虫#fs22#。\r\n\r\n勇士部落居然会有火山，虽然会感到奇怪，不过勇士部落在很早很早以前，本是一片火山地带。\r\n\r\n现在，在勇士部落没有火山地带了吧？很遗憾，它们现在已经无法继续在外界生存了。你愿意将它们火山中的熔岩冷却吗？在那期间，我会将通往第9层的门打开。\r\n\r\n哦，对了。如果你被火山喷发物击中，那将会非常痛苦，所以一定要小心。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		ms.warp(992008000, 1);
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "希望你能消灭100个左右的火山虫。");
	} else {
		ms.dispose();
	}
}
