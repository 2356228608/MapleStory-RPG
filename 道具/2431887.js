﻿var rewardItemId = new Array(// itemid, random, broadMessage
        // random 为true表示该道具数量随机,false为数量固定为1
        // broadMessage true表示获得后显示世界公告
        new Array(2432005, false, false),
        new Array(4310088, true, false),
        new Array(4310036, true, false),
        new Array(1012420, false, false),
        new Array(1212085, false, false),
        new Array(2001530, true, false),
        new Array(2001531, true, false),
        new Array(2001527, false, false),
        new Array(1022205, false, false),
        new Array(2000005, false, false),
        new Array(2001519, true, false),
        new Array(4310088, true, false),
        new Array(2000005, false, false),
        new Array(2001520, true, false),
        new Array(2041014, false, false),
        new Array(2001521, true, false),
        new Array(2001522, true, false),
        new Array(2000005, false, false),
        new Array(2040514, false, false),
        new Array(4310088, true, false),
        new Array(2000005, false, false),
        new Array(2040517, false, false),
        new Array(2040502, false, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(4310088, true, false),
        new Array(4310036, true, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2001523, true, false),
        new Array(2000005, false, false),
        new Array(2040806, false, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2041039, false, false),
        new Array(2043302, false, false),
        new Array(2001524, true, false),
        new Array(2001525, true, false),
        new Array(2000005, false, false),
        new Array(4310088, true, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2001526, true, false),
        new Array(2001527, true, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2001528, true, false),
        new Array(2045215, false, false),
        new Array(2000005, false, false),
        new Array(2001529, true, false),
        new Array(2000000, true, false),
        new Array(2000001, true, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2000005, false, false),
        new Array(2044902, false, false),
        new Array(2000002, true, false),
        new Array(2000003, true, false),
        new Array(2000005, false, false),
        //new Array(5062000, false, true),
        new Array(2000004, true, false)
        );
var rewardItemQuantity = new Array(1, 2, 3, 4, 5);

function start() {
    var index = Math.floor(Math.random() * rewardItemId.length);
    var itemid = rewardItemId[index][0];
    var quantity = rewardItemId[index][1] ? rewardItemQuantity[Math.floor(Math.random() * rewardItemQuantity.length)] : 1;
    var mofan = Math.floor(Math.random() * 100);
    if (mofan == 6) {
        itemid = 5062000;
        quantity = 1;
    }
    if (im.getSpace(1) < 1 && im.getSpace(2) < 1 && im.getSpace(3) < 1 && im.getSpace(4) < 1 && im.getSpace(5) < 1) {
        im.playerMessage(-1, "背包满了，请清理后再打开。");
        im.dispose();
        return;
    }

    im.gainItem(itemid, quantity);
    if (rewardItemId[index][2]) {
        im.worldSpouseMessage(0x20, "『神秘之冰』 : 恭喜  " + im.getChar().getName() + " 从 <神秘之冰RED> 获得 " + im.getItemName(itemid) + " " + quantity + " 个。");
    }
    im.gainItem(2431887, -1);
    im.dispose();
}