
        var status;
var text = "";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }

        if (status == 0) {
            //if(cm.getMapId() == 910000000) {
            text += head + icon2 + "#b欢迎你来到#b" + cm.getServerName() + "娱乐系统\r\n请选择你的功能,的呢？\r\n";
            text += "#L0#" + icon + "股票系统\r\n";
            text += "#L1#" + icon + "彩票系统\r\n";
			text += "#L2#" + icon + "我的花园\r\n";
			text += "#L3#" + icon + "跳跳地图\r\n";
            cm.askMenu(text);
            //}
        } else {
			switch(selection){
				case 0:
					cm.dispose();
					cm.openNpc(9900004, 100);//股票系统
				break;
				case 1:
					cm.dispose();
					cm.openNpc(9900004, 102);//彩票系统
				break;
				case 2:
					cm.dispose();
					cm.openNpc(9330065);//花园
				break;
				case 3:
					cm.dispose();
					cm.openNpc(9330065,"跳跳地图");//跳跳地图
				break;
				default:
					cm.dispose();
			}
        }
    }
}



