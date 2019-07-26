/*  This source is made by BMS Team
 *  脚本功能：蜡笔专卖
 *  @Author 娜娜 
 */

var status = 0;
var choice;
var scrolls = Array(

		Array("红色蜡笔", 3994417, 100000),
		Array("橙色蜡笔", 3994418, 100000),
		Array("黄色蜡笔", 3994419, 100000),
		Array("绿色蜡笔", 3994420, 100000),
		Array("青色蜡笔", 3994421, 100000),
		Array("蓝色蜡笔", 3994422, 100000)
		
		
        );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            choices = "\r\n我账户点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d点卷 x100个#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "蜡笔专卖店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + " #? x100个");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
				var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 100, "蜡笔专卖店", 3, true);
				if (gachaponItem != -1) {
					cm.gainNX(-money);
					cm.dispose();
					cm.sendOk("恭喜您成功购买#i" + scrolls[choice][1] + ":# #b#t" + scrolls[choice][1] + "##k。");
				} else {
					cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
				}
            }
        }
    }
}
