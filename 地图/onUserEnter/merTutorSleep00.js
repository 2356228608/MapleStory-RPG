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
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene0");
        ms.inGameDirectionEvent_AskAnswerTime(14000);
		cm.setInGameDirectionMode(false, false, false);
        ms.warp(910150006, 0);
        ms.dispose();
    }
}
