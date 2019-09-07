/*
 * 超能力者任务 - 杰的牢骚(22720)
 * 地图：据点 - 总部 (331001000)
 * 任务：杰的牢骚(22720)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        //qm.curNodeEventEnd(true);
        //qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        //qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC_Bottom("#face0#好的，要到祭坛钥匙指向的地方去看看吗？刚好就在这附近。快去看看吧。", 1013358);
    } else if (status === i++) {
        //qm.curNodeEventEnd(true);
        //qm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
        //qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
    } else {
        qm.dispose();
    }
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
        qm.sendNextNoESC_Bottom("#b#h0##k！！你居然现在才来，真是令人难以置信，我让杰帮我传话都已经是两天前的事情了！！", 1531002);
    } else if (status === i++) {
        qm.forceCompleteQuest(22720);
        qm.gainExp(800);
        qm.gainItem(4034601, -1);
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
    } else {
        qm.dispose();
    }
}
