/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
// 开头
function start() {
	action(1, 0, 0);
}

// 主体

function action(mode, type, selection) {
	im.gainItem(im.getItemId(), -1);
	im.gainItemPeriod(5044012, 1, 1);
	im.dispose();
}
