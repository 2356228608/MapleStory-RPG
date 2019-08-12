/* 鲁塔比斯
Made by Jessefjxm  地图:913080000
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	 if (ms.isQuestActive(30000)) {
	     	action30000(mode, type, selection);
	 } else if (ms.isQuestActive(30007)) {
	     	action30007(mode, type, selection);
	 } else {
		ms.dispose();
	 }
}

function action30000(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		// 召唤会动的NPC
		ms.npc_ChangeController(1101002, 150, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1101002, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status == i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status == i++) {
		// 南哈特看向玩家
		ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 2000, 0, -110, 1, 0, 1, 1101002, 0, 0);
		ms.npc_SetForceMove(1101002, 1, 150, 100);
		ms.inGameDirectionEvent_AskAnswerTime(3000); // 不加这类方法无法进入到下一阶段
	} else if (status === i++) {
		ms.sendNextNoESC("你来啦！我一直在等你。", 1101002);
	} else if (status === i++) {
		ms.sendNextSNoESC("因为听说事情非常紧急，我就赶紧过来了。到底发生了什么事？");
	} else if (status === i++) {
		ms.sendNextNoESC("冒险岛联盟收到了重要的情报，我急着把你叫过来，是想把情况告诉你。根据情报，最近在林中之城北部地区出现了之前没有的神秘地区。", 1101002);
	} else if (status === i++) {
		ms.sendNextSNoESC("新的地区？");
	} else if (status === i++) {
		ms.sendNextNoESC("可以隐约地感觉到结界的气息，好像是之前被结界隐藏起来的地区。现在我们对那里还一无所知。", 1101002);
	} else if (status === i++) {
		ms.sendNextNoESC("问题是在那个地区可以感觉到很强的黑暗气息。冒险岛联盟推测那里或许是黑魔法师一伙的基地，但是还无法确定。", 1101002);
	} else if (status === i++) {
		ms.sendNextSNoESC("你能到那里去看看，到底是什么地方吗？");
	} else if (status === i++) {
		ms.sendNextNoESC("我们已经派遣冒险骑士团成员前去调查，但是那里被迷雾笼罩着，还有很多茂盛的树木，现在连地形都还没有调查清楚。", 1101002);
	} else if (status === i++) {
		ms.sendNextSNoESC("那我应该怎么做呢？");
	} else if (status === i++) {
		ms.sendNextNoESC("我们怀疑那个突然出现的地区是黑魔法师一伙的基地，必须先调查一下那个地区为什么会突然出现。但是现在冒险骑士团的人手非常不足。", 1101002);
	} else if (status === i++) {
		ms.sendNextNoESC("#b#h ##k，希望你能帮帮我们。我现在马上把你送到#b寂静的湿地#k去。请你去对和那里相连的新地区进行探索。如果发现了什么，请立刻向我报告。", 1101002);
	} else if (status === i++) {
		ms.sendNextNoESC("好的，我马上用神兽的力量把你送到#b寂静的湿地#k去。", 1101002);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// 传送到 寂静的湿地
		ms.warp(105010000, 0);
		// NPC离场
		ms.npc_LeaveField(1101002);
	} else {
		ms.dispose();
	}
}

// 召唤一只南哈特来对话
function action30007(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 召唤会动的NPC
		ms.npc_ChangeController(1101002, 150, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1101002, "summon");
		ms.dispose();
	} else {
		ms.dispose();
	}
}
