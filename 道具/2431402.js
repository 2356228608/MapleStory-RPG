﻿status = -1;
var itemList = Array(
        1552058,
        1542059,
        1212069,
        1222064,
        1232063,
        1242068,
        1302227,
        1312116,
        1322162,
        1332193,
        1362067,
        1372139,
        1382168,
        1402151,
		1262007,
//：专属紫金枫叶巨剑



        1412104,
//：专属紫金枫叶蝶翼斧



        1422107,
//：专属紫金枫叶锤



        1432138,
//：专属紫金枫叶枪



        1442182,
//：专属紫金枫叶半月矛



        1452170,
//：专属紫金枫叶弓



        1462159,
//：专属紫金枫叶弩



        1472179,
//：专属紫金枫叶黑色拳套



        1482140,
//：专属紫金枫叶血色拳爪



        1492152,
//：专属紫金枫叶短枪


        1522071,
//：专属紫金枫叶双弩枪
        1532074
//：专属紫金枫叶手炮
        );

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (mode == 0 && status == 0) {
            im.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var text = "";
        for (var i = 0; i < itemList.length; i++) {
            text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
        }
        im.askMenu("请选择你要的：\r\n#r" + text);
    } else if (status == 1) {
        var itemid = itemList[selection];
        var itemnum = Math.floor(Math.random() * 1 + 1);
        var item = im.gainGachaponItem(itemid, itemnum, "专属紫金枫叶武器");
        im.gainItem(2431402, -1);
        im.sendOk("恭喜您，获得了" + itemnum + "个#b#z" + itemid + "#");
        im.dispose();
    }
}