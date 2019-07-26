var status = -1;
	
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		switch(cm.getMapId()){
			case 925073900:
			cm.dispose();
			cm.worldMessageYellow("[武陵通关] : 玩家[" + cm.getPlayer().getName() + "]武陵副本已通关,获得大量奖励~");
			//cm.dojoAgent_NextMap(true,true);
			cm.warp(925020003, 0);
			cm.gainItem(1132113, 10);
			cm.gainNX(10000);
				break;
			default:
			cm.sendNext("恭喜突破了重重关卡,休息好了吗,是否继续挑战?");
		}
    }else if (status == 1) {
		cm.dispose();
		cm.dojoAgent_NextMap(true,true);
    } else {
        cm.dispose();
    }
}
