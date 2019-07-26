/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:稀有戒指
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var scrolls = Array(
Array("坚韧的半半灵魂结晶", 2591399, 10000),
Array("坚韧的摇滚之魂灵魂结晶", 2591014, 10000),
Array("坚韧的黑水灵灵魂结晶", 2591269, 10000),
Array("坚韧的班·雷昂灵魂结晶", 2591139, 10000),
Array("坚韧的威尔灵魂结晶", 2591648, 10000),
Array("坚韧的麦格纳斯灵魂结晶", 2591279, 10000),
Array("坚韧的看守阿尼灵魂结晶", 2591021, 10000),
Array("坚韧的粉红猴灵魂结晶", 2591532, 10000),
Array("坚韧的品克缤灵魂结晶", 2591147, 10000),
Array("坚韧的觉醒希拉灵魂结晶", 2591658, 10000),
Array("坚韧的御龙魔灵魂结晶", 2591028, 10000),
Array("坚韧的觉醒希拉灵魂结晶", 2591667, 10000),
Array("坚韧的薛西斯灵魂结晶", 2591152, 10000),
Array("坚韧的血腥女王灵魂结晶", 2591408, 10000),
Array("坚韧的毛莫灵魂结晶", 2591295, 10000),
Array("坚韧的嘟嘟灵魂结晶", 2591551, 10000),
Array("坚韧的莱克斯灵魂结晶", 2591035, 10000),
Array("坚韧的敦凯尔灵魂结晶", 2591675, 10000),
Array("坚韧的扎昆灵魂结晶", 2591162, 10000),
Array("坚韧的贝伦灵魂结晶", 2591417, 10000),
Array("坚韧的皮亚奴斯灵魂结晶", 2591238, 10000),
Array("坚韧的御龙魔灵魂结晶", 2591107, 10000),
Array("坚韧的帕普拉图斯灵魂结晶", 2591618, 10000),
Array("坚韧的希拉灵魂结晶", 2591232, 10000),
Array("坚韧的帕普拉图斯灵魂结晶", 2591627, 10000),
Array("坚韧的莱克斯灵魂结晶", 2591114, 10000),
Array("坚韧的威尔灵魂结晶", 2591639, 10000),
Array("坚韧的黑水灵灵魂结晶", 2591253, 10000),
Array("坚韧的武公灵魂结晶", 2591121, 10000),
Array("坚韧的希拉灵魂结晶", 2591248, 10000),
Array("坚韧的麦格纳斯灵魂结晶", 2591263, 10000),
Array("坚韧的皮埃尔灵魂结晶", 2591390, 10000),
Array("坚韧的蝙蝠怪灵魂结晶", 2591131, 10000),
Array("坚韧的艾菲尼娅灵魂结晶", 2591207, 10000),
Array("坚韧的贝伦灵魂结晶", 2591459, 10000),
Array("坚韧的阿卡伊勒灵魂结晶", 2591201, 10000),
Array("坚韧的班·雷昂灵魂结晶", 2591072, 10000),
Array("坚韧的路西德灵魂结晶", 2591598, 10000),
Array("坚韧的斯乌灵魂结晶", 2591467, 10000),
Array("坚韧的希纳斯灵魂结晶", 2591082, 10000),
Array("坚韧的皮亚奴斯灵魂结晶", 2591222, 10000),
Array("坚韧的摇滚之魂灵魂结晶", 2591093, 10000),
Array("坚韧的阿卡伊勒灵魂结晶", 2591217, 10000),
Array("坚韧的看守阿尼灵魂结晶", 2591100, 10000),
Array("坚韧的敦凯尔灵魂结晶", 2591684, 10000),
Array("坚韧的武公灵魂结晶", 2591042, 10000),
Array("坚韧的斯乌灵魂结晶", 2591426, 10000),
Array("坚韧的薛西斯灵魂结晶", 2591168, 10000),
Array("坚韧的蝙蝠怪灵魂结晶", 2591052, 10000),
Array("坚韧的皮埃尔灵魂结晶", 2591435, 10000),
Array("坚韧的扎昆灵魂结晶", 2591178, 10000),
Array("坚韧的奈奈灵魂结晶", 2591560, 10000),
Array("坚韧的奈奈灵魂结晶", 2591560, 10000),
Array("坚韧的品克缤灵魂结晶", 2591062, 10000),
Array("坚韧的半半灵魂结晶", 2591443, 10000),
Array("坚韧的戴米安灵魂结晶", 2591571, 10000),
Array("坚韧的希纳斯灵魂结晶", 2591186, 10000),
Array("坚韧的戴米安灵魂结晶", 2591580, 10000),
Array("坚韧的血腥女王灵魂结晶", 2591451, 10000)
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
            cm.askMenuS("欢迎来到" + cm.getServerName() + "坚韧的灵魂结晶,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
                var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 1, "[坚韧的灵魂结晶]", 3, true);
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
