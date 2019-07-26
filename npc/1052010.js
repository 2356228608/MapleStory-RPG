/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：航海奖励
 *  @Author 娜娜 
 */
var itemList = Array(
        Array(4310100, 800, 50, 3),
        Array(4310100, 800, 60, 3),
        Array(4310100, 800, 70, 3)
        );

        function start() {
            status = -1;
            action(1, 0, 0);
        }

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
        cm.sendOk("Alright, see you next time.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var chance = Math.floor(Math.random() * 800);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "航海奖励", notice);
            if (item != -1) {
				cm.worldSpouseMessage(0x25, "[航海奖励]玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "击败航海妖怪领取凯梅尔兹金币"+quantity+"个");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
        } else {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "航海奖励", notice);
            if (item != -1) {
				cm.worldSpouseMessage(0x25, "[航海奖励]玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "击败航海妖怪领取凯梅尔兹金币"+quantity+"个");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
        }
		cm.gainItem(2433015, 1);
        cm.warp(103000000, 0);
        cm.dispose();
    }
}



