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
		ms.inGameDirectionEvent_Effect("Effect/Direction16.img/effect/ozFamily/0", 1000000, 0, 0, 1, 9999, 1, 0, 1, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 2000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#而且，我以我喜欢的童话书里的角色为原型为这座塔创造的守护者和管理员现在变得越来越强大，这些家伙甚至把我视作敌人，而我又很难将他们消灭……\r\n\r\n这还不算。那些家伙也许是为了阻止外部的入侵，甚至随心所欲地将起源之塔内部进行了拆除、改造。现在就连我这个塔的建造者都不知道什么地方被改造成了什么样。", 100000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs22#你在起源之塔内探险的过程中，能不能顺便教训教训那帮家伙？它们处于每隔10层的位置，而且还会直接出面阻止到达最后一层的入侵者。", 100000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {		// 收尾
		ms.updateInfoQuest(42009, "map=8");
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
