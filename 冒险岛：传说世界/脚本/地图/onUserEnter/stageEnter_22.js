/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "22";
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#好好踩被云遮住的踏板，一定要通过才行。\r\n\r\n如果踩空掉下来的话……，想都觉得可怕？\r\n\r\n万一掉落的话我会帮助你再次挑战的。别担心。", 30000);
	} else if (status === i++) {
		ms.sendNextSNoESC("#b（要问问看这次是不是免费的吗？）");
	} else if (status === i++) {
		ms.sendNextSNoESC("#b（还是算了，就这样吧……）");
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 3000, -800);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
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
	ms.getMap().getWeatherEffectNotice("小心翼翼地踏着云朵跑到出口去吧。", 147, 60000, 1);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
