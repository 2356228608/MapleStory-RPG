/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜  敲敲乐第1-3阶段
 */

var status = -1;
var selectedItem = -1;
var selectedCost = -1;
var NX1 = 700;
var NX2 = 1200;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var item = cm.TapJoyReward(0);//敲敲乐1段
        if (item != null) {
            selectedItem = item;
            cm.askYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，\r\n我是" + cm.getServerName() + "敲敲乐1段奖励发放中心,如果想使用请继续.：");
        } else {
            cm.sendOk("出现错误1");
            cm.dispose();
        }
    } else if (status == 1) {
        if ( selectedItem <= 0) {
            cm.sendOk("出现错误2");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= 0) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "敲敲乐第1阶段", 3, true);
            if (gachaponItem != -1) {
                //cm.gainNX(-selectedCost);
                //cm.sendOk("恭喜您成功获得#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
				cm.gainItem(2436877, -1);
				cm.gainItem(5224000, -1);
				cm.askYesNo("恭喜您成功获得#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        //cm.dispose();
    }else if (status == 2) {
		var item = cm.TapJoyReward(1);//敲敲乐2段
        if (item != null) {
            selectedItem = item;
            cm.askYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，\r\n我是" + cm.getServerName() + "敲敲乐2段奖励发放中心,是否花费"+ NX1 +"点卷来打开2段奖励吗?：");
        } else {
            cm.sendOk("出现错误3");
            cm.dispose();
        }
	}else if (status == 3) {
        if ( selectedItem <= 0) {
            cm.sendOk("出现错误4");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= NX1) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "敲敲乐第2阶段", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(-NX1);
				cm.askYesNo("恭喜您成功获得#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        //cm.dispose();
    }else if (status == 4) {
		var item = cm.TapJoyReward(2);//敲敲乐3段
        if (item != null) {
            selectedItem = item;
            cm.askYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，\r\n我是" + cm.getServerName() + "敲敲乐3段奖励发放中心,是否花费"+ NX2 +"点卷来打开3段奖励吗?：");
        } else {
            cm.sendOk("出现错误5");
            cm.dispose();
        }
	}else if (status == 5) {
        if ( selectedItem <= 0) {
            cm.sendOk("出现错误6");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= NX2) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "敲敲乐第3阶段", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(-NX2);
				cm.sendOk("恭喜您成功获得#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}