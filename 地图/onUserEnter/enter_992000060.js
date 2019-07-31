/* 起源之塔
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
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 200, 0, 2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 2000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#而且，和我当初的设想不同的是，冒险岛世界并没有灭亡，同时那些被自然力量所淘汰的生命也继续存活在了这座塔之内。\r\n\r\n悲哀的是，现在，它们必须把栖息之所让给其他的生命，然后自己消失掉。\r\n\r\n现在，就算把它们重新送回到世上，冒险岛世界上它们曾经生活的家园也已经不复存在了。", 30000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);
		ms.warp(992000070, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
