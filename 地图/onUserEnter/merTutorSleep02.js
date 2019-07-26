var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        ms.curNodeEventEnd(false);
        ms.setDirectionMode(false);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.forceCompleteQuest(24005);
		ms.forceStartQuest(24008);
        ms.warp(101050000, 7);
        ms.dispose();
    }
}
