/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function enter(pi){

	if(pi.getMapId() == 307000310){
		pi.warp(307000320,0);
		pi.playerMessage(-1,"冲出包围，继续向神殿深处前进。");
		}else if (pi.getMapId() == 307000320){
		pi.warp(307000330,0);
		pi.playerMessage(-1,"冲出包围，继续向神殿深处前进。");
		}else if (pi.getMapId() == 307000330){
		pi.warp(307000340,0);
		pi.forceCompleteQuest(32985);
		pi.updateInfoQuest(32985, "exp=1");
		pi.playerMessage(-1,"冲出包围，继续向神殿深处前进。");
	}


	//TMD怪物会刷新。懒得写实例了，直接冲过去吧。
	/*if (pi.getMap().getAllMonstersThreadsafe().size() > 0) {
		pi.playerMessage(-1,"必须消灭掉所有怪物，继续向神殿深处前进。");
		pi.playerMessage(5,"剩余怪物数量："+pi.getMap().getAllMonstersThreadsafe().size()+"");
		return;
	  }else{
		pi.warp(307000320,0);
		pi.playerMessage(5, "必须消灭掉所有怪物，继续向神殿深处前进。");
	}*/

}
