/**
-- BMS NPC脚本空白模板 ----------------------------------------------------------------------------
NPC ID： %NPCID%
NPC名称： %NPC名称%
所在地图ID： %所在地图ID%
所在地图名称： %所在地图名称%
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
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
		cm.onScriptMessage(3, 0, 0, 0, "此次的事情完全是我的错，如果我没有失去理智，也许就能够保护好超越石免受戴米安的侵害。", 256, 0, 37, 0, 1, 1540880); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "现在的戴米安很强大，带我去吧。\r\n#b#L0#一起战斗。#l\r\n#L1#我再考虑考虑。#l", 0, 6, 37, 0, 1, 1540880); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.updateInfoQuest(34021, "hero1=5");
			cm.getTopMsgFont("已经选择了第一位英雄，请挑选第二位与其同行的英雄。", 3, 20, 4, 0);
			cm.dispose();
		} else {
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
