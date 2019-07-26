/*
 * 冒险家剧情 - 11
 * 地图：枫叶路 - 小蜗牛 (4000012)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNext("你好，我的名字叫麦加。我从来没有见过你哦，看来你是新来的#b冒险家#k吧？");
    } else if (status == 1) {
        qm.sendNextPrevS("#b冒险家？#k");
    } else if (status == 2) {
        qm.sendNextPrev("是的，为了在冒险岛世界展开冒险而从其他世界来的人。我们称这种人为“冒险家”。所有冒险家都是从#b冒险岛#k开始冒险的。");
    } else if (status == 3) {
        qm.sendNextPrevS("#b冒险岛？#k");
    } else if (status == 4) {
        qm.sendNextPrev("嗯，冒险岛！这里本来只是个无名小岛，但不知从何时起有很多冒险家都纷至沓来。为了他们的到来，这里开始陆陆续续有设施搭建起来，现在这里已经变成了一个不错的村庄。并且由我来为像你一样的新手冒险家提供帮助。");
    } else if (status == 5) {
        qm.sendNextPrev("你是叫……#b#h0##k吧？既然你是第一次来到冒险岛世界，那就多听一下我做的说明吧？通过我的小测试的话，我就会给你对冒险非常有用的礼物哦！");
    } else if (status == 6) {
        qm.sendNextPrev("如果你不想听我的说明，我马上送你去村庄。不过那样一来，你就无法获得礼物。");
    } else if (status == 7) {
        qm.askMenuS("明白了的话，现在开始选择吧。你要怎么做呢？\r\n#b#L0# 听取麦加的说明，并获得新装备作为礼物。#l\r\n#L1# 不听说明，立即移动至村庄。#l#k");
    } else if (status == 8) {
        sel = selection;
        if (selection == 0) {
            qm.sendNext("不错的选择！如果你按照我的说明去做，以后在冒险岛世界生活不会有任何问题的。");
            qm.forceStartQuest();
            qm.forceCompleteQuest();
            qm.gainExp(35);
            qm.dispose();
        } else if (selection == 1) {
            qm.sendNext("好吧，那我马上送你到村子去。");
        }
    } else if (status == 9) {
        if (sel == 1) {
            qm.sendNext("这是我给你的礼物！我给了你一些恢复药水，之后记得打开消耗道具栏确认看看。");
            qm.gainItem(2000013, 50);
            qm.gainItem(2000014, 50);
        }
    } else if (status == 10) {
        if (sel == 1) {
            qm.sendNext("到枫叶村别忘了和#b路卡斯#k村长见面！他会给你到新世界的建议。");
        }
    } else if (status == 11) {
        if (sel == 1) {
            qm.warp(4000020, 0);
            qm.forceStartQuest(32210);
        }
        qm.dispose();
    }
}