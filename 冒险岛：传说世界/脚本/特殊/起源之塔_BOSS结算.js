/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var validLevel = [10,20,30,40,50];
var dialogue = [["好样的！终于击败了这只大蜘蛛。还是挺顺利的嘛。","我要送你一份礼物！","希望你能继续加油，我们的目标还在更深处呢。"],
["你真了不起！居然能击败铁皮人。相信后面的楼层也难不住你了。","我要送你一份礼物！","希望你能继续发挥出色，我们的目标还在更深处呢。"],
["太棒了！居然能击败胆小的狮子。我们的进度已经超过一半了！","我要送你一份礼物！","希望你能继续保持水平，我们的目标还在更深处呢。"],
["你真了不起！居然已经通过到第40层！你真是一名能力远超我想象的冒险者！","你击败了一个强大的对手。我要送你一份礼物！","希望你能继续发挥这样的气势，我们的目标还在更深处呢。"],
["莫非……真没想到你会来这里，你真的很了不起！","为纪念你通关最高层，我要送你一枚比较特殊的勋章！","你真的完成啦！祝贺你！！"]]

function action(mode, type, selection) {
	status++;
	var level = cm.getNpc();
	// 无效输入
	if (validLevel.indexOf(level) < 0) {
		cm.dispose();
		return;
	}
	var quest = 32024 + level/5;
	var medal = 1142685 + level/5;
	// 领取过了
	if (cm.isQuestFinished(quest)) {
		cm.dispose();
		return;
	}
	var index = level/10-1;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.forceStartQuest(quest);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC(dialogue[index][status-1], 2540000);
	} else if (status === i++) {
		cm.sendNextNoESC(dialogue[index][status-1], 2540000);
	} else if (status === i++) {
		cm.forceCompleteQuest(quest);
		cm.gainItem(medal, 1);
		cm.sendNextNoESC(dialogue[index][status-1], 2540000);
	} else if (status === i++) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	} else {
		cm.dispose();
	}
}
