/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "07";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + parseInt(level));
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		ms.spawnNpcForPlayer(2540001, -850, 2300);
		startMap(em);
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
		ms.spawnNpcForPlayer(2540001, -850, 2300);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "#fs22#在黑魔法师的影响下，变得狂暴的猴子们正在攻击人类。\r\n\r\n啊，那边有人受到了猴子的攻击，看那边！", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 0, 2500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#你去将所有的猴子驱逐出去，然后救助那里的人们。我随后会为你打开通往下一层的门。\r\n\r\n如果受伤的探险家死去的话，你将无法进入下一层，所以要注意。", 30000);
	} else if (status === i++) {
		ms.sendNextSNoESC("#b（要不要问问需要捕捉多少个呢？）");
	} else if (status === i++) {
		ms.sendNextNoESC("左，右，左，右……我数数……", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("#b（不管了，我先上了！）");
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

function startMap(em){
	ms.dispose();
	ms.warp(992007000, 1);
	em.setProperty("stage" + parseInt(level), "start");
	ms.addPopupSay(2540000, 6000, "请你守护好那名被狂暴的猴子伤害的探险家。");
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
