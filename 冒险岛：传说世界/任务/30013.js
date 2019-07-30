/* 鲁塔比斯 拯救世界树
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC("封印全部解开了，这下终于可以到外面去了！", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("（南哈特让我把世界树带到盛迪渠，该怎么办呢？她刚刚解开了封印，看她那么开心……）");
	} else if (status === i++) {
		qm.sendNextSNoESC("祝贺你恢复了自由。但是……冒险岛联盟希望你到圣地去。");
	} else if (status === i++) {
		qm.sendNextNoESC("圣地……？", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("嗯，因为有很多人都在打你的主意，在圣地有女皇和神兽的保护，应该会比较安全。但是选择权在你，不愿意的话，不去也可以。她们没有权利逼迫你做出选择。");
	} else if (status === i++) {
		qm.sendNextNoESC("……你说得对，如果在外面乱走，我的力量也许会被邪恶的家伙夺走。冒险岛联盟的判断是正确的。虽然有点不太乐意，但是在力量完全恢复之前，我会待在圣地。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("真的没关系吗？被关了这么久，你难道不想到外面的世界去看看吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("没关系。等力量完全恢复之后，再去享受自由也不迟。到了那时，想动坏主意的家伙，我一下子就能解决！", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("好的。那我们到圣地去吧。为了防止发生什么事，冒险骑士团会护送你过去。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 召唤NPC
		ms.npc_ChangeController(1064021, 100, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064021, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_ChangeController(1064018, 300, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064018, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_ChangeController(1064019, 500, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064019, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_ChangeController(1064020, 700, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064020, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.sendNextSNoESC("准备好了吗？那就出发吧！");
	} else if (status === i++) {
		// 图片 阿丽莎和冒险骑士团出发了
        ms.effect_Direction("Effect/Direction11.img/meet/Scene0");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 收尾		
		ms.warp(913080001, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceStartQuest();
		qm.dispose();
		// NPC离场
		ms.npc_LeaveField(1064018);
		ms.npc_LeaveField(1064019);
		ms.npc_LeaveField(1064020);
		ms.npc_LeaveField(1064021);
	} else {
		qm.dispose();
	}
}

// 913080001 地图事件
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		// 召唤南哈特
		ms.npc_ChangeController(1101002, 150, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1101002, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC("你把世界树带来了吗？", 1101002);
	} else if (status === i++) {
		ms.sendNextSNoESC("现在正在和冒险骑士团一起过来呢。啊，他们来了。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 300, 400, 27);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 召唤阿丽莎，而且多走一段时间，走到南哈特右边
		ms.npc_ChangeController(1064024, 150, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064024, "summon");
		ms.npc_SetForceMove(1064024, 0, 0, 100);
		ms.inGameDirectionEvent_AskAnswerTime(500); // 不加这类方法无法进入到下一阶段
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC("我正在等你，世界树！", 1101002);
	} else if (status === i++) {
		ms.sendNextNoESC("欢迎你。我一直在等待见到你的这一天。", 1101000);
	} else if (status === i++) {
		ms.sendNextNoESC("这里就是圣地啊……真漂亮。温暖又安静，真好。终于可以放心睡觉了", 1064024);
	} else if (status === i++) {
		ms.sendNextNoESC("——#b#k #！真的非常感谢。没有你的话，我就无法从鲁塔比斯逃出来。", 1064024);
	} else if (status === i++) {
		ms.sendNextSNoESC("没什么。你好好睡吧。以后我们再见。");
	} else if (status === i++) {
		ms.sendNextNoESC("（点头点头）", 1064024);
	} else if (status === i++) {
		// 特效，阿丽莎消失
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// NPC离场
		ms.npc_LeaveField(1064024);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.sendNextNoESC("希望你能在女皇和神兽的庇护下，做个幸福的梦……", 1101002);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// 传送回真正的圣地？
		ms.warp(130000000, 0);
		// NPC离场
		ms.npc_LeaveField(1101002);
		// 修改30013任务状态
	} else {
		ms.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		ms.sendNextNoESC("谢谢你。多亏了你，这下我们可以好好保护世界树了。", 1101002);
	} else if (status === i++) {
		ms.sendNextNoESC("为了嘉赏你的功劳，冒险岛联盟决定给你发放#r<世界树的守护者>#k称号。", 1101002);
		// 这些奖励真的是我要写的吗？
	} else if (status === i++) {
		ms.sendNextNoESC("虽然幸运地平安救出了世界树，可是所有的危险并没有消失。之前封印世界树的势力好像晚一步得知了世界树被运往圣地的事。他们#r复活了封印守护者#k，意图获得强大的黑暗力量吞噬金银岛。", 1101002);
	} else if (status === i++) {
		ms.sendNextNoESC("为了阻止他们的阴谋，我们需要你持续不断的支援。希望你今后也为了冒险岛世界的和平而努力。", 1101002);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
