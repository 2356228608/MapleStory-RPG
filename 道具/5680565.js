/* 神奇魔方碎片 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
		im.gainItem(2614033, 3);
		im.gainItem(5680565, -1);
        im.sendOk("已成功总换.");
        im.dispose();
    }
}