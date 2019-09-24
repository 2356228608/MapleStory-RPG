/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 3890
任务名称： [武陵道场]武陵道场奖励向导
任务开始NPC ID： 2091011
任务开始NPC 名称： 萧公
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
		cm.onScriptMessage(4, 2091011, 0, 0, "你知道排名区间是以等级为标准划分的吧? ", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "入门区间, 是105级到140级玩家之间的竞争区间. ", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "熟练区间, 是141级到180级玩家之间的竞争区间.", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "精通区间, 是181级以上玩家的竞争区间. ", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status == i++) {
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
