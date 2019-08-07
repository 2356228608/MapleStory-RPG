/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "29";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#怎么会！你看一下因风沙而雾蒙蒙的天空！美丽的晚霞都毁了！ \r\n\r\n好像是红色沙漠矮人卡所做的！如果你能让天空恢复原状就好了……\r\n\r\n你问应该要怎么做？来，现在就让我来说明。", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.inGameDirectionEvent_PushMoveInfo(0, -1000, -500, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fnSTEP 1##fs32#\r\n\r\n" + "#fs22#这边到处都可看见红色沙漠矮人卡吧？ \r\n\r\n教训沙漠矮人卡的话可以抢来砂粉。 \r\n\r\n每次得到10个沙粉的时候，左边的树上会产生沙结晶。", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 1000, -500, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fnSTEP 2##fs32#\r\n\r\n" + "#fs22#捡取几个沙结晶后往右边移动。 \r\n\r\n右边也有树对吧？在这边让7个以下的沙结晶掉落在树下。 \r\n\r\n掉下正确个数的话沙结晶会消失，天空的沙尘就会开始消失，可以观赏到金黄色的美丽晚霞了。 \r\n\r\n那么，开始吧！祝你好运！", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		//ms.addPopupSay(2540000, 6000, "摇晃树木叫出那些家伙吧。");
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
