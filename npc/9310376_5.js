﻿/* 绝版点卷商店 衣服*/

        var status = -1;
var itemList = Array(
        Array(1052626, 50000),
        Array(1051414, 50000),
        Array(1051385, 50000),
        Array(1050314, 50000),
        Array(1042330, 50000),
        Array(1052605, 50000),
        Array(1042314, 50000),
        Array(1042320, 50000),
        Array(1041114, 50000),
        Array(1042278, 50000),
        Array(1052709, 50000),
        Array(1052657, 50000),
        Array(1051366, 50000),
        Array(1052727, 45000),
        Array(1050310, 45000),
        Array(1042159, 50000),
        Array(1042285, 50000),
        Array(1042275, 50000),
        Array(1052656, 50000),
        Array(1051366, 40000),
        Array(1052550, 40000),
        Array(1042240, 40000),
        Array(1042315, 40000),
        Array(1050319, 40000),
        Array(1042316, 40000),
        Array(1051390, 40000),
        Array(1051392, 40000),
        Array(1050299, 50000),
        Array(1052782, 50000),
        Array(1052781, 50000),
        Array(1042214, 50000),
        Array(1042311, 40000),
        Array(1042321, 40000),
        Array(1042312, 40000),
        Array(1042313, 40000),
        Array(1050152, 10000), //水兵服(男)
        Array(1051180, 10000), //水兵服(女)
        Array(1042104, 10000), //小绿叶T恤
        Array(1042105, 10000), //小红叶T恤
        Array(1052224, 10000), //草莓baby装
        Array(1042142, 30000), //彩虹条背心
        Array(1041142, 20000), //巨星蛋糕吊带
        Array(1052200, 10000), //罗丽粉色娃娃套服
        Array(1052061, 20000), //巴西足球服No.9
        Array(1052059, 20000), //法国足球服No.14
        Array(1051131, 30000), //圣诞女孩子服
        Array(1051152, 10000), //玫瑰红晚宴裙
        Array(1050210, 10000),
        Array(1051280, 10000),
        Array(1052426, 10000),
        Array(1051278, 10000),
        Array(1050229, 10000),
        Array(1050227, 10000),
        Array(1051235, 10000),
        Array(1052201, 10000),
        Array(1050232, 10000),
        Array(1051282, 10000),
        Array(1052425, 10000),
        Array(1052412, 10000),
        Array(1052455, 10000),
        Array(1052503, 10000),
        Array(1051261, 10000),
        Array(1050230, 10000),
        Array(1050231, 10000),
        Array(1051149, 10000),
        Array(1051192, 10000),
        Array(1051255, 10000),
        Array(1051256, 10000),
        Array(1042238, 15000),
        Array(1040192, 15000),
        Array(1041194, 15000),
        Array(1042265, 15000),
        Array(1042241, 15000),
        Array(1052593, 15000),
        Array(1052536, 15000),
        Array(1050312, 15000),
        Array(1042236, 15000),
        Array(1042240, 15000),
        Array(1052661, 15000),
        Array(1042277, 15000),
        Array(1042204, 15000),
        Array(1042198, 15000),
        Array(1050119, 15000),
        Array(1042263, 15000)
        );
var selectedItem = -1;
var selectedCost = -1;

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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k点卷#l";
        }
        cm.askMenu(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(-selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}