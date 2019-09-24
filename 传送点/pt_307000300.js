/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function enter(pi){

	if (!pi.isQuestActive(32984)) {
		pi.playerMessage(-1,"接受任务再进去吧!");
		return;
	}
	pi.warp(307000310,0);
	pi.getPlayer().startMapTimeLimitTask(1 * 60 * 10,pi.getMap(307000300));
	pi.forceCompleteQuest(32984);
	pi.updateInfoQuest(32984, "exp=1");
	pi.playerMessage(5, "必须消灭掉所有怪物，继续向神殿深处前进。");

}
