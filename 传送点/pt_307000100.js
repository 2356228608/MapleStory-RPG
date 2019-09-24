/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function enter(pi){

	if (pi.isQuestActive(32973)) {//迎月花
		pi.openNpc(0,"pt_307000100");
	}else if (pi.isQuestActive(32977)){
		pi.warp(307000110);
	}else{
		pi.playerMessage(-1,"接受任务再进去吧!");
	}

}
