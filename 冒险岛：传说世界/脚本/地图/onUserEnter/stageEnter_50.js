/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "50";
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#现在，我们已经来到最后一层地下50层了……\r\n\r\n你能够制服她吗……老实说，这世上没有人能有这样的自信。甚至连作为创造者的我也不敢自诩能够成功。\r\n\r\n你一定要小心。我是说她的魔法、分身以及宠物。\r\n\r\n如果她要施展无限火焰，你就使用推拉敌人的攻击让她无法吟唱咒语。\r\n\r\n那将是非常困难的。不过你要加油。现在只要将桃乐丝击败就算是真正成功了。走吧。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "你如果将桃乐丝消灭，就真的胜利了。这将是一场激烈的战斗，加油。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		var eim = em.getInstance("Map_TowerOfOz");
		var map = em.getMapFactoryMap(ms.getMapId());
		var mob = em.getMonster(9309207);
		var modified = em.newMonsterStats();
		modified.setOHp(2100000000 );
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(390, 154));
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
