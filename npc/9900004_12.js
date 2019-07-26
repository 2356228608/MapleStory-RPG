/* 绝版抵用卷商店 脸饰*/

        var status = -1;
var itemList = Array(
        Array(1542075, 200000), //巨匠之戒
        Array(1113055, 200000), //巨匠之戒
        Array(1152154, 200000), //巨匠护肩
        Array(1032200, 200000), //巨匠耳环
        Array(1212077, 400000), //巨匠黑甲凶灵
        Array(1222072, 400000), //巨匠天使手铳
        Array(1232071, 400000), //巨匠死亡使者
        Array(1402204, 400000), //巨匠巨剑
        Array(1242076, 400000), //巨匠精神之刃
        Array(1302285, 400000), //巨匠战剑
        Array(1312162, 400000), //巨匠战斗切肉斧
        Array(1322213, 400000), //巨匠大战斗锤
        Array(1332235, 400000), //巨匠小妖精刀
        Array(1342084, 400000), //巨匠小刀
        Array(1362099, 400000), //巨匠手杖
        Array(1372186, 400000), //巨匠邪恶杖
        Array(1382220, 400000), //巨匠战斗长杖
        Array(1412144, 400000), //巨匠战斧
        Array(1422149, 400000), //巨匠战锤
        Array(1432176, 400000), //巨匠战斗之矛
        Array(1442232, 400000), //巨匠地狱之鸟
        Array(1452214, 400000), //巨匠战斗弓
        Array(1462202, 400000), //巨匠弩
        Array(1472223, 400000), //巨匠黑手甲
        Array(1482177, 400000), //巨匠狮鹫拳爪
        Array(1492188, 400000), //巨匠无尽之枪
        Array(1522103, 400000), //巨匠鹰弩枪
        Array(1532106, 400000), //巨匠火炮
        Array(1252058, 400000)//巨匠光能魔法棒
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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k抵用卷#l";
        }
        cm.askMenu(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷？");
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
        if (cm.getPlayer().getCSPoints(2) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "抵用卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(2, -selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多抵用卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        cm.dispose();
    }
}