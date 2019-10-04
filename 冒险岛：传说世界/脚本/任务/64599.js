/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64599
任务名称： [我的小屋]装饰我的小屋，开始！
任务开始NPC ID： 9400921
任务开始NPC 名称： 埃尔宾
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
	} else if (status == i++) {
		cm.forceStartQuest(64599, "");
		cm.onScriptMessage(3, 0, 0, 0, "#face2#啦啦！我从艾丹那里拿到了桌子！还是免费的！ ", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		if (!cm.haveItem(2672016)) {
			cm.gainItem(2672016, 1);
		}
		cm.onScriptMessage(3, 0, 0, 0, "#face0#嗯……虽然有点小~问题，但不是不能用。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#我们也从米兰达的跳蚤市场买来了钟！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#正好！那就把桌子和时钟都放置一下吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#对了，墙上的家具和地上的家具是能够重叠的。这样就能把家里布置得更好了吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		qm.dispose();
	}
}

function end(mode, type, selection) {
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
		var info = cm.getInfoQuest(64594);
		if (info.contains("2671002") && info.contains("2671002")) {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#你已经放置好了吗？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face0#你忘记了放置的方法吗？ ", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status == i++) {
		var info = cm.getInfoQuest(64594);
		if (info.contains("2671002") && info.contains("2671002")) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#哇！终于像个人住的房屋了！ 啊，这是当然了，原先也是一样的。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face0#首先双击背包里的桌子和时钟，前往[家具保管箱]。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status == i++) {
		var info = cm.getInfoQuest(64594);
		if (info.contains("2671002") && info.contains("2671002")) {
			cm.onScriptMessage(3, 0, 0, 0, "#b不不，现在终于像个家了！这都多亏了埃尔宾和艾米呢！ 谢谢。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face0#然后点击我的小屋菜单的#i3801391#按键，打开[家具保管箱]，双击想要放置的家具。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status == i++) {
		var info = cm.getInfoQuest(64594);
		if (info.contains("2671002") && info.contains("2671002")) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#作为邻居，这都是应该做的！以后需要帮助的时候，尽管开口。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#点击想要放置家具的位置后，再点击[完成放置]按键即可！你要再试一次吗？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			qm.dispose();
		}
	} else if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#难道！你的谢谢就只是嘴上说说？应该还有更好的方式吧~~比如说金币？", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b…", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face3#…", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face2#我开玩笑的，可能有2%是出于真心吧。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#现在去邀请居民们吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#如果可以，#h0#亲自去广场邀请居民们吧，怎么样？\r\n#b#L0#好的！#l\r\n#L1#现在还有点尴尬啊。#l", 0, 6, 37, 0, 1, 9400921); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		if (selection == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#好的，我和艾米会准备一些简单的食物，我们待会见！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1##h0#肯定会做得很好的。我和艾米会准备一些简单的食物，你要拿出勇气来！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.OnStartNavigation(cm.getMapId(), 0, "out00", 0);
		cm.forceStartQuest(64600, "");
		cm.updateInfoQuest(500767, "2=1;3=1;4=1;entrance=0;7=1;managerXpos=100;managerYpos=100");
		cm.forceCompleteQuest(64599);
		qm.dispose();
	}
}
