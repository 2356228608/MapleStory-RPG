/*
 * 双弩剧情 - 01
 * 地图：黑色的路 - 战斗结束地图 (910150000)
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    if (status == 0) {
        ms.teachSkill(20021166, 1, 1);
        ms.teachSkill(20021181, 1, 1);
        ms.teachSkill(20020111, 1, 1);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.playVideoByScript("Mercedes.avi");
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status == 1) {
        ms.inGameDirectionEvent_MoveAction(4); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 2) {
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status == 3) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/1", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 4) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/2", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 5) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/3", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 6) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/4", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 7) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/5", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 8) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.topMsg("按下键盘的方向键 [←]、[→]键就能移动。");
        ms.enableActions();
        ms.dispose();
    }
}
