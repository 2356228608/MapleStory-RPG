/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;

var scrolls = Array(
Array(" 1",2613064, 0),
Array(" 2",2613065, 0),
Array(" 2",2612076, 0),
Array(" 2",2612077, 0),
Array(" 2",2616074, 0),
Array(" 2",2616075, 0),
Array(" 2",2615043, 0),
Array(" 2",2615044, 0),
Array(" 2",2048821, 0),
Array(" 2",2048822, 0)
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
            choices = "\r\n点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d点卷#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "专卖店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要选择#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
					cm.gainItem(scrolls[choice][1], 1);
					cm.gainNX(-money);
					cm.dispose();
					cm.sendOk("恭喜您获得#i" + scrolls[choice][1] + ":# #b#t" + scrolls[choice][1] + "##k。");
				
            }
        }
    }
}
