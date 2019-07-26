﻿function start() {
    if (im.haveItem(1122224) && im.haveItem(1122228)) {
        im.askMenu("你身上有#i1122224##t1122224#和#i1122228##t1122228#，你想进化哪一个？#b\r\n#L0##i1122224##t1122224##l\r\n#L1##i1122228##t1122228##l");
    } else {
        if (im.haveItem(1122224)) {
            action(1, 0, 0);
        } else if (im.haveItem(1122228)) {
            action(1, 0, 1);
        } else {
            im.sendOk("请确认你背包里有#t1122224#或者#t1122228#。");
            im.dispose();
        }
    }
}

function action(mode, type, selection) {
    var i = -1;
    var chance = -1;
    var gain = -1;
    if (selection == 0) {
        i = 1122224;
        chance = 350;
        gain = 1122228;
    } else if (selection == 1) {
        i = 1122228;
        chance = 250;
        gain = 1122233;
    }
    if (i == -1) {
        im.sendOk("出现未知错误。")
        im.dispose();
        return;
    }
    var random = new java.util.Random();
    if (random.nextInt(1000) <= chance) {
        if (im.canHold(i)) {
            //im.used(1);
            im.gainItem(i, -1);
            im.gainLockItem(gain, 1, false, 0, "冒险岛勇士之心(弓箭手)");
        } else {
            im.sendOk("请确认你背包有足够的空间。");
        }
    } else {
        //im.used(1);
        im.sendOk("进化失败。");
    }
    im.dispose();
}