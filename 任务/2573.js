/*
 * 神炮王剧情 - 01
 * 地图：可可岛 - 通往冒险岛 (3000600)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNext("你好？你不觉得今天是旅游的好天气吗？我看你很陌生，是新开始冒险的冒险家吧。我是开往冒险岛的这条船的船长，我叫斯奇普。见到你很高兴。");
    } else if (status == 1) {
        qm.askAcceptDecline("还不是出航时间。现在正在做出航准备，你可以在船上看看四处看看，顺便等一下。");
    } else if (status == 2) {
        qm.sendNext("哦～！已经做好出发准备了吗？速度真快。感觉会是个好的开始～这次航行一定会很愉快。好了，我们出发吧。");
    } else if (status == 3) {
        qm.forceCompleteQuest();
        qm.warp(3000000, 0);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}