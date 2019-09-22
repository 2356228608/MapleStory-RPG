/* 鲁塔比斯
Made by Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNextSNoESC("果然有出口。应该把这一事实告诉少女。");
		cm.dispose();
	} else {
		cm.dispose();
	}
}