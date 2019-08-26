/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "20";
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#第20层正由铁皮人守护着，他是我很喜爱的童话书中的人物。\r\n\r\n铁皮人的行动很缓慢，所以很容易避开他的攻击，不过一旦被击中就会受到很大的伤害。\r\n\r\n铁皮人每隔一段时间就需要上一次油漆，所以桃乐丝会召唤幻影出来，为他上油漆。\r\n\r\n就在桃乐丝为铁皮人上油漆的时候，你通过推拉敌人的攻击进行妨碍，使上油漆无法进行。", 30000);
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
	em.setProperty("stage" + level, "start");
	ms.getMap().getWeatherEffectNotice("请消灭铁皮人。", 147, 60000, 1);
	//ms.warp(992019000, 1);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	var eim = em.getInstance("副本_起源之塔");
	var map = em.getMapFactoryMap(ms.getMapId());
	var mob = em.getMonster(9309205);
	var modified = em.newMonsterStats();
	modified.setOHp(1000000000);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1000, 0));
}
