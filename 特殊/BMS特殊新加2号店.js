/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:BMS特殊新加2号店
 *  @Author 娜娜 
 */
var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
        Array(2436324, 980), //核心宝石
		Array(5840003, 200),
		Array(5840006, 200),
		Array(5840007, 200)
        );

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "#h0#,您可以在这里购买#e#b理发卷#n#k,请选择你想要购买的物品\r\n#b";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r" + (itemlist[i][1]) + "#b抵用卷  \r\n";
                if (i != 0 && (i + 1) % 5 == 0) {
                    text += "\r\n";
                }
            }
            cm.askMenu(text);
        } else if (a == 1) {
            selects = selection;
            cm.askNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + (itemlist[selects][1]) + "个#b抵用卷#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "抵用卷。");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= -buynum * itemlist[selects][1]) {
                cm.gainNX(2, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的抵用卷。");
                cm.dispose();
            }
        }
    }//mode
}//f