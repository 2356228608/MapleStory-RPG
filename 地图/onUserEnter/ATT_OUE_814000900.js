var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.sendNextSNoESC_New("K 还没好吗? 被其他人发现会很麻烦的…", 0x39, 1);
    } else if (status == 1) {
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 2) {
        ms.fieldEffect_Tremble(0, 300, 30);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
        ms.spawnMonster(9460030, 0, 215);
    } else if (status == 3) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 1000, -84, 133);
    } else if (status == 4) {
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 5) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 5) {
        ms.sendNextSNoESC_New("那是什么！？怎么会有如此大的巨人…！！", 0x39, 1);
        ms.fieldEffect_Tremble(0, 300, 30);
    } else if (status == 6) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 7) {
        ms.sendNextSNoESC_New("啊啊！！", 0x39, 1);
    } else if (status == 8) {
        ms.killMob(9460030);
        ms.updateInfoQuest(58464, "end=1");
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(814000000, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}