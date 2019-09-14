/*  This is mada by 雷霆宝宝    
 *  This source is made by BMS Team
 *  脚本功能：SS级埃苏莱布斯装备全套礼盒包
 *  @Author 雷霆宝宝 
 */
 var status = -1;
 var weaponList = Array(
 	Array(2437537, "SS级埃苏莱布斯套服箱"),
	Array(2437536, "SS级埃苏莱布斯帽子箱"),
	Array(2437539, "SS级埃苏莱布斯手套箱"),
	Array(2437540, "SS级埃苏莱布斯披风箱"),
	Array(2437538, "SS级埃苏莱布斯鞋箱"),
	Array(2437535, "SS级埃苏莱布斯武器箱"),
	Array(2437541, "SS级埃苏莱布斯肩饰箱")
 );

    function start() {
		
		if (im.getInventory(2).isFull(weaponList.length)) {
			im.playerMessage(1, "【SS级埃苏莱布斯装备全套礼盒包】\r\n(SS级埃苏莱布斯装备全套礼盒包)\r\n\r\n消耗栏空间不足，需要 " + weaponList.length + " 格空间。");
			im.dispose();
			return;
		} 
		
		for(var i =0 ;i<weaponList.length;i++){
			cm.gainItem(weaponList[i][0], 1);
		}

		cm.gainItem(2437534, -1);
		im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从SS级埃苏莱布斯装备全套礼盒包中获得了七個SS级埃苏莱布斯装备箱");
		im.sendOk("恭喜您，获得了7个SS级埃苏莱布斯装备箱");
		im.dispose();
    }
	

