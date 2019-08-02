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
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 13 F\r\n\r\n#fs22#大事不好了。维持这一层的魔法正在颤动，而且有碎片掉落下来。\r\n\r\n再加上那些被碎片击中的怪物受惊之后变得疯狂起来，而且正朝着魔力石的方向直奔而去。\r\n\r\n受到的冲击越大，崩溃的速度也就越快，所以你去将那些发疯的怪物消灭，防止它们进一步的破坏。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// TODO
		ms.getMap().startMapEffect("请躲避掉落的碎片，并在怪物撞击到魔力石之前，将它们全部消灭。注意不要远离魔力石。", 5120085);
		//ms.warp(992008000, 1);
	} else {
		ms.dispose();
	}
}
