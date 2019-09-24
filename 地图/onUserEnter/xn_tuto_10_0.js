/*
 * 尖兵剧情 - 14
 * 地图：秘密研究所 - 机库 (931050980)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/sig", 0, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/luti", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2100);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 1000, -486, 43);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 900, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/15", 1200, 0, -100);
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/laser", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1800);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/16", 1200, -110, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(931050990, 0);
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
