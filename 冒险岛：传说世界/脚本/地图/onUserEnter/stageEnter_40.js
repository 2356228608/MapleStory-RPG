/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "40";
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#第40层正由获得了头脑的稻草人守护着。它们可不好对付。\r\n\r\n由于稻草人是由稻草构成的，通过普通的攻击很难对其造成伤害。同时它们也存在弱点。\r\n\r\n你看见那边着火的地方了吗？你将稻草人引到那里。那样，稻草人就会被渐渐焚烧的。\r\n\r\n虽然你引来的稻草人越多，它们被烧毁的速度也就越快，不过那样它们就会更加愤怒，进而向你发动致命攻击的。\r\n\r\n你要小心这一点！", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请消灭稻草人，前往下一层吧。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		var eim = em.getInstance("Map_TowerOfOz");
		var map = em.getMapFactoryMap(ms.getMapId());
		var mob = em.getMonster(9309203);
		var modified = em.newMonsterStats();
		modified.setOHp(2100000000);
		mob.setOverrideStats(modified);
		mob.getStats().setFixedDamage(1000000);
		mob.getStats().setChange(true);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1000, 0));
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
