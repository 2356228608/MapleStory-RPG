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
	// TODO^^^^^^^^^^^
	} else if (status === i++) {
		// 收尾		
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 打爆BOSS就好了？不需要脚本干活？
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
