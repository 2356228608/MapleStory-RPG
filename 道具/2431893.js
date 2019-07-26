var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "请选择你需要的物品\r\n";
        selStr += "#r#L0#" + "#v5062009" + "#" + " #z5062009" + "##l\r\n";
        im.askMenu(selStr);
    } else
    if (status == 1) {
        switch (selection) {
            case 0:
                if (im.getItemQuantity(2431893) >= 20) {
                    im.gainItem(2431893, -20);
                    im.gainItem(5062009, 1);
                    im.sendOk("恭喜您，获得了" + "#r" + "超级神奇魔方" + "#k" + "1个");
                    im.dispose();
                } else {
                    im.sendOk("对不起，你的碎片不足20个！");
                    im.dispose();
                }
                break;
        }
    }
}