﻿var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        //cm.askYesNo("Would you like to go to Hilla's Tower Entrance?");
        //} else if (status == 1) {
        //cm.warp(262030000);
        cm.dispose();
    }
}