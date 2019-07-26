/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：购买VIP会员
 *  @Author 娜娜 
 */

var status = 0;
var typede = 0;
var 继续选择 = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var bmstxt = "";
            bmstxt = "我这里是VIP管理员哦,\r\n\r\n当前VIP等级: #r" + cm.getVip() + "\r\n";
			
            bmstxt += "#L1##b免费领取VIP会员(VIP 3)#l\r\n";
			//bmstxt += "#L2##b购买VIP会员(VIP 1)#l\r\n";
			//bmstxt += "#L3##b购买VIP会员(VIP 2)#l\r\n";
			//bmstxt += "#L4##b购买VIP会员(VIP 3)#l\r\n";
			bmstxt += "#L5##b购买VIP会员(VIP 4)#l\r\n";
			bmstxt += "#L6##b购买VIP会员(VIP 5)#l\r\n";
			bmstxt += "#L7##b购买VIP会员(VIP 6)#l\r\n";
			bmstxt += "#L8##b购买VIP会员(VIP 7)#l\r\n";
			bmstxt += "#L9##b购买VIP会员(VIP 8)#l\r\n\r\n";
			
			bmstxt += "#L10##b领取VIP每日福利#l\r\n";
			bmstxt += "#L11##b进入VIP泡点专属地图(拥有VIP神秘盒子泡点翻倍获得)#l\r\n";
			bmstxt += "#L12##b购买VIP神秘盒子可全图泡点(100000点卷)#l\r\n";
			//bmstxt += "#L13##bVIP练级地图#l\r\n";
            cm.askMenu(bmstxt);
        } else if (selection == 1) {
			var VIP = 3;
            if (cm.getVip() < 3) {
				cm.setVip(VIP);
				cm.worldSpouseMessage(0x15,"玩家 " + cm.getChar().getName() + " 目前已是VIP" + VIP + "。");
				cm.dispose();
                cm.sendOk("成功领取VIP" + VIP + "。");
            } else {
				cm.dispose();
                cm.sendOk("你目前已是VIP" + VIP + "了。");
            }
        }else if (selection >1&&selection<10) {
			继续选择 = selection - 1;
			var VIP = 继续选择;
			var 点卷 = 10000*VIP;
            cm.askYesNo("您是否购买VIP#k"+继续选择+" 需要花费"+点卷+"点卷？");
        }else if (selection ==10) {
				cm.dispose();
				cm.openNpc(9010002, 1);
        }else if (selection ==11) {
				cm.dispose();
				cm.warp(209000000, 0);
        }else if (selection ==12) {
			cm.dispose();
			cm.openNpc(9010002, "全场泡点");
        }else if (status == 2) {
			var VIP = 继续选择;
			var 点卷 = 10000*VIP;
			if(cm.getPlayer().getCSPoints(1) < 点卷){
				cm.dispose();
				cm.sendOk("抱歉，你没足够的点卷！");
            } else {
				if (cm.getVip() < 9) {
					cm.setVip(VIP);
					cm.worldSpouseMessage(0x15,"玩家 " + cm.getChar().getName() + " 目前已是VIP" + VIP + "。");
					cm.dispose();
					cm.sendOk("成功购买VIP" + VIP + "。");
				} else {
					cm.dispose();
					cm.sendOk("你目前已是VIP" + VIP + "了。");
				}
			}
		}else {
            cm.dispose();
        }
    }
}