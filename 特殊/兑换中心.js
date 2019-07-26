var cashitem;
var status = -1;
var select = -1;
var isok;
var str = "";
function start() {

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        var selStr = "#n#k#L0#蜗牛邮票兑换#l\r\n";
        selStr += "#n#k#L1#风暴币兑换#l\r\n";


        cm.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310144, 101);
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9310144, 102);
                break;
        }
    } else {
        cm.dispose();
    }
}
