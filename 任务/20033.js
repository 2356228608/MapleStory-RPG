/*
 * 米哈尔剧情 - 08
 * 地图：秘密地图 - 林伯特家的杂货店 (913070003)
 * 任务：危险的后院(20033)
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
        qm.askMenu("鸡蛋拿来了吗？没打碎吧？等等，怎么成了这个样子？发生了什么事？\r\n#b#L0#嗯……“沃尔夫”突然攻击了我……然后……“沃尔夫”逃走了。#l");
    } else if (status === i++) {
        qm.sendNext("什么！“沃尔夫”逃走了？你这没用的东西！！今天不许吃饭！！如果找不到“沃尔夫”，你也别回来了！");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainItem(4033196, -10);
        qm.gainItem(2001500, 30);
        qm.gainItem(2001503, 30);
        qm.gainExp(372);
        qm.dispose();
        qm.warp(913070004, 0);
    } else {
        qm.dispose();
    }
}