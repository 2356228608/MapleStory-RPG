/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:创世武器非神装
 *  @Author 娜娜 
 */
var status = 0;
var choice;

var scrolls = Array(
Array(" 1",1442285, 10000),
Array(" 1",1242141, 10000),
Array(" 1",1242139, 10000),
Array(" 1",1232122, 10000),
Array(" 1",1272040, 10000),
Array(" 1",1382274, 10000),
Array(" 1",1362149, 10000),
Array(" 1",1252106, 10000),
Array(" 1",1282040, 10000),
Array(" 1",1302355, 10000),
Array(" 1",1492245, 10000),
Array(" 1",1582044, 10000),
Array(" 1",1452266, 10000),
Array(" 1",1552130, 10000),
Array(" 1",1222122, 10000),
Array(" 1",1212129, 10000),
Array(" 1",1322264, 10000),
Array(" 1",1182285, 10000),
Array(" 1",1402268, 10000),
Array(" 1",1412189, 10000),
Array(" 1",1532157, 10000),
Array(" 1",1312213, 10000),
Array(" 1",1262051, 10000),
Array(" 1",1482232, 10000),
Array(" 1",1522152, 10000),
Array(" 1",1422196, 10000),
Array(" 1",1422197, 10000),
Array(" 1",1542128, 10000),
Array(" 1",1372237, 10000),
Array(" 1",1432227, 10000),
Array(" 1",1462252, 10000),
Array(" 1",1472275, 10000),
Array(" 1",1332289, 10000)
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
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
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
					cm.sendOk("恭喜您成功购买#i" + scrolls[choice][1] + ":# #b#t" + scrolls[choice][1] + "##k。");
				
            }
        }
    }
}
