/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：点卷商店
 *  @Author 娜娜 
 */


var status = -1;
var itemList = Array(
		Array(5680521, 100, 20000), //闪耀随机武器箱
		Array(5220040, 100, 20000), //冒险岛转蛋券
		Array(5840003, 100, 20000),//转蛋万花筒钥匙
		Array(4009440, 100, 2),//万花筒宝物盒
		Array(2436877, 10, 2000), //敲敲乐
        Array(2436324, 100, 2000), //V核心
		Array(4001832, 5000, 100), //痕迹
		Array(4001839, 5000, 100), //星星
		Array(4009453, 5000, 100), //精髓,
		Array(4009439, 5000, 100), //精髓,
		Array(2702000, 5000, 100), //还原器
		Array(2702002, 5000, 100), //S还原器
		Array(5062801, 5000, 100), //A还原器
		Array(5062000, 10, 8000), //神奇魔方,
		Array(5062001, 10, 8000), //混沌神奇魔方
		Array(5062002, 10, 8000), //高级神奇魔方
		Array(5062005, 10, 8000), //惊人神奇魔方
		Array(5062006, 10, 8000), //白金神奇魔方
		Array(5062009, 10, 8000), //超级红色魔方
		Array(5062010, 10, 8000), //终极魔方,黑色魔方
		Array(5062022, 10, 8000), //闪耀镜射魔方
		Array(5062024, 10, 8000), //闪炫魔方
		Array(5062090, 10, 8000), //记忆魔方
		Array(5062100, 10, 8000), //枫叶魔方
		Array(5062103, 10, 8000), //梦幻神奇魔方
		Array(5062500, 10, 8000), //大师附加神奇魔方
		Array(5062503, 10, 8000), //附加潜能记忆魔方
		//Array(5067000, 10, 8000), //潜能锁_胶囊
		
		Array(2590007, 1, 1000),//强化型灵魂附魔石
		Array(2590007, 10, 10000),//强化型灵魂附魔石
		Array(2049509, 1, 1000), //金色刻印的印章
		Array(2049509, 10, 10000),
		Array(2048301, 1, 1000), //金光潜能附加印章
		Array(2048301, 10, 10000),
		Array(4009440, 10, 1000),
		Array(5537000, 100, 78000), 
		Array(5743003, 100, 8000), //怪怪方块
        Array(5064003, 1, 2000),//极真保护之盾
        Array(5064003, 10, 18000),//极真保护之盾
        Array(5064100, 1, 700),//保护卷轴
        Array(5064100, 10, 6500),//保护卷轴
        Array(5050000, 10, 1000),//洗能力点卷轴
        Array(5050000, 50, 4500),//洗能力点卷轴
        Array(5050000, 100, 8800),//洗能力点卷轴
        Array(5050001, 10, 1200),//洗1转技能点卷轴
        Array(5050002, 10, 1800),//洗2转技能点卷轴
        Array(5050003, 10, 3000),//洗3转技能点卷轴
        Array(5050004, 10, 4500),//洗4转技能点卷轴
        Array(2501000, 1, 1000),
        Array(5062400, 1, 10000),
        Array(2049405, 1, 20000),
		//潜能附加
		Array(2049406, 1, 20000),
		Array(2049406, 10, 180000),
		//附加潜能
        Array(2048306, 1, 1000),
        Array(2048306, 10, 9000)
        );
var selectedItem = -1;
var selequantity = -1;
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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x (" + itemList[i][1] + ")   #r" + itemList[i][2] + "#k点卷#l";
        }
        cm.askMenu(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainNX(-selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『点卷商城』 " + cm.getName() + " 玩家在点卷商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
				cm.dispose();
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
				cm.dispose();
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainNX(1, -selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『点卷商城』 " + cm.getName() + " 玩家在点卷商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
				cm.dispose();
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
				cm.dispose();
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
			cm.dispose();
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷。");
        }
        status = -1;
    }
}