/*
 * 突破之石交换卷
 * 20万 30%
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		cm.gainItem(2614007, 1);
		cm.gainItem(5530831, -1);
		cm.dispose();
		cm.sendOk("恭喜您获得 #v2614007##t2614007##k  x1。");
    } else {
        cm.dispose();
    }
}