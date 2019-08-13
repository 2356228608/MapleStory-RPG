/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "27";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && (prop.equals("start") || prop.equals("clear"))) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		em.setProperty("stage" + level, "start");
		ms.warp(992027000, 1);
		ms.addPopupSay(2540000, 6000, "移动时避开奇怪的踏板与绳子吧。");
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#这里某些地方很复杂吧？ \r\n\r\n有时候会有断掉的踏板或绳子，要小心。 \r\n\r\n万一踏板掉落或踩到奇怪的地方的话会产生障碍物，请一定要小心通过！", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.warp(992027000, 1);
		ms.addPopupSay(2540000, 6000, "移动时避开奇怪的踏板与绳子吧。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	} else {
		ms.dispose();
	}
}
