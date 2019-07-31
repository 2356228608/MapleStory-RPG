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
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		//ms.inGameDirectionEvent_SetHideEffect(1);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/sealBlack0/0", 1000000, 0, 0, 1, 9999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/sealBlack1/0", 1000000, 0, 0, 1, 9999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 2000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#不管怎样，黑魔法师最终还是被封印了，对吧？\r\n\r\n而且，据说我的真身为了恢复力量，已经把自己封印在鲁塔比斯……\r\n\r\n我觉得我的行为非常愚蠢。作为一个思念体，我根本就没资格也没理由去判断真身的想法……", 100000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#自那以后我便和我所建造的生命之塔一起在这里度过了很长的时间。", 100000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/dTower/0", 1000000, 0, 0, 1, 19999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 2000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#在这么长的时间里，塔里也发生了很大的变化。\r\n\r\n首先……仅凭我一个思念体的力量很难抵抗将怪物们变得残暴的黑魔法师的力量。", 100000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {		// 收尾
		ms.warp(992000060, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
