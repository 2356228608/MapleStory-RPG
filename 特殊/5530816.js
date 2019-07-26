/*
 * //星星16个交换券
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		cm.gainItem(4001839, 16);
		cm.gainItem(5530816, -1);
		cm.dispose();
		cm.sendOk("恭喜您获得 #v4001839##t4001839##k  x 16 ");
    } else {
        cm.dispose();
    }
}