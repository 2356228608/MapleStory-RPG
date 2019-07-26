var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
        cm.dispose();
    } else if (status == 0) {
		var selStr="";
		
		if(cm.getPlayer().isGM() || cm.getGMNPC()){
			selStr+="以下活动(GM可见)\r\n";
			selStr+="#L1#1.开放OX答题活动#l\r\n";
			selStr+="#L2#2.开放在线发放奖励活动(根据参加活动地图人数分配点卷)#l\r\n";
			//selStr+="#L3#3.开放在线发放奖励活动(直接分配点卷)#l\r\n";
		}else{
			selStr+="活动时间未到哦!你是来找我聊天的吗?";
		}
		cm.askMenu_Bottom(selStr);
	} else if (status == 1) {
        switch (selection) {
			case 1:
                cm.dispose();
				cm.openNpc(9000277);
                break;
			case 2:
                cm.dispose();
				cm.openNpc(9300011,"点卷活动1");
                break;
			case 3:
                cm.dispose();
				cm.openNpc(9000277,10);
                break;
			default:
				cm.dispose();
			break;
		}
	}
}