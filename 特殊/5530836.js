/*
 * 突破之石交换卷
 * 50万 30%
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		cm.gainItem(2614032, 2);
		cm.gainItem(5530836, -1);
		cm.sendOk("恭喜您获得 #v2614032##t2614032##k  x2。");
		cm.dispose();
    } else {
        cm.dispose();
    }
}