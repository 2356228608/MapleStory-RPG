﻿var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            //cm.updateOneInfo(1477, "count", "999999");
            cm.openUI(1131);
            cm.dispose();
            break;
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}