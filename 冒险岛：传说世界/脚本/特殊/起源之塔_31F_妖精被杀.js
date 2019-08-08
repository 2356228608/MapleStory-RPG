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
	cm.addPopupSay(2540000, 4000, "糟糕，你误伤了一只蝴蝶精！这下它们愤怒的同伴一定会来找你麻烦的，小心了。");
	cm.dispose();
}
