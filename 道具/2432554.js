/*
 刷宠物脚本
 by:娜娜 [BMS技术小组]
 脚本订做:QQ:122804031
 
 添加说明:
 最容易犯错的是
 最后一个不要加分号
 */

        status = -1;
var itemList = Array(
        5000529,
        5000000,
        5000001,
        5000002,
        5000003,
        5000004
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
        //var item = im.gainGachaponItem(itemid, itemnum, "宠物");
        im.gainPet(itemid, "我爱BMS", 15, 1642, 100, 0, -100);
        im.gainItem(2432554, -1);
        im.sendOk("恭喜您，获得了" + itemnum + "个#b#z" + itemid + "#");
        im.dispose();
    }
}