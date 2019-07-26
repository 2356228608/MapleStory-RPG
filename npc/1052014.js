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

		var selStr;
		selStr ="欢迎来到" + cm.getServerName() + ",你想买我们商店的物品么\r\n";
		selStr+="━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n";
		selStr+="#L1##b稀有特殊戒指#l";
		selStr+="#L2##b稀有点装1号店#l";
		selStr+="#L3##b稀有点装2号店#l";
		selStr+="\r\n━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n";
		selStr+="#L4##r稀有点装3号店#l";
		selStr+="#L5##r稀有点装4号店#l";
		selStr+="#L6##r稀有点装5号店#l";
		selStr+="\r\n━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n";
		selStr+="#L7##b稀有点装6号店#l";
		selStr+="#L8##b 稀有披风店#l";
		selStr+="#L9##b 稀有帽子1号店#l";
		selStr+="\r\n━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n";
		selStr+="#L10##r稀有帽子2号店#l";
		selStr+="#L11##r稀有套装1号店#l";
		selStr+="#L12##r稀有套装2号店#l";
		selStr+="\r\n━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n";
		selStr+="#L13##b稀有鞋子店#l";
		selStr+="#L14##b祝福类戒指专卖#l";
		//selStr+="#L15##b稀有#l";
		selStr+="\r\n━━━━━━━━━━━━━━━━━━━━━━━━━━\r\n";
        cm.askMenu(selStr);
		//cm.sendNextSNoESC_Bottom(selStr);
		
    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
				cm.openNpc("稀有特殊戒指");
                break;
			case 2:
                cm.dispose();
				cm.openNpc("稀有点装1号店");
                break;
			case 3:
                cm.dispose();
                cm.openNpc("稀有点装2号店");
                break;
			case 4:
                cm.dispose();
                cm.openNpc("稀有点装3号店");
                break;
			case 5:
                cm.dispose();
                cm.openNpc("稀有点装4号店");
                break;
			case 6:
                cm.dispose();
                cm.openNpc("稀有点装5号店");
                break;
			case 7:
                cm.dispose();
                cm.openNpc("稀有点装6号店");
                break;
			case 8:
                cm.dispose();
                cm.openNpc("稀有披风店");
                break;
			case 9:
                cm.dispose();
                cm.openNpc("稀有帽子1号店");
                break;
			case 10:
                cm.dispose();
                cm.openNpc("稀有帽子2号店");
                break;
			case 11:
                cm.dispose();
                cm.openNpc("稀有套装1号店");
				break;
			case 12:
                cm.dispose();
                cm.openNpc("稀有套装2号店");
                break;
			case 13:
                cm.dispose();
                cm.openNpc("稀有鞋子店");
                break;
			case 14:
                cm.dispose();
                cm.openNpc("祝福类戒指专卖");
                break;
			
        }
    }
}
