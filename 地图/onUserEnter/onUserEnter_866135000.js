/* global ms */
        var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        //ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        //ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_AskAnswerTime(3000);
        ms.curNodeEventEnd(true);
		ms.warp(10000, 0);
        //ms.showDarkEffect(false);
        //ms.inGameDirectionEvent_Effect("Effect/Direction14.img/effect/ShamanBT/ChapterA/25", 1, 1, 1, 0, 0);
    } else if (status === i++) {
        if (!ms.isQuestFinished(59017)) {
            ms.forceStartQuest(59017);
        }
        ms.lockUI(0);
        ms.disableOthers(false);
        ms.dispose();
		ms.warp(10000, 0);
    } else {
        ms.dispose();
    }
}