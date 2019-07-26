/*
 * 阴阳师剧情 - 20
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：战场上感受到的气息(57413)
 * 等级：20以上
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
        qm.sendNext_Illus("神那，神那，等一下……你应该也感受到这股气息了吧？", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("虽然气息并不明显，但是感觉非常熟悉……应该就是从不远处传来的吧。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("确实，虽然气息中似乎充满了力量，但却显得非常微弱。看来是出什么异常情况了吧？", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("方向……距离……应该就在有织田军出现的枫叶原。看来我们最好过去看看情况。虽然这么做挺对不住要继续帮忙施放法术的元就大人，但没时间想那么多了。");
    } else {
        qm.forceStartQuest();
        qm.gainExp(1852);
        qm.dispose();
    }
}