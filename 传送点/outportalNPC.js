/* 鲁塔比斯
Made by Jessefjxm
 */
function enter(pi) {
	if (pi.isQuestActive(30002)) {
		pi.updateInfoQuest(30002,"outportal=2");
		pi.openNpc(0,"outportalNPC_对话");
	} else if (pi.isQuestActive(30003)) {
		pi.warp(105010200, 0);
	} else {
		pi.warp(105010000, 0);
	}
    return true;
}
