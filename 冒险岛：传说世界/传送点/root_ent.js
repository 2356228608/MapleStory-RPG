/* 鲁塔比斯入口
Made by Jessefjxm
 */
function enter(pi) {
	pi.saveLocation("ROOT");
	if (pi.isQuestFinished(30008)) {
		// 已通过剧情任务前半部分
		pi.warp(105200000, 0);
	} else if (!pi.isQuestActive(30000) && !pi.isQuestFinished(30000)) {
		// 还没开始剧情
		pi.systemMessage("这里看上去没通往任何地方。还是回去吧");
	} else {
		// 还没完成剧情任务
		pi.warp(105010200, 0);
	}
}
