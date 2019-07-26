/*
 * 冒险家剧情 - 45
 * 地图：枫叶路 - 码头 (4000031)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("准备好离开的话，再和我说话吧。");
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        cm.askYesNo("托你的福，出航准备已经全部完成了。现在上船吗？");
    } else if (status == 1) {
        cm.warp(4000032, 0);
        cm.dispose();
    } else {
        cm.dispose();
    }
}