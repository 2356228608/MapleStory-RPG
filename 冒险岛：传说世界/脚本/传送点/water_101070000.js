/* Dawnveil
Ellinel Fairy Academy
Made by Daenerys
 */
function enter(pi) {
	if (pi.getQuestStatus(32102) == 1) {
		pi.openNpc(0, "妖精学院_入湖");
	} else {
		pi.warp(101071000, 0);
	}
	return true;
}
