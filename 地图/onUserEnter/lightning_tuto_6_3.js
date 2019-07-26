/*
 * 夜光剧情 - 14
 * 地图：927020072
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
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.npc_ChangeController(2159357, 300, -80, 1);
        ms.npc_SetSpecialAction(2159357, "summon");
        ms.sendNextNoESC("#b(怎么样了？)#k", 2159357);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.sendNextSNoESC("#b(五个封印已经全部被启动。)#k");
    } else if (status === i++) {
        ms.sendNextNoESC("#b(现在只要将黑魔法师时间的力量牵引出来就好了。我相信以你具备的光之力量能够做到。)#k", 2159357);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, 0, -500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1456);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/3");
        ms.inGameDirectionEvent_AskAnswerTime(4000);
        ms.effect_Voice("Voice.img/DarkMage/1");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/8", 0, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(2300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/9", 0, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, 0, -500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2413);
        ms.effect_Voice("Voice.img/DarkMage/4");
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_LeaveField(2159357);
        ms.warp(927020100, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
