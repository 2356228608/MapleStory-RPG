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
		im.gainItem(4009453, 4000);
        im.gainItem(2432643, -1);
        im.dispose();
    }
}