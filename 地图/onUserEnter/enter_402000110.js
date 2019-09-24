/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 402000110
地图名称： 铁豪猪栖息地I
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
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
		ms.playerMessage(5, "这个地图进入触发事件的脚本尚未修复。脚本位于： 脚本/地图/onUserEnter/enter_402000110.js");
		ms.dispose();
	} else {
		ms.dispose();
	}
}
