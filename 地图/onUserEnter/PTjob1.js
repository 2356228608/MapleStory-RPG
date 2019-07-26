var status = -1;

function action(mode, type, selection) {
    if (mode === 0 && status !== 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        if (ms.isQuestFinished(25000)) {
            ms.dispose();
            return;
        }
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.playVideoByScript("phantom.avi");
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.forceCompleteQuest(25000);
        ms.teachSkill(20031211, -1, 0);
        ms.teachSkill(20031212, -1, 0);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.dispose();
    } else {
        ms.dispose();
    }
}