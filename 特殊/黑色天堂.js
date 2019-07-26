/*
 * 黑色天堂剧情 - 1
 * 地图：黑色天堂的事先定义(350011001)
 * @author 娜娜
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNextS("你想体验黑色天堂剧情吗,我会送你进去\r\n请先把分辨率调成1024*768体验效果更佳。");
    } else if (status == 1) {
		cm.sendNextS("剧情无法中段,请继续。");
	} else if (status == 2) {
		cm.dispose();
        cm.warp(350011000, 0);
	} else {
        cm.dispose();
    }
}