/* 绝版抵用卷商店 脸饰*/

        var status = -1;
var itemList = Array(
        Array(1062126, 70000), //紫条纹短裤
        Array(1002355, 50000), //蓝猫耳帽
        Array(1042347, 70000), //小淘气背心
        Array(1062229, 50000), //小淘气沙滩裤
        Array(1042329, 70000), //糖果色T恤
        Array(1062216, 50000), //不对称短裤
        Array(1042290, 70000), //白色樱桃针织衫
        Array(1062209, 50000), //小兔短裤
        Array(1062179, 70000), //小兔兔短裤
        Array(1062219, 50000), //粉蓝喵咪小裤衩
        Array(1062137, 70000), //牛奶果子露短裤
        Array(1012511, 50000), //清扫面罩
        Array(1012468, 70000), //喵喵糖果
        Array(1702583, 50000), ///薯片桶
        Array(1702529, 70000), //影子煤油灯
        Array(1702455, 50000), //真红油漆桶
        Array(1073014, 70000), //粉红小熊鞋
        Array(1073013, 50000), //嫩黄小熊鞋
        Array(1072943, 70000), //哼唱旋律的舞鞋
        Array(1072951, 50000), //呼拉呼拉串珠手链
        Array(1702535, 70000), //呼拉呼拉小企鹅 
        Array(1004213, 50000), //呼拉呼拉羽毛装饰
        Array(1072531, 70000), //考拉拖鞋
        Array(1072529, 50000), //粉红大象拖鞋
        Array(1051367, 90000), //蓝色雪糕MM装
        Array(1050300, 90000), //蓝色雪糕帅锅装
        Array(1051350, 70000), //派对名媛裙
        Array(1050284, 90000), //派对公子服
        Array(1004268, 70000), //生命之花
        Array(1004038, 60000), //小小企鹅帽
        Array(1012472, 80000), //彩虹脸饰
        Array(1022229, 50000), //VIP墨镜
        Array(1102778, 120000), //棒棒糖披风
        Array(1102712, 60000), //梦寐不忘度假胜地
        Array(1102707, 60000), //梦想海螺
        Array(1102708, 60000), //红润海螺
        Array(1102665, 70000), //雪之女神围脖
        Array(1102274, 50000), //刺柏刀
        Array(1082503, 80000), //圣洁天使手镯
        Array(1004050, 50000), //蝶恋花发箍
        Array(1702456, 70000), //精灵皮克
        Array(1702570, 90000), //绿野仙兔
        Array(1112183, 200000), //羊咩咩名片戒指
        Array(1112296, 200000), //羊咩咩聊天戒指
        Array(1004472, 70000), //饿狼传说帽子
        Array(1001099, 60000), //罗莎莉娅的玫瑰帽
        Array(1051411, 80000), //Lady罗莎莉娅
        Array(1012384, 50000), //淘气丝带
        Array(1702453, 80000)//雷霆之怒
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