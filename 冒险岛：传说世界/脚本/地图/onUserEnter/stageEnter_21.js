/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "21";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请将艾利杰消灭后往下走吧。你打猎怪物后，愤怒的艾利杰就会出现的。");
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#地下21层有着天空之城的生灵。\r\n\r\n虽然这里的环境和它们曾经生活的地方一样，但毕竟这里是地下世界，这让我偶尔会感到愧疚。\r\n\r\n如果你消灭蓝独角狮、红独角狮以及黄独角狮的话，艾利杰就会出现的。\r\n\r\n你将艾利杰消灭，那么通往下一层的门就会被打开。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请将艾利杰消灭后往下走吧。你打猎怪物后，愤怒的艾利杰就会出现的。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
