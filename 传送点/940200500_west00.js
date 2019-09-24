/*  This source is made by BMS Team
 *  脚本功能：[新手任务]魔链影士系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function enter(pi){

	if (!pi.isQuestActive(34600)) {
		pi.playerMessage(-1,"接受任务再进去吧!");
		return;
	}

	pi.warp(940200501,0);

}
