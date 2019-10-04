/**
-- BMS 道具脚本空白模板 ---------------------------------------------------------------------------
道具 ID： 2630702
道具名称： 02630702
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
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		im.dispose();
	} else if (status === i++) {
		var id = im.getItemId();
		im.sendOk("#i" + id + "##z" + id + "#\r\n我也不知道这个道具应该能做什么……它的脚本位于： #b 脚本/道具/2630702.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！", 0);
	} else {
		im.dispose();
	}
}
