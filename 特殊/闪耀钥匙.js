/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜  闪耀钥匙
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
        var item = cm.TapJoyReward(8);//闪耀钥匙
        if (item != null) {
            selectedItem = item;
            cm.askYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，\r\n我是" + cm.getServerName() + "闪耀钥匙随机奖励发放中心,如果想使用请继续.：");
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
				cm.dispose();
				cm.gainItem(5680521, -1);
				cm.sendOk("恭喜您成功获得#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
				cm.dispose();
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
			cm.dispose();
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        //cm.dispose();
    }
}