/* Dawnveil
Ellinel Fairy Academy
Made by Daenerys
 */
function enter(pi) {
	var curmap = pi.getMapId();
	if (pi.getMonsterCount(curmap) == 0) {
		pi.warp(141050200, 2);
	} else {
		pi.playerMessage(5, "还有敌人在场地里，无法安全地离开。");
	}
	return true;
}
