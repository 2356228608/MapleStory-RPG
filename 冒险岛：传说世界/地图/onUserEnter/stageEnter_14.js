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
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 14 F\r\n\r\n#fs22#地下14层虽然看上去很平常，但这里却生活着具有可怕攻击力的蘑菇蝙蝠。\r\n\r\n我们在那些家伙的可视范围之外通过射击将它们消灭，然后通过这里吧。\r\n\r\n我来吸引那些家伙的注意力，你在3分钟之內把它们全都消灭掉。\r\n\r\n提醒你一下，如果子弹没有击中蝙蝠，结界就会受到损伤，我们能在这里停留的时间也就会减少。你开枪时一定要慎重。\r\n\r\n马上开始，准备好。 Ready go!", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// TODO
		//ms.getMap().startMapEffect("请躲避掉落的碎片，并在怪物撞击到魔力石之前，将它们全部消灭。注意不要远离魔力石。", 5120085);
		// 传送到小游戏模式？
		//ms.warp(992008000, 1);
	} else {
		ms.dispose();
	}
}
