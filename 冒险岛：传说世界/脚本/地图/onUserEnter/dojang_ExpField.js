/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 925080000
地图名称： 
-- 作者 -------------------------------------------------------------------------------------------
模板：Jessefjxm
---------------------------------------------------------------------------------------------------
 **/
 
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.playerMessage(5, "你进入了武陵道场身心修炼馆。尽情的放松吧。");
		ms.dispose();
	} else {
		ms.dispose();
	}
}
