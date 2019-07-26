/*
 * //突破五万之石 30% 1个交换券
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		cm.gainItem(2614032, 1);
		cm.gainItem(5530829, -1);
		cm.dispose();
		cm.sendOk("恭喜您获得 #v2614032##t2614032##k  x1。");
    } else {
        cm.dispose();
    }
}