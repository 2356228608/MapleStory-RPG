/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "33";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("副本_起源之塔");
	var map = em.getMapFactoryMap(ms.getMapId());
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && (prop.equals("start") || prop.equals("clear"))) {
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
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				var reactor = map.getReactorByName(i + "" + j);
				reactor.forceHitReactor(ms.getPlayer(), randomNum(0, 3));
			}
		}
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "#fs22#这楼是有着古代植物的植物圈。 \r\n\r\n啊，这些家伙们混在植物园的房间里，无法轻​​易地走下去。 \r\n\r\n通过传送点前要仔细看好方向，请移动至右边最里面的传送点。不是想要的方向的话，丢下迷宫钥匙 - 逆时针方向或	迷宫钥匙 - 顺时针方向就会改变方向，好好珍惜使用它们。", 30000);
		// 那边看起来像个新手的探险家感觉有点奇怪，要问问他吗？
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
	ms.getMap().getWeatherEffectNotice("按照你自己的意愿转动传送口，然后前往下一层吧。", 147, 60000, 1);
	ms.gainItem(4009233, 8);
	//ms.gainItem(4009231, 2);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
