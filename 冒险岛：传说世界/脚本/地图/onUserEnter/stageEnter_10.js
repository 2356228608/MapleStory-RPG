/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "10";
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#第10层由一只巨大的蜘蛛守护着。\r\n\r\n蜘蛛会到处粘吐蜘蛛茧然后产下小蜘蛛，所以你只要见到蛛茧就要迅速将其铲除。\r\n\r\n而且如果蜘蛛用蛛丝将整个身体缠绕起来，那么它所受到的攻击就会被分散，所以一定要注意。\r\n\r\n你还要小心蛛毒以及你的移动速度是否减缓，务必要谨慎作战。", 30000);
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
	em.setProperty("stage" + level, "start");
	ms.getMap().getWeatherEffectNotice("请击败巨型蜘蛛。", 147, 60000, 1);
	//ms.warp(992008000, 1);
	var eim = em.getInstance("副本_起源之塔");
	var map = em.getMapFactoryMap(ms.getMapId());
	var mob = em.getMonster(9309201);
	var modified = em.newMonsterStats();
	modified.setOHp(400000000);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 0));
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	ms.dispose();
}
