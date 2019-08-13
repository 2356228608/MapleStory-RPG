/* Dawnveil
Ellinel Fairy Academy
Made by Daenerys
 */
function enter(pi) {
	pi.playPortalSE();
	if (pi.isQuestFinished(32104)) {
		pi.warp(101070010, 2);
	} else {
		pi.warp(101070000, 0);
	}
	return true;
}
