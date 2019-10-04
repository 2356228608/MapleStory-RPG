/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64610
任务名称： [我的小屋]管家的工作
任务开始NPC ID： 9400930
任务开始NPC 名称： 管家
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else {
		var map = cm.readQuestInfo(500773);
		var manager = parseInt(map.getOrDefault("manager", "0"));
		if (manager == 0) {
			manager0(mode, type, selection, i);
		} else {
			manager1(mode, type, selection, i);
		}
	}
}

function manager0(mode, type, selection, i) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2##h0#！听我说啊！不管怎样，既然是管家，总不能什么都不做吧？所以我思考了一下！ \r\n呵呵，你可不能现在就被感动哦~", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/6", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#首先是家具选购！装修家的时候最重要的就是家具和装饰品，哥哥天天都是这么念叨的。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#只要你告诉我你喜欢的家具风格，我就能亲自去找来。不管是哪里的东西！ \r\n啊，当然了，BOSS家具除外！你应该不会觉得我能抓住BOSS然后找到家具吧！？ 当然了，也不是不可能……你给我一年时间吧，我变强之后会再回来的，嘿嘿", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("1", "Effect/DirectionWz2.img/effect/myHomeTuto/7", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#还有……我正在为了#h0#而练习增益。这是秘密哦，我好像还挺有天分的！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face2#照这种速度成长下去，我可能在不久之后就会成为大魔法师了哦？呵呵，别忘了，每天只能领取一次哦！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#我会一直在这里，如果有什么想知道的或者需要帮助，那就来找我吧！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#对了！我差点忘记了，这是凯尼斯，米兰达，还有艾丹，以及我和埃尔宾哥哥一起准备的礼物！#h0#，欢迎你成为我们的邻居！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64610);
		cm.updateInfoQuest(500763, "end=1;name=" + cm.getName());
		cm.forceStartQuest(500818, "");
		cm.forceStartQuest(500823, "");
		cm.gainItem(2630702, 1);
		cm.updateInfoQuest(500767, "1=1;2=1;3=1;type=1;entrance=0;4=1;5=1;6=1;7=1;managerXpos=100;managerYpos=100");
		qm.dispose();
	}
}

function manager1(mode, type, selection) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1##h0#！我稍微思考了一下，我作为管家能够做到的事情和能够帮助#h0#的方法。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/6", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#首先是家具选购！装修家的时候最重要的就是家具了吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#只要你告诉我你喜欢的家具风格，我就能亲自去买来。不管是哪里的东西！啊，当然了，BOSS家具除外。如果要我去找到那个……应该会很困难，而且要花很长时间。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("1", "Effect/DirectionWz2.img/effect/myHomeTuto/7", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#还有，第二点……为了#h0#，我学会了一些小增益！虽然不是什么很厉害的东西，但也是我的小小心意，请你一定要每天来领取哦。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#虽然我现在的实力还很一般，但是应该会慢慢增长的吧？今后我们还要一起度过很长的时间呢！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face2#我会一直在这里，如果有什么想知道的或者需要帮助，那就来找我吧。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#对了，这是凯兰西亚居民准备的礼物。#h0#，虽然有点晚了，但是谢谢你能成为我们的邻居。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64610);
		cm.updateInfoQuest(500763, "end=1;name=" + cm.getName());
		cm.forceStartQuest(500818, "");
		cm.forceStartQuest(500823, "");
		cm.gainItem(2630702, 1);
		cm.updateInfoQuest(500767, "1=1;2=1;3=1;type=1;entrance=0;4=1;5=1;6=1;7=1;managerXpos=100;managerYpos=100");
		qm.dispose();
	}
}

function end(mode, type, selection, i) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
