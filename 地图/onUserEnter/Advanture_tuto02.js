/*
 * 冒险家剧情 - 07
 * 地图：陌生空间 - 光 (4000002)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.inGameDirectionEvent_AskAnswerTime(1950);
    } else if (status == 1) {
        ms.warp(4000010, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}


	