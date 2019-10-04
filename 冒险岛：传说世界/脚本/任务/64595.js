/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64595
任务名称： [我的小屋]到广场逛逛
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
		cm.onScriptMessage(3, 0, 0, 0, "#face2#如果你有时间，要不要和我一起去广场？我可以给你介绍一下其他邻居！\r\n#L0##b好的。#l\r\n#L1#今天很忙。#l", 0, 6, 37, 0, 1, 9400921); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
			cm.OnStartNavigation(cm.getMapId(), 0, "out00", 0);
			cm.forceStartQuest(64595, "");
			cm.onScriptMessage(3, 0, 0, 0, "#face2#好极了，那你就跟我来吧！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#没关系，等你什么时候有空了再来吧！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
		cm.dispose();
	} else {
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
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
