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
		cm.gainItem(2614008, 3);
		cm.gainItem(5530839, -1);
		cm.sendOk("恭喜您获得 #v2614008##t2614008##k  x3。");
		cm.dispose();
    } else {
        cm.dispose();
    }
}