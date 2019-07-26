/*
 * 龙神剧情 - 25
 * 地图：动画 - 教程2 (900090102)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0)
        status--;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.warp(900090103);
        cm.dispose();
    }
}