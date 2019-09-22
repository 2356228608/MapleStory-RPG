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
	cm.fieldEffect_PlayFieldSound("Dojang/clear");
	cm.fieldEffect_ScreenMsg("dojang/end/clear");
	cm.getMap().getReactorByName("door").forceHitReactor(cm.getPlayer(), 1);
	cm.playerMessage(-1, "击败了对手, 计时器延长10秒. ");
	cm.dispose();
}
