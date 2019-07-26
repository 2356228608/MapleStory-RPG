
        var status = 0;

function start() {
    cm.askYesNo("Would you like to return to the Lobby?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(889100100);
    }
    cm.dispose();
}