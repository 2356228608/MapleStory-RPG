/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "19";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.addPopupSay(2540000, 6000, "嗯？你想知道走下这层的方法？呵呵……行~看你好像是新来的，跟我走吧。");
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		em.setProperty("stage" + level, "start");
		ms.warp(992019000, 1);
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		ms.addPopupSay(2540000, 6000, "嗯？你想知道走下这层的方法？呵呵……行~看你好像是新来的，跟我走吧。");
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#地下19层也有黄金海滩啊。据说冒险岛世界的黄金海滩已经被黑魔法师的力量封印了...不是吗？\r\n\r\n据说前往下一层的钥匙就在那个看上去很老练的冒险家手上。\r\n\r\n要不要求助一下引路向导？", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.warp(992019000, 1);
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		ms.addPopupSay(2540000, 6000, "嗯？你想知道走下这层的方法？呵呵……行~看你好像是新来的，跟我走吧。");
	} else {
		ms.dispose();
	}
}
