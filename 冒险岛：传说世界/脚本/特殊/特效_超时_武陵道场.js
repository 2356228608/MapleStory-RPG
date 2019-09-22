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
	cm.fieldEffect_PlayFieldSound("Dojang/timeOver");
	cm.fieldEffect_ScreenMsg("dojang/timeOver");
	cm.playerMessage(-1, "超过了允许在道场内挑战的时间。不得不离开了。");
	cm.dispose();
}
