/*
 * 夜光剧情 - 03
 * 地图：秘密地图 - 时间神殿回廊 (927020010)
 * @author 狐狸糊涂
 */
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
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/2", 1000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/3", 1000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/4", 1000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/0");
        ms.warp(927020050, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
