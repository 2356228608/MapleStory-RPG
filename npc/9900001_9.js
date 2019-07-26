/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：洗血
 *  @Author 娜娜 
 */
var status = 0; 
var cost = 3;

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
	    abb = 1;
	    cm.askText("您好,欢迎使用点卷增加HP.每"+cost+"点卷增加1点最大HP值。\r\n目前点卷：#r"+cm.getPlayer().getCSPoints(1)+" #k点\r\n#r注：请输入想增加的#b血量值#r..最大HP不能超过50万,否则出错该不负责");
        } else if (status == 1) { 
	if(cm.getText() < 1){
	    cm.playerMessage(1,"单次输入的数字不能小于1。且不能大于1万。");
	    cm.dispose();
	} else if(cm.getText() > 10000){
	    cm.playerMessage(1,"单次输入的数字不能小于1。且不能大于1万。");
	    cm.dispose();
	} else {
	    cm.askYesNo("您好,欢迎使用点卷增加血量.\r\n增加#r" + cm.getText() + "#k血量将会使用掉您#r" + cm.getText() * cost + "#k点卷\r\n请确认后使用。"); 
	    } 
     } else if (status == 2) { 
			var getmaxhp = cm.getChar().getStat().getMaxHp();
		if(getmaxhp>500000){
			cm.dispose();
		   cm.sendOk("血量已满50万了,无法增加血量。");
		}else{
			var max = getmaxhp + cm.getText()*1;
			if (cm.getPlayer().getCSPoints(1) >= cm.getText()*cost) {
				cm.gainNX(-cm.getText() * cost);
				cm.getChar().getStat().setMaxHp(max,cm.getChar());
				cm.getChar().getStat().setHp(max,cm.getChar());
				cm.worldSpouseMessage(0x20,"[增加HP上限] ：恭喜玩家 "+ cm.getChar().getName() +" 在随身NPC中用 "+ cm.getText() * cost +" 点卷增加了 "+ cm.getText() +" HP上限");
				cm.dispose();
				cm.刷新HP基址(max);
				cm.sendOk("成功增加了"+cm.getText()+"血量。");
			} else {
				cm.dispose();
				cm.sendOk("您没有足够的点卷,请获取后使用.");
			}
		}
      } 
   }
}