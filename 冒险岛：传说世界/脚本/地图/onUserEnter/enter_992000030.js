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
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/terrorOfBlack0/0", 1000000, 0, 0, 1, 9999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/terrorOfBlack1/0", 1000000, 0, 0, 1, 9999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 2000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#当时的我……并不关心黑魔法师的目的，以及冒险岛世界会被他变成什么样子。\r\n\r\n只是……我很痛惜在他那毫无意义的行为下白白牺牲的无辜生命。所以我……\r\n\r\n我当时决定，就算黑魔法师结束了一切，我也要尽量做好了准备，使生命复苏。", 100000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/createTower0/0", 1000000, 0, 0, 1, 19999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/createTower1/0", 1000000, 0, 0, 1, 19999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/createTower2/0", 1000000, 0, 0, 1, 19999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 2000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#那个准备正是……\r\n\r\n在海底建造一座塔，那样即使生命灭亡，生命也会有一个栖息之所。", 100000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#建造一座要比想象的耗费更多的力量。为了不被黑魔法师以及高智商的生灵破坏，只能选择在这里，世界尽头的深水之中建造。\r\n\r\n而且，还要把低智商的动物们带到塔里，并且重新它们曾经的生存环境，这也是十分吃力的。因此，作为生命超越者的我的力量减弱了很多。不过，我并不在意。", 100000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {		// 收尾
		ms.warp(992000080, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
