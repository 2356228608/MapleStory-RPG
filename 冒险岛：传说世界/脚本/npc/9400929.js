/**
-- BMS NPC脚本空白模板 ----------------------------------------------------------------------------
NPC ID： 9400929
NPC名称： 埃尔宾
所在地图ID： 871000100
所在地图名称：
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
%创建日志%
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.addPopupSay(9400921, 5000, "#face0# 新的家是什么样子的呢？只要一想如何装扮新的家，1分钟很快就过去了呢！", "");
		cm.dispose();
	}
}
