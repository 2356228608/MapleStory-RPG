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
		cm.gainItem(2614033, 10);
		cm.gainItem(5530834, -1);
		cm.sendOk("恭喜您获得 #v2614033##t2614033##k  x10。");
		cm.dispose();
    } else {
        cm.dispose();
    }
}