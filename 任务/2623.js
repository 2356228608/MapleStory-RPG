/*
 * 暗影双刀任务 - [转职]见习刀客(2623)
 * 地图：金银岛 - 雪姬的房间 (103050101)
 * 任务：见习刀客(2623)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.forceStartQuest();
            qm.warp(910350000);
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            qm.forceCompleteQuest();
            qm.gainItem(4032616, -1);
            qm.changeJob(430);
            qm.dispose();
        }
    }
}