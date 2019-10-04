/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64605
任务名称： [我的小屋]另一个我的小屋？
任务开始NPC ID： 9400920
任务开始NPC 名称： 艾米
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
		cm.onScriptMessage(3, 0, 0, 0, "#face1#凯尼斯的家一直对居民们敞开，你要是好奇，就去找他吧？ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b你能和我一起去吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#当然了！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#当然了~只要你给我小费，呵呵", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#我开玩笑的，#h0#，快走吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceStartQuest(64605, "");
		cm.OnStartNavigation(cm.getMapId(), 0, "out00", 0);
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
