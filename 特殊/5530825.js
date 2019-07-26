/*
 * //星星240个交换券
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		cm.gainItem(4001839, 240);
		cm.gainItem(5530825, -1);
		cm.dispose();
		cm.sendOk("恭喜您获得 #v4001839##t4001839##k  x 240 ");
    } else {
        cm.dispose();
    }
}