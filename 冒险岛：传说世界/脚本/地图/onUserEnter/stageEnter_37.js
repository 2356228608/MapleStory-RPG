/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "37";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.addPopupSay(2540000, 6000, "请消灭狐蒙，秃鹰，沙漠地鼠，沙漠毒蝎各100只。");
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#地下37楼有着尼哈沙漠地区的生命体。任谁都觉得荒废的沙漠中也有生命存在。 \r\n\r\n继续往地下深处探索也没有不被邪恶力量影响的孩子……\r\n\r\n这地方有狐蒙，秃鹰，沙漠地鼠，沙漠毒蝎总共4种的生命体。请各消灭100只左右。\r\n\r\n现在已经往下探索很深了，请更慎重。加油！", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 0, 800);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		ms.warp(992037000, 1);
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请消灭狐蒙，秃鹰，沙漠地鼠，沙漠毒蝎各100只。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	} else {
		ms.dispose();
	}
}
