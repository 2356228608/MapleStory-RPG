/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "34";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("副本_起源之塔");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		startMap(em);
		return;
	}

	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "#fs22#有看到旁边的黄色卷毛牛吧？先猎杀黄色卷毛牛吧。 \r\n\r\n搜集黄色卷毛牛掉落的黄色皮革10个左右，再透过羊旁边的传送点可前往上方楼层。 \r\n\r\n从上层的紫色卷毛牛那搜集10个紫色皮革的话就可移动至下一楼！", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		startMap(em);
	} else {
		ms.dispose();
	}
}

function startMap(em) {
	ms.dispose();
	em.setProperty("stage" + level, "start");
	ms.getMap().getWeatherEffectNotice("请搜集10个以上上层紫色卷毛牛掉落的紫色皮革。", 147, 60000, 1);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
