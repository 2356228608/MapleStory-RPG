var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.askYesNo("你现在是想离开这里吗?");
    } else if (status == 1) {
        cm.warp(220080000);
        if (cm.getPlayerCount(220080001) == 0) {
            cm.getMap(220080000).resetReactors();
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}