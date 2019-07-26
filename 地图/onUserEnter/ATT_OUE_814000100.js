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
        ms.sendNextSNoESC_New("喔喔~ 這里就是 '异世界'吗? 看来是一个个非常和平的村庄? 话说怎么在屋顶上啊…需要先去找个安全下去路线吧…", 0x39, 1);
    } else if (status == 1) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 2) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 4000, 3402, 184);
    } else if (status == 3) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 4) {
        ms.sendNextSNoESC_New("啊! 那边有个梯子，另外用那个爬下去到地上吧！", 0x39, 1);
    } else if (status == 5) {
        ms.fieldEffect_Tremble(0, 300, 30);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 6) {
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status == 7) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 8) {
        ms.sendNextSNoESC_New("哇啊！什么啊！？", 0x39, 1);
    } else if (status == 9) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 2000, -800, 184);
    } else if (status == 10) {
        ms.spawnMonster(9460029, -800, 395);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 11) {
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 12) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 13) {
        ms.sendNextSNoESC_New("到底是什么什么事情了？那是巨人？竟然在吃人！？不管如何这里很危险！使用那梯子先逃吧！！", 0x39, 1);
    } else if (status == 14) {
        ms.killMob(9460029);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(814000200, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}