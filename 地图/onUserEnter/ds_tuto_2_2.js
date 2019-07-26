/*
 * 恶魔剧情 - 16
 * 地图：秘密地图 - 黑魔法师房间前方回廊2 (927000070)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.npc_ChangeController(2159309, 500, 50, 1);
        ms.npc_SetSpecialAction(2159309, "summon");
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextNoESC("你的实力总是让我大吃一惊啊…其实这不是个很好的机会吗？我一直都想和军团长一决高下。来，比比你的气场和我的魔法谁更强！", 2159308);
        ms.effect_Voice("Voice.img/DemonSlayertutorial_B/4");
    } else if (status === i++) {
//        ms.topMsg("请连续按下控制键，阻挡阿卡伊农的攻击且进行反击。");
//        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/guide1/0", 5010, 150, -300, 0, 0);
//        ms.npc_SetSpecialAction(2159309, "alert");
//        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/arkyrimAttack", 0, 0, -7, 1, 0, 1, 2159309, 0, 0);
//        ms.inGameDirectionEvent_AskAnswerTime(2010);
//    } else if (status === i++) {
//        ms.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0");
//        ms.inGameDirectionEvent(4, "17#17#17#", 4, 2, 3000, 0, 0, 0, 0, 0);
//    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/9", 2000, 0, -130);
        ms.inGameDirectionEvent_OneTimeAction(376, 0);
        ms.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121000/effect", 0, 321, 83, 1, 0, 1, 0, 1, 0);
        ms.fieldEffect_PlayFieldSound("demonSlayer/31121000");
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/9", 2000, 0, -130);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 500, 0, -180, 1, 0, 1, 2159309, 0, 0);
        ms.fieldEffect_PlayFieldSound("demonSlayer/31121000h");
        ms.npc_SetSpecialAction(2159309, "teleportation", 1);
        ms.inGameDirectionEvent_AskAnswerTime(570);
    } else if (status === i++) {
        ms.npc_LeaveField(2159309);
        ms.npc_ChangeController(2159309, 620, 50, 1);
        ms.npc_SetSpecialAction(2159309, "summon");
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1000, 0, -180, 1, 0, 1, 2159309, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextNoESC("挺有本事的嘛……有意思，哈哈哈哈！", 2159308);
        ms.effect_Voice("Voice.img/DemonSlayertutorial_B/5");
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159309, "resolve", 1);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/10", 2000, 0, -180, 1, 0, 1, 2159309, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/11", 2000, 0, -130);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121005/effect", 0, 321, 71, 1, 1, 1, 0, 0, 1);
        ms.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121005/effect0", 0, 321, 71, 1, -1, 1, 0, 0, 1);
        ms.fieldEffect_PlayFieldSound("demonSlayer/31121005");
        ms.inGameDirectionEvent_OneTimeAction(370, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1980);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/gateOpen/0", 2100, 918, -195, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/gateLight/0", 2100, 926, -390, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/gateStair/0", 2100, 879, 30, 1, 1, 1, 0, 1, 0);
        ms.fieldEffect_PlayFieldSound("demonSlayer/openGate");
        ms.inGameDirectionEvent_AskAnswerTime(1950);
    } else if (status === i++) {
        ms.forceStartQuest(23203);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/0", 2000, 0, -180, 1, 0, 1, 2159309, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("……哦哦，黑魔法师大人要亲自会会你了。虽然可惜，但今天就到此为止吧。我要去给那些叫英雄的家伙们露露脸了。", 2159308);
        ms.effect_Voice("Voice.img/DemonSlayertutorial_B/6");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("我应该不用再见到你了，#h0#。能被大人亲手杀死，这是你的荣耀！哈哈哈哈！", 2159308);
        ms.effect_Voice("Voice.img/DemonSlayertutorial_B/7");
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159309, "teleportation");
        ms.inGameDirectionEvent_AskAnswerTime(570);
    } else if (status === i++) {
        ms.npc_LeaveField(2159309);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg2/2", 2000, 0, -120, 0, 0);
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.inGameDirectionEvent_AskAnswerTime(1950);
    } else {
        ms.forceCompleteQuest(23203);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(931050300, 0);
    }
}

