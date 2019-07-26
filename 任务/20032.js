/*
 * 米哈尔剧情 - 07
 * 地图：秘密地图 - 林伯特家的杂货店 (913070002)
 * 任务：清扫杂货店(20032)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext("怎么这么慢？磨磨蹭蹭的～打扫完了吗？现在好像稍微好一点了。看什么看？打扫完了的话，快来帮我整理东西！");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainExp(92);
        qm.gainItem(2001500, 20);
        qm.gainItem(2001503, 20);
        qm.dispose();
        qm.warp(913070003, 0);
    } else {
        qm.dispose();
    }
}