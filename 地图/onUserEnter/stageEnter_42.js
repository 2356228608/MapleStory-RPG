/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "07";
var header = "#fn黑体##fs42#B - " + level + " F\r\n\r\n";

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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#第42层是曾在神木村地区见过的橡木甲虫、金属甲虫、哈维以及血腥哈维居住的地方。\r\n\r\n桃乐丝到底想把这里变成什么样子，真是无法控制啊！\r\n\r\n你将变成守护兽的橡木甲虫、金属甲虫、哈维以及血腥哈维各消灭30只，然后通过这里吧。\r\n\r\n我的魔法力量破碎，同时碎片正在掉落，你要注意躲避别被击中了。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "请各消灭橡木甲虫、金属甲虫、哈维以及血腥哈维，向第42层突破吧。");
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
