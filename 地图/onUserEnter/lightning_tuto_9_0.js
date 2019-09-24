/*
 * 夜光剧情 - 17
 * 地图：秘密地图 - 森林边界 (910141000)
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
        ms.inGameDirectionEvent_MoveAction(4); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.npc_ChangeController(1032200, 800, -40, 1);
        ms.npc_SetSpecialAction(1032200, "summon");
        ms.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon40");
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene0");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 400, 600, 0);
    } else if (status === i++) {
        ms.npc_SetForceMove(1032200, -1, 200, 100);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.sendNextNoESC("有人倒在那里。没事吧？", 1032200);
    } else if (status === i++) {
        ms.npc_SetForceMove(1032200, -1, 600, 100);
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene0");
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_OneTimeAction(4, 2000);
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/1", 2000, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene2");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextNoESC("你醒了。太好了。我叫拉尼娅，这里是妖精#b魔法密林#k附近的小森林。", 1032200);
    } else if (status === i++) {
        ms.sendNextSNoESC("魔法密林？没听说过啊。你知道#b埃欧雷#k吗？");
    } else if (status === i++) {
        ms.sendNextNoESC("埃欧雷？……以前有人路过这里唱过一首歌，歌里好像提到过……记不清了。", 1032200);
    } else if (status === i++) {
        ms.sendNextSNoESC("(明明记得，将黑魔法师关在封印里的时候，我也一同被关了进去。之后究竟过了多长时间？)那你知道黑魔法师吗？");
    } else if (status === i++) {
        ms.sendNextNoESC("啊，这个我记得。几百年前，有一个叫做黑魔法师的坏蛋，他非常厉害，据说能把整个大陆摧毁。有一天，出现了五位英雄，消灭了黑魔法师，使世界重新恢复和平。", 1032200);
    } else if (status === i++) {
        ms.sendNextSNoESC("这样啊……已经过了几百年了啊。所以才会感觉心里憋闷，恶心吗？");
    } else if (status === i++) {
        ms.sendNextNoESC("啊？你在说什么啊？", 1032200);
    } else if (status === i++) {
        ms.sendNextSNoESC("没事。你的父母呢？自己来这里很危险的。");
    } else if (status === i++) {
        ms.sendNextNoESC("…不知道。我只记得在这片森林遇到佩妮之后的事情。啊，佩妮是和我一起生活的小猫。", 1032200);
    } else if (status === i++) {
        ms.sendNextSNoESC("对不起。我太冒失了。");
    } else if (status === i++) {
        ms.sendNextNoESC("没关系。因为有佩妮在，我从来都没有感觉到孤单哦！不过还是很想念和人说话的感觉。佩妮每天就知道唠叨，哼。", 1032200);
    } else if (status === i++) {
        ms.sendNextSNoESC("我嘴巴很笨的。");
    } else if (status === i++) {
        ms.sendNextNoESC("没事。这里已经很久没人来了。我介绍佩妮给你认识。你愿意来我们家玩吗？", 1032200);
    } else if (status === i++) {
        ms.sendNextSNoESC("(所有的事情都结束了，过去这么久，这个世界上连一个认识的人都没有，我可以就这样安静的活下去吗？) 不麻烦的话，参观一下拉尼娅的家吧？");
    } else if (status === i++) {
        ms.npc_SetForceMove(1032200, 1, 600, 100);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.npc_LeaveField(1032200);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(910141050, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
