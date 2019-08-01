/* 起源之塔 1f
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
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 01 F\r\n\r\n是#fs22#地下一层的#fs27#古代绿水灵。#fs22#\r\n\r\n据说现在已经灭绝了，不过从前，它们曾像花蘑菇一样繁盛兴旺。\r\n\r\n第一层可以通过积累冲击量来突破，也可以通过猎杀300个古代绿水灵突破。", 30000);
	} else if (status === i++) {
		ms.askYesNoS("#b（什么是冲击量呢……要不要问问？）");
	} else if (status === i++) {
		ms.sendNextNoESC("我有听到你的问题！简单地说，冲击量就是对它们造成的伤害啦！当力量足够，也可以突破这一层的封印。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("原来如此，就是大力出奇迹啊。好，我开工了！");
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// TODO
		ms.getMap().startMapEffect("请打猎怪物或者积累5千万以上的伤害！", 5120085);
		ms.warp(992001000, 1);
	} else {
		ms.dispose();
	}
}
