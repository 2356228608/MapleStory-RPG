/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64594
任务名称： [我的小屋]放置沙发！
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
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/3", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。你要不要试试？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face2#如果#h0#能喜欢就好了！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		cm.updateInfoQuest(64594, "start");
		qm.dispose();
		qm.forceStartQuest();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else {
		var info = cm.getInfoQuest(64594);
		if (info.equals("ok")) {
			end2(mode, type, selection, i)
		} else if (info.equals("start")) {
			end1(mode, type, selection, i)
		} else {
			end0(mode, type, selection, i)
		}
	}
}

function end0(mode, type, selection, i) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1# [#i2672015:##t2672015#]\r\n啦啦~！这是为了纪念我们成为邻居而送你的礼物。这是可以代替破旧的椅子，让你舒舒服服地坐着的蓬松~沙发。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.gainItem(2672015, 1);
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/3", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。你要不要试试？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face2#如果#h0#能喜欢就好了！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		cm.updateInfoQuest(64594, "start");
		qm.dispose();
	}
}

function end1(mode, type, selection, i) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#怎么，还是没有头绪吗？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/3", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。你要不要试试？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face2#如果#h0#能喜欢就好了！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		cm.updateInfoQuest(64594, "start");
		qm.dispose();
	}
}

function end2(mode, type, selection, i) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#呵呵，果然……我就说我的眼光不会错的嘛？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#放上和简单的灰调原木床相配的布艺沙发，就能装修出将简洁之美发挥到极致的风格！怎么样？家里是不是变得更加优雅了？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b比刚才看起来更像是家了呢，谢谢你，埃尔宾！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#那么……你以后就住在这里了吗？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b也许……吧？?", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#好极了！旁边一直没有邻居，我还觉得有点寂寞呢。能有像#h0#这样帅气的人搬来住真是太好了。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64594);
		cm.onScriptMessage(3, 0, 0, 0, "#face2#如果你有时间，要不要和我一起去广场？我可以给你介绍一下其他邻居！\r\n#L0##b好的。#l\r\n#L1#今天很忙。#l", 0, 6, 37, 0, 1, 9400921); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#好极了，那你就跟我来吧！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#没关系，等你什么时候有空了再来吧！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			cm.dispose();
		}
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.OnStartNavigation(871200197, 0, "out00", 0);
		cm.forceStartQuest(64595, "");
	}
}
