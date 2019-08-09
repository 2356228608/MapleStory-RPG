/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "30";
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
		ms.inGameDirectionEvent_Monologue(header + "#fs22#30楼……我喜欢的童话书里出现的胆小鬼狮子是这里的守门员。 \r\n\r\n因为胆小所以会逃走或躲起来，但有时候喝了勇气药水后会大声狮子吼。 \r\n\r\n狮子吼因为是声波而无法躲避……狮子继续逃跑成功的话勇气会逐渐上升。狮子若得到勇气，攻击就会变强，要小心。 \r\n\r\n狮子吼持续太久的话是无法撑下去的。这种时候就去左边的装置让恐怖的气息散发就可以了。 \r\n\r\n那么就消灭狮子，我们在下一楼层见吧。", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "让我们靠近恐怖发生装置，将胆小的狮子唤出来吧。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
