/*
 * 超能力者任务 - 需要分析材料(22728)
 * 地图：据点 - 总部 (331001000)
 * 任务：需要分析材料(22728)
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC_Bottom("到底是什么状况？\r\n持续不断地有怪物冒出来。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("好像也没有学生身陷危险，继续留在这里只是浪费时间，\r\n还是先回去吧。", 1531000);
    } else if (status === i++) {
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
        qm.warp(331002500, 0);
    } else {
        qm.dispose();
    }
}
