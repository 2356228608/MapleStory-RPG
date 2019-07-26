/*
 * 双弩剧情 - 03
 * 地图：冰冻的妖精森林 - 埃欧雷 (910150001)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (!ms.isQuestActive(24007) && !ms.isQuestFinished(24007)) {
        if (status == 0) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/6", 2000, 0, -120);
            ms.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status == 1) {
            ms.curNodeEventEnd(true);
            ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.updateInfoQuest(24006, "Afrien=o;Eurel=1");
            ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/8", 2000, 0, -120);
            ms.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
            ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.topMsg("按下键盘的[Alt]键就能跳跃。");
            ms.enableActions();
            ms.dispose();
        }
    }else {
            ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.topMsg("按下键盘的[Alt]键就能跳跃。");
            ms.enableActions();
            ms.dispose();
    }
}
