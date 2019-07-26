var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
        Array(2290245, 20),
        Array(2290458, 20),
        Array(2290884, 20),
        Array(2290868, 20),
        Array(2290869, 20),
        Array(2290870, 20),
        Array(2290871, 20),
        Array(2290872, 20),
        Array(2290873, 20),
        Array(2290874, 20),
        Array(2290875, 20),
        Array(2290456, 20),
        Array(2290457, 20),
        Array(2290878, 20),
        Array(2290879, 20),
        Array(2290880, 20),
        Array(2290881, 20),
        Array(2290882, 20),
        Array(2290883, 20),
        Array(2290722, 20),
        Array(2290885, 20),
        Array(2290886, 20),
        Array(2290887, 20),
        Array(2290468, 20),
        Array(2290571, 20),
        Array(2290914, 20),
        Array(2290723, 20),
        Array(2290889, 20),
        Array(2290602, 20),
        Array(2291137, 20),
        Array(2290724, 20)
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
            text = "#h0#,您可以在这里兑换#e#b中介商城#n#k,请选择你想要购买的物品\r\n#b";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r" + itemlist[i][1] + "#b中介币  \r\n";
                if (i != 0 && (i + 1) % 5 == 0) {
                    text += "\r\n";
                }
            }
            cm.askMenu(text);
        } else if (a == 1) {
            selects = selection;
            cm.askNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#b中介币#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "中介币。");
        } else if (a == 3) {
            if (cm.haveItem(3800747, buynum * itemlist[selects][1])) {
                cm.gainItem(3800747, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的中介币。");
                cm.dispose();
            }
        }
    }//mode
}//f