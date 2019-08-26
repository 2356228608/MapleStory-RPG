/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "06";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("副本_起源之塔");
	var prop = em == null ? null : em.getProperty("stage" + parseInt(level));
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
		ms.inGameDirectionEvent_Monologue(header + "是#fs22#地下6层的#fs27#绿水灵。#fs22#\r\n\r\n它们原本是多么可爱的家伙啊……\r\n\r\n它们也变得狂暴起来了。我所做的一切似乎已变得毫无意义。\r\n\r\n虽然会很痛心，但你愿意去消灭它们吗？只要消灭300个左右，我就会为你打开通往下一层的门。\r\n\r\n对了，如果你看到巨型绿水灵，也不要惊慌。因为那只是它们聚成的一团。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
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
	var pos = ms.getMap().getPortal(1).getPosition();
	ms.onTeleport(1, ms.getPlayer().getId(), pos.getX(), pos.getY());
	em.setProperty("stage" + parseInt(level), "start");
	ms.getMap().getWeatherEffectNotice("请消灭300个绿水灵。", 147, 60000, 1);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
