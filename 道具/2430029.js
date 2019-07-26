status = -1;
var itemList = Array(
// ------ 卷轴 ------
Array(2340000, 600, 3, 3), //祝福卷轴
Array(2049752, 100, 1, 3), //S级潜能卷轴 30%
Array(2049750, 50, 1, 3), //S级80%
Array(2049704, 200, 1, 3), //A级潜能附加卷轴 40%
Array(2049300, 500, 2, 3), 
Array(2049135, 50, 1, 3),
Array(2049136, 50, 1, 3),
Array(2049137, 50, 1, 3),
Array(2049124, 500, 3, 3),

Array(2046913, 150, 1, 3), // 宿命正义单手武器攻击力卷轴 100% // 为单手武器增加攻击力属性。
Array(2046914, 150, 1, 3), // 宿命正义单手武器魔力卷轴 100% // 为单手武器增加魔法攻击力属性。
Array(2046173, 150, 1, 3), // 宿命正义双手武器攻击力卷轴 100% // 为双手武器增加攻击力属性。
Array(2046577, 150, 1, 3), // 宿命正义防具力量卷轴 100% // 为防具增加力量属性。
Array(2046578, 150, 1, 3), // 宿命正义防具智力卷轴 100% // 为防具增加智力属性。
Array(2046579, 150, 1, 3), // 宿命正义防具敏捷卷轴 100% // 为防具增加敏捷属性。
Array(2046580, 150, 1, 3), // 宿命正义防具运气卷轴 100% // 为防具增加运气属性。
Array(2046763, 150, 1, 3), // 宿命正义饰品力量卷轴 100% // 为饰品增加力量属性。
Array(2046764, 150, 1, 3), // 宿命正义饰品智力卷轴 100% // 为饰品增加智力属性。
Array(2046765, 150, 1, 3), // 宿命正义饰品敏捷卷轴 100% // 为饰品增加敏捷属性。
Array(2046766, 150, 1, 3), // 宿命正义饰品运气卷轴 100% // 为饰品增加运气属性。
// ------ 特殊 ------
Array(5064300, 600, 2, 3), //卷轴防护卷轴
Array(5062500, 600, 2, 3), //大师附加神奇魔方
Array(5062000, 600, 2, 3), //神奇魔方
Array(5064000, 600, 1, 3), //防爆卷轴
Array(5064100, 600, 1, 3), //保护卷轴
Array(5062002, 600, 2, 3),  //高级神奇魔方
Array(5062010, 600, 2, 3),  //高级神奇魔方
Array(5062009, 600, 2, 3),  //高级神奇魔方
// ------ 150级武器 ------
Array(1402196, 30, 1, 3),
Array(1432167, 30, 1, 3),
Array(1452205, 30, 1, 3),
Array(1462193, 30, 1, 3),
Array(1472214, 30, 1, 3),
Array(1332225, 30, 1, 3),
Array(1342082, 30, 1, 3),
Array(1362090, 30, 1, 3),
Array(1382208, 30, 1, 3),
Array(1372177, 30, 1, 3),
Array(1212063, 30, 1, 3),
Array(1242060, 30, 1, 3),
Array(1232057, 30, 1, 3),
Array(1522094, 30, 1, 3),
// 椅子 
Array(3010225, 50, 1, 3),
Array(3010226, 50, 1, 3),
Array(3010824, 50, 1, 3),
Array(3010825, 50, 1, 3),
Array(3010826, 50, 1, 3),
Array(3010827, 50, 1, 3),
Array(3010829, 50, 1, 3),
Array(3010828, 50, 1, 3),
Array(3010830, 50, 1, 3),
Array(3010831, 50, 1, 3)
);
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * 600);
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
			
			
/*			if (im.getChar().getName() == "Super月下") {
				im.setBossLog("Super月下");
				if (im.getBossLog("Super月下") == 6) {
					itemId = 1332225;
					quantity = 1;
					notice = 3;
				}
			}*/
            item = im.gainGachaponItem(itemId, quantity, "VIP神秘盒子", notice);
            if (item != -1) {
				im.gainItem(2430029, -1);
				im.gainItem(4310030, 100);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个，额外得到100个运动会币的奖励，可以在游戏商店中兑换#b运动会装备#k和#b必成卷轴#k。");
            } else {
				
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的运气可真差，什么都没有拿到。");
            im.safeDispose();
        }
    }
}