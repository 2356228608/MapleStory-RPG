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
		cm.gainItem(2614033, 3);
		cm.gainItem(5530833, -1);
		cm.dispose();
		cm.sendOk("恭喜您获得 #v5530833##t5530833##k  x3。");
    } else {
        cm.dispose();
    }
}