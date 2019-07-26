/*
 * ////超级药水60个交换券
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		cm.gainItem(2000032, 60);
		cm.gainItem(5530842, -1);
		cm.dispose();
		cm.sendOk("恭喜您获得 #v2000032##t2000032##k  x 60 ");
    } else {
        cm.dispose();
    }
}