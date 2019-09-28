/**
-- BMS NPC脚本空白模板 ----------------------------------------------------------------------------
NPC ID： 1011101
NPC名称： 奥辛玛
所在地图ID： 100000100
所在地图名称： 射手村市场
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
		var id = cm.getNpc();
		cm.sendOk("……啊？你找我吗？我也不知道我应该做什么。我的脚本位于： #b 脚本/npc/1011101.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复我的脚本！");
	} else {
		cm.dispose();
	}
}
