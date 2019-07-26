/*
 * 剑豪剧情 - 24
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：确保退路(57113)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext_Illus("剑斗，辛苦你了。待在这个本阵里，都能清楚看到敌兵们自乱阵脚的模样。如此一来，敌人应该需要花费很长一段时间才能重整阵势。所以说，他们在短时间内应该不会从正面向枫叶山丘发起进攻了。");
    } else if (status == 1) {
        qm.sendNextPrev_Illus("没有必要强行战斗下去了，快点返回本阵吧。我也会要求其他士兵一起回去本阵的。");
    } else if (status === i++) {
        qm.sendNextPrevS("嗯，我明白了。对了，我在敌阵的中央部位发现了一个神秘的狐狸尾巴。按理说，这种东西根本不会出现在这样一个时间和地点的，所以我有些在意……这会不会是来自那只春秋一直坐着的狐狸呢？");
    } else if (status === i++) {
        qm.askYesNo_Illus("狐狸尾巴……？这还真是其妙啊。先不说这个了，可不可以请你尽快返回本阵？等我们返回本阵后再继续详谈吧。");
    } else {
        qm.forceCompleteQuest();
        qm.gainExp(2596);
        qm.gainItem(4033307, -1);
        qm.dispose();
    }
}