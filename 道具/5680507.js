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
		im.gainItem(2436324, 10);
        im.gainItem(5680507, -1);
        im.dispose();
    }
}