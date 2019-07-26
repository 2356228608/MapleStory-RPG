/*
 恶魔专职
 */
        var status = -1;

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
        //cm.sendChangeJob(2159312);
        //cm.getDemonSelection();
        cm.dispose();
        cm.warp(931050040, 0);
    }
}