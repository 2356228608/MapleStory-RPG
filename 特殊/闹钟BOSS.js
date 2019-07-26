/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜 
 */

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 2 && mode == 0) {
            cm.sendNext("。。。");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var selStr="请选择你想要去的地方\r\n";
			selStr+="#L1##b普通闹钟#l\r\n\r\n";
			selStr+="#L2##b进阶闹钟#l\r\n\r\n";
			selStr+="#L3##b领取#b#i4031179:# #t4031179##k#l";
            cm.askMenu(selStr);
        } else if (status == 1) {
			switch (selection) {
				case 1:
					/*if (cm.getPlayerCount(220080001) <= 0) { // Papu Map
						var papuMap = cm.getMap(220080001);
						papuMap.resetFully();
						cm.playPortalSE();
						cm.warp(220080001, "st00");
					} else {
						if (cm.getMap(220080001).getSpeedRunStart() == 0 && (cm.getMonsterCount(220080001) <= 0 || cm.getMap(220080001).isDisconnected(cm.getPlayer().getId()))) {
							cm.playPortalSE();
							cm.warp(220080001, "st00");
						} else {
							cm.playerMessage(5, "对抗闹钟BOSS的挑战已经开始了，你不能进入到里面。");
						}
					}*/
					var em = cm.getEventManager("Populatus");
    if (em == null) {
        cm.playerMessage(1, "配置文件不存在,请联系管理员。");
    } else {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            cm.playPortalSE();
            cm.setPQLog("帕普拉图斯");
            em.startInstance(cm.getPlayer());
        } else if (prop.equals("1")) {
            var eim = cm.getEIMbyEvenName("Populatus");
            if (eim != null) {
                cm.setPQLog("帕普拉图斯");
                eim.registerPlayer(cm.getPlayer());
            } else {
                cm.playerMessage(1, "执行错误,请联系管理员。");
            }
        } else {
            cm.playerMessage(5, "对抗帕普拉图斯的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }
					cm.dispose();
					break;
				case 2:
					/*if (cm.getPlayerCount(220080100) <= 0) { // Papu Map
						var papuMap = cm.getMap(220080100);
						papuMap.resetFully();
						cm.playPortalSE();
						cm.warp(220080100, "st00");
					} else {
						if (cm.getMap(220080100).getSpeedRunStart() == 0 && (cm.getMonsterCount(220080100) <= 0 || cm.getMap(220080100).isDisconnected(cm.getPlayer().getId()))) {
							cm.playPortalSE();
							cm.warp(220080100, "st00");
						} else {
							cm.playerMessage(5, "对抗闹钟BOSS的挑战已经开始了，你不能进入到里面。");
						}
					}*/
					var em = cm.getEventManager("Populatusjj");
    if (em == null) {
        cm.playerMessage(1, "配置文件不存在,请联系管理员。");
    } else {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            cm.playPortalSE();
            cm.setPQLog("帕普拉图斯");
            em.startInstance(cm.getPlayer());
        } else if (prop.equals("1")) {
            var eim = cm.getEIMbyEvenName("Populatus");
            if (eim != null) {
                cm.setPQLog("帕普拉图斯");
                eim.registerPlayer(cm.getPlayer());
            } else {
                cm.playerMessage(1, "执行错误,请联系管理员。");
            }
        } else {
			cm.dispose();
            cm.playerMessage(5, "对抗帕普拉图斯的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }
					cm.dispose();
				break;
				case 3:
				cm.dispose();
					cm.openNpc(2041024);
				break;
			}
        }
    }
}