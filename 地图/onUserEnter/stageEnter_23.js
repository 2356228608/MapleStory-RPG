/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "23";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		var fails = em.getProperty("stage23_fail");
		if (fails != null && fails > 0)
			ms.addPopupSay(2540000, 6000, "请谨慎越过。都已经坠落" + fails + "次啦！");
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#啊，他们为了阻挡别人进入，把其他的路都弄消失了。\r\n\r\n找不到路的时候，按上方向键时，我可以暂时给你看路线。\r\n\r\n因为也要给别人看的关系，只有三次机会，所以看的时候一定要集中精神来看。\r\n\r\n如果不小心掉落下去了，记得使用我给你的灵魂连接器。现在我会传送到在你最后看过的路前面。", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请突破到23楼。");
		ms.warp(992023000, 1);
	} else {
		ms.dispose();
	}
}
