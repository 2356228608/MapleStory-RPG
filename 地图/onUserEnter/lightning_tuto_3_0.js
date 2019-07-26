/*
 * 夜光剧情 - 04
 * 地图：秘密地图 - 时间神殿回廊 (927020050)
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
        ms.npc_ChangeController(2159356, 1500, 50, 1);
        ms.npc_SetSpecialAction(2159356, "summon");
        ms.npc_ChangeController(2159360, 1350, 50, 0);
        ms.npc_SetSpecialAction(2159360, "summon");
        ms.npc_ChangeController(2159361, 1300, 50, 0);
        ms.npc_SetSpecialAction(2159361, "summon");
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0", 1000, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159356, "attack");
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Use2");
        ms.inGameDirectionEvent_AskAnswerTime(450);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/5", 0, 0, -120);
        ms.npc_SetSpecialAction(2159360, "hit");
        ms.npc_SetSpecialAction(2159361, "hit");
        ms.inGameDirectionEvent_Effect("Skill/2112.img/skill/21120005/hit/0", 0, -5, -50, 1, 0, 1, 2159360, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/2112.img/skill/21120005/hit/0", 0, -5, -50, 1, 0, 1, 2159361, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit2");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Skill/2112.img/skill/21120005/hit/0", 0, -5, -50, 1, 0, 1, 2159360, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/2112.img/skill/21120005/hit/0", 0, -5, -50, 1, 0, 1, 2159361, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit2");
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Use3");
        ms.npc_SetSpecialAction(2159360, "die");
        ms.npc_SetSpecialAction(2159361, "die");
        ms.inGameDirectionEvent_Effect("Skill/2112.img/skill/21120005/hit/0", 0, -5, -50, 1, 0, 1, 2159360, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/2112.img/skill/21120005/hit/0", 0, -5, -50, 1, 0, 1, 2159361, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit3");
        ms.inGameDirectionEvent_AskAnswerTime(2200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.npc_LeaveField(2159360);
        ms.npc_LeaveField(2159361);
        ms.sendNextNoESC("他们也不是省油的灯，来的挺快啊。果然是光之守护者。", 2159356);
    } else if (status === i++) {
        ms.sendNextSNoESC("你怎么会一个人在这？弗里德和双弩精灵呢？怎么还受伤了？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("他们先出发了。也许已经和黑魔法师交手了。我有点事，所以迟了。", 2159356);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("战神，一起走吧？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("你是在担心我吗？人真好。不过我没事。这点小伤算不了什么。你还是快跟上去吧。就算弗里德和双弩精灵合作默契，也无法抵挡黑魔法师。", 2159356);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("…知道了。你也别太勉强自己。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/7", 5000, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg0/6", 3000, 0, -100, 1, 0, 1, 2159356, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.npc_LeaveField(2159356);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(927020060, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
