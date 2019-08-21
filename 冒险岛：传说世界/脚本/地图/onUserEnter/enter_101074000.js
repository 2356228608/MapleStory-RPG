/* 妖精学院艾利涅
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, -600, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.playerMessage(-1, "经过通道后，隐藏着的妖精森林就显露了出来。");
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.fieldEffect_ScreenMsg("Map/Effect.img/temaD/enter/fairyAcademy");
		ms.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		if (ms.isQuestFinished(32104)) {
			ms.warp(101070010, 0);
		}else{
			ms.warp(101070000, 0);
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
