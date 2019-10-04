/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64592
任务名称： [我的小屋]到洒满阳光的地方去
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
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/2", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#点击我的小屋菜单的#i3801392##t3801392#就能进入可以搬动家具的放置模式。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#在放置模式状态中，点击床后再点击你想要放置的位置即可！", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face2#你要不要试试？将床放到你想要放的地方后再和我对话吧。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64591);
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
		if ("ok".equals(cm.getInfoQuest(64592))) {
			cm.onScriptMessage(3, 0, 0, 0, "#face0#果然！只是挪动了下位置，房间看起来就宽敞多了！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#你还没能搬运家具啊。没关系，一开始肯定不容易。我再跟你说明一遍吧。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status === i++) {
		if ("ok".equals(cm.getInfoQuest(64592))) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#要不要试着躺在床上？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/2", 0, 900, 0, -80, 12, 4, 0);
			cm.onScriptMessage(3, 0, 0, 0, "#face1#首先点击我的小屋菜单的#i3801392##t3801392#，即可进入能够搬动家具的放置模式。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status === i++) {
		if ("ok".equals(cm.getInfoQuest(64592))) {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#靠近床后点击就能躺下了。\r\n你就当我不在，舒舒服服地躺一下吧！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#然后点击床，再点击一次你想要放的地方就可以了。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status === i++) {
		if ("ok".equals(cm.getInfoQuest(64592))) {
			cm.forceCompleteQuest(64592);
			cm.forceStartQuest(64593, "");
		} else {
			cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
			cm.onScriptMessage(3, 0, 0, 0, "#face2#你要不要再试一次？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
		qm.dispose();
	}
}
