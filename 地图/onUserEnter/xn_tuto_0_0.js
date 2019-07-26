/*
 * 尖兵剧情 - 02
 * 地图：和平时期的埃德尔斯坦 - 埃德尔斯坦外围1 (931050900)
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
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.npc_ChangeController(2159368, 665, -20, 1);
        ms.npc_SetSpecialAction(2159368, "summon");
        ms.npc_ChangeController(2159374, 380, -20, 0);
        ms.npc_SetSpecialAction(2159374, "summon");
        ms.npc_ChangeController(2159372, 450, -20, 0);
        ms.npc_SetSpecialAction(2159372, "summon");
        ms.npc_ChangeController(2159373, 520, -20, 0);
        ms.npc_SetSpecialAction(2159373, "summon");
        ms.npc_ChangeController(2159375, 590, -20, 1);
        ms.npc_SetSpecialAction(2159375, "summon");
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(3000);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.fieldEffect_ScreenMsg("xenon/text0");
        ms.inGameDirectionEvent_AskAnswerTime(1900);
    } else if (status === i++) {
        ms.sendNextNoESC("好了，走吧？", 2159373);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/0", 900, 0, -120, 1, 0, 1, 2159373, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/1", 900, 0, -120, 1, 0, 1, 2159375, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextNoESC("冒险勇者红鹰！", 2159375);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("冒险勇者黄雄！", 2159373);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("冒险勇者蓝鲨！", 2159372);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("冒险勇者绿虎！", 2159374);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("冒险勇者熊猫！", 2159368);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("合在一起……", 2159373);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/2", 900, 0, -120, 1, 0, 1, 2159373, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159373, "happy");
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.sendNextNoESC("呀！太帅了！", 2159373);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("贝尔非常喜欢冒险勇者游戏。", 2159372);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("嗯！不觉得很帅吗？守护埃德尔斯坦的正义英雄！", 2159373);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("虽然没有需要击败的坏蛋。", 2159374);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("所以每天只能喊喊口号。", 2159375);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("我来当坏蛋不就行了……。", 2159368);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("#h0#！你又在胡说什么啊？那可不行。大家都应该是正义一方！不然就太让人难过了。", 2159373);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("嗯……。", 2159368);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("即使没有坏蛋，只要好玩就行了。该做的游戏做完了，今天就此解散吧？", 2159374);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("那我先走了。家里还有事。", 2159368);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("再见。#h0#，明天见！", 2159373);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159368, -1, 550, 100);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/3", 1200, 0, -120, 1, 0, 1, 2159375, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/4", 1200, 0, -120, 1, 0, 1, 2159374, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/5", 1200, 0, -120, 1, 0, 1, 2159368, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.npc_LeaveField(2159368);
        ms.npc_LeaveField(2159374);
        ms.npc_LeaveField(2159372);
        ms.npc_LeaveField(2159373);
        ms.npc_LeaveField(2159375);
        ms.dispose();
        ms.warp(931050910, 0);
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
