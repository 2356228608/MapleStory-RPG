/*
 * 龙神剧情 - 15
 * 地图：梦中 - 梦中的森林 (900010200)
 * Npc名称：龙
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNext("你终于来了。拥有契约者资格的人……");
    } else if (status == 1) {
        cm.sendNextPrev("执行契约吧……");
    } else if (status == 2) {
        cm.warp(900090101);
        cm.dispose();
    }
}