/* 
 * 内拉 NPC (9020002)
 */

var status;
var random = java.lang.Math.floor(Math.random() * 9 + 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        var mapId = cm.getMapId();
        if (mapId == 910340000) {
            cm.warp(910340700, 0);
            //cm.removeAll(4001007);
           // cm.removeAll(4001008);
            cm.dispose();
        } else {
            var outText;
            if (mapId == 910340600) {
		cm.setEventCount("废弃都市");
		if(random == 1){
		cm.finishActivity(120104);
		cm.gainItem(2430781,1);
		cm.worldSpouseMessage(0x20,"[组队-废弃都市] 玩家 "+ cm.getChar().getName() +" 通关 "+ cm.getEventCount("废弃都市") +" 次 系统随机给予大量通关奖励。");
	   	cm.dispose();
		}else if(random == 2){
		cm.gainItem(2430781,1);
		cm.gainItem(4310088,5);
		cm.finishActivity(120104);
		cm.worldSpouseMessage(0x20,"[组队-废弃都市] 玩家 "+ cm.getChar().getName() +" 通关 "+ cm.getEventCount("废弃都市") +" 次 系统随机给予大量通关奖励，额外获得大量RED币。");
	   	cm.dispose();
		}else if(random == 3){
		cm.gainItem(2430781,1);
		cm.gainItem(4033356,1);
		cm.finishActivity(120104);
		cm.worldSpouseMessage(0x20,"[组队-废弃都市] 玩家 "+ cm.getChar().getName() +" 通关 "+ cm.getEventCount("废弃都市") +" 次 系统随机给予大量通关奖励,额外获得正义火种1。");
	   	cm.dispose();
		}else{
                    if (cm.getEventCount("废弃都市") >30){
		        cm.gainItem(2430781,1);
			cm.finishActivity(120104);
		        cm.worldSpouseMessage(0x20,"[组队-废弃都市] 玩家 "+ cm.getChar().getName() +" 通关 "+ cm.getEventCount("废弃都市") +" 次 系统随机给予大量通关奖励。");
	  	        cm.dispose();
                    }else{
                        cm.gainItem(2430781,1);
			cm.finishActivity(120104);
		        cm.gainItem(4310088,Math.random() * 15 + 1);
		        cm.worldSpouseMessage(0x20,"[组队-废弃都市] 玩家 "+ cm.getChar().getName() +" 通关 "+ cm.getEventCount("废弃都市") +" 次 系统随机给予大量通关奖励，次数小于30获得大量RED币。");
                    }
		}
                outText = "通关成功!";
				cm.gainPlayerPoints(7);
				cm.gainGP(70);
				cm.getEventCount("废弃都市", 1);
				cm.getPlayer().dropMessage(6, "[组队-废弃都市] 获得7点废弃组队任务积分");
				cm.getPlayer().dropMessage(6, "[组队-废弃都市] 获得50点家族声望");
		cm.warp(910340000,0);
            } else {
                outText = "你确定要离开地图吗?";
            }
            if (status == 0) {
                cm.askYesNo(outText);
            } else if (mode == 1) {
                cm.warp(910340000, "st00"); // Warp player
                cm.dispose();
            }
        }
    }
}