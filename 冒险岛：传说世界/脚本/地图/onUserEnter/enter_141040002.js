/* 列娜海峡
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
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC("小家伙们……肚子饿不？", 1514003);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("汪汪！", 1514005);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("呱呱呱呱！", 1514004);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("唔唔！", 1514006);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("什么，你们说话我听不懂啊。唉……", 1514003);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("这些稚嫩的小家伙那么渴望生存……都大张着嘴等着食物。", 1514003);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("汪汪！", 1514005);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("叽叽……", 1514004);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("嗡嗡？", 1514006);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("好，好，知道了。我这就给你们找吃的。我想想，这附近有没有好钓到鱼的地方呢？", 1514003);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(141040003, 0);
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
