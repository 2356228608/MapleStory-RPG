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
        ms.sendNextSNoESC_New("到底是怎么回事？吃人的巨人!! 而且还赤裸裸…不，这不是重点…现在我要去哪里才好呢？", 0x39, 1);
    } else if (status == 1) {
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 2) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 4000, -320, 0);
    } else if (status == 3) {
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status == 4) {
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 5) {
        ms.sendNextSNoESC_New("啊! 在那里一群人在坐船! 好像是搭上那个船离开这村庄的样子. 很好，我也要搭上那艘船离开这里! 竟然说会是个有趣的冒险，根本就骗人的嘛!!!", 0x39, 1);
    } else if (status == 6) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
    } else {
        ms.dispose();
    }
}