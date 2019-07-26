var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("This is an important decision to make.");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendNextSNoESC("我才刚刚开始恢复我多年前的权力。不过，虽然我不是一个伟大的小偷，我必须准备进入我的大门。");
    } else if (status == 1) {
        qm.sendNextS("每一个英雄都要先睡着时，# H #，你第一次SLEP将为ereve，一切准备就绪，你只需要出口船舶和下坡。", 1);
    } else if (status == 2) {
        qm.sendNextSNoESC("对于这个世界上最伟大的小偷来说，这没什么问题。!");
    } else if (status == 3) {
        qm.sendNextPrevS("你可以走了，你的旅程从这里开始。", 1);
    } else if (status == 4) {
        qm.forceStartQuest();
        qm.dispose();
    }
}