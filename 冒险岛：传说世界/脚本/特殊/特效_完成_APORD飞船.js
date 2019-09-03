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
	cm.fieldEffect_Unew150("Map/EffectPL.img/3min/clearS/skeleton_clear", "animation_text01_01", "", 0, 1, 0, 0, 0);
	cm.fieldEffect_PlayFieldSound("Party1/Clear");
	cm.playerMessage(5, "已获得APORD的克隆研究日志！整理了日志。");
	cm.fieldEffect_ScreenMsg("Map/EffectPL.img/3min/eff_cubeBreak");
	cm.gainItem(2435495, 1);
	cm.killAllMob();
	cm.dispose();
}
