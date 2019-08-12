/* Dawnveil
Cutscene Mole King
Woonie, Tracy, Mole king Lair
Made by Daenerys
 */
var status = -1;

function start() {
	action(1, 0, 0);
}

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
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.spawnNpcForPlayer(1500026, -383, 245);
		cm.npc_ChangeController(1500031, 49, 245, 1); //D5 F8 86 01
		cm.npc_SetSpecialAction(1500031, "summon");
		cm.npc_ChangeController(1500032, 186, 245, 1); //D5 F8 86 01
		cm.npc_SetSpecialAction(1500032, "summon");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNextNoESC("太可怕了……呜呜，呜呜。我们只是想排练演出罢了……", 1500016);
	} else if (status === i++) {
		cm.sendNextNoESC("别担心，乌尼，会没事的……会有人来救我们的。", 1500018);
	} else if (status === i++) {
		cm.sendNextNoESC("呵呵呵，竟敢侵犯我地鼠王的领地，你们这些妖精，个头不大，可胆子倒挺大啊。", 1500026);
	} else if (status === i++) {
		cm.sendNextNoESC("请放了我们吧。我们不会再踏入这里半步。", 1500018);
	} else if (status === i++) {
		cm.sendNextNoESC("那怎么行。现在，这里马上就要成为我的王国了！并且，你们会成为我的新娘。", 1500026);
	} else if (status === i++) {
		cm.sendNextNoESC("什么，是谁！竟敢！", 1500016);
	} else if (status === i++) {
		cm.sendNextNoESC("不能继续在这黑暗的地底待下去了。我把曼德拉草释放到外面的世界也只不过是个开始。这就是地下世界的宣战！不管哪个妖精都阻止不了我，嘿嘿！", 1500026);
	} else if (status === i++) {
		cm.sendNextNoESC("呜，谁来帮帮我！……", 1500018);
	} else if (status === i++) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		//cm.forceCompleteQuest(32126);
		cm.warp(101073100, 0);
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
