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
	var mapId = parseInt((cm.getMapId() - 925076000) / 100);
	if (mapId == 10) {
		cm.finishAchievement(1303);
	} else if (mapId == 20) {
		cm.finishAchievement(1304);
	} else if (mapId == 30) {
		cm.finishAchievement(1305);
	} else if (mapId == 40) {
		cm.finishAchievement(1306);
	} else if (mapId == 45) {
		cm.finishAchievement(1307);
	} else if (mapId == 50) {
		cm.finishAchievement(1308);
	} else if (mapId > 50 && mapId <= 56) {
		cm.gainAchievement(1309, mapId - 51, "mob_kill=1");
	} else if (mapId > 56 && mapId < 63) {
		cm.gainAchievement(1310, mapId - 57, "mob_kill=1");
	} else if (mapId == 63) {
		cm.finishAchievement(1311);
	}
	cm.dispose();
}
