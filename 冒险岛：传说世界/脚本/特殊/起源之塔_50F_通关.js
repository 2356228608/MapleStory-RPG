/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.forceStartQuest(quest);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#你最终打败桃乐丝啦！真的太感谢了！不过……怎么回事？\r\n\r\n对塔的控制权还没到我的手上。\r\n\r\n我怎么感觉到这里还并没有结束。", 30000);
	} else if (status === i++) {
		// 收尾
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.getPlayer().dropMessage(5, "传送回起源之塔的大厅。");
		cm.warp(992000000, 0);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
