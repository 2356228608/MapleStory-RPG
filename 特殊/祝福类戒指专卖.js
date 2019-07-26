/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:祝福类戒指专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var scrolls = Array(


Array(" 1",1112594, 10000),
Array(" 2",1112585, 10000),
Array(" 3",1112586, 10000),
Array(" 4",1112663, 10000),
Array(" 5",1112735, 10000),
Array(" 6",1113020, 10000),
Array(" 6",1113008, 10000),
Array(" 6",1113009, 10000),
Array(" 6",1113010, 10000),
Array(" 6",1113189, 10000),
Array(" 6",1113190, 10000),
Array(" 6",1113191, 10000),
Array(" 6",1113192, 10000),
Array(" 7",1113193, 10000),
Array(" 8",1113194, 10000),
Array(" 9",1113204, 10000),
Array(" 1363",1113205, 10000),
Array(" 1363",1113206, 10000),
Array(" 1363",1113207, 10000),
Array(" 1363",1113208, 10000),
Array(" 1363",1113209, 10000),

Array(" 1363",1114207, 10000),
Array(" 1363",1114226, 10000),
Array(" 1363",1114238, 10000),
Array(" 1363",1114213, 10000),

Array(" 1363",1114208, 10000),
Array(" 1363",1114227, 10000),
Array(" 1363",1114239, 10000),
Array(" 1363",1114214, 10000),

Array(" 1363",1114209, 10000),
Array(" 1363",1114228, 10000),
Array(" 1363",1114240, 10000),
Array(" 1363",1114215, 10000),

Array(" 1363",1114210, 10000),
Array(" 1363",1114229, 10000),
Array(" 1363",1114241, 10000),
Array(" 1363",1114216, 10000),

Array(" 1363",1114211, 10000),
Array(" 1363",1114217, 10000),
Array(" 1363",1114230, 10000),
Array(" 1363",1114242, 10000),

Array(" 1363",1114212, 10000),
Array(" 1363",1114231, 10000),
Array(" 1363",1114243, 10000),
Array(" 1363",1114218, 10000),

Array(" 1363",1114200, 10000),
Array(" 1363",1114219, 10000),
Array(" 1363",1114201, 10000),
Array(" 1363",1114220, 10000)
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
            cm.askMenuS("欢迎来到" + cm.getServerName() + "祝福类戒指专卖,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
				var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 1, "祝福类戒指专卖", 3, true);
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
