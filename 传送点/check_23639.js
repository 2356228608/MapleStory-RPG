/*  This source is made by BMS Team
 *  脚本功能：[新手任务]尖兵计划系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function enter(pi) {

	if(pi.isQuestActive(23639)){//被察觉了
	pi.warp(931060010,1);
	pi.openNpc(0,"尖兵_水泥路密道");
	}else{
	pi.playerMessage(-1,"不知道通向哪里的门,不要乱进.");
	}

}
