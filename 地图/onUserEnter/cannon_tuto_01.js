/*
 * 神炮王剧情 - 02
 * 地图：可可岛 - 通往冒险岛 (3000000)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.npc_ChangeController(1096000, 2209, -107, 1);//70 2B D3 01
        ms.npc_SetSpecialAction(1096000, "summon");
        ms.npc_ChangeController(1096001, 2046, -62, 1);//71 2B D3 01
        ms.npc_SetSpecialAction(1096001, "summon");
        ms.inGameDirectionEvent_MoveAction(2);
        ms.sendNextNoESC("你为什么要离开这里，到冒险岛去？从这里去冒险岛的人并不多……而且看你的打扮，好像不是单纯去旅行的。", 1096000);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face03");
        ms.sendNextPrevSNoESC("想到冒险岛去继续修炼。听说在那里修炼之后，再到金银岛去，就能成为帅气的冒险家。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("哦，你知道得很清楚嘛。为了成为冒险家，第一步最好在冒险岛开始。那里有很多其他地方来的新手，可以和他们交朋友，同时那里也没什么危险的怪物。但是在这之后才是冒险的真正开始。在金银岛和神秘岛之类的大路上，到处都是你难以想象的强大怪物。当然，那里也更好玩。", 1096000);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("强大的怪物！那是成为帅气冒险家的必要因素。只要勤于修行，就可以让自己变得更强，因此我一定要努力修炼。在出发之前，我做了很多功课。我是有准备的冒险家，哈哈哈！");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("哦，还挺有自信的。是的，决心是最最重要的。但是以后不知道会发生什么事！但是不管发生什么事，只要牢记#b不怕入蝙蝠怪洞穴,只要不慌神#k这句俗话，就可以战胜一切困难。", 1096000);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("等等……？你有没有听到什么声音？我感觉到了奇怪的气息……这里应该是没有怪物的和平海域啊……小心！", 1096000);
    } else if (status === i++) {
        ms.balloonMsg("在这种和平的地方，到底发生了什么事？", 100, 3);
        ms.inGameDirectionEvent_MoveAction(2);
        ms.curNodeEventEnd(true);
        ms.npc_ChangeController(1096011, 2000, -20, 1);//88 2B D3 01
        ms.npc_SetSpecialAction(1096011, "summon");
        ms.inGameDirectionEvent_Effect("Effect/Summon.img/15", 0, 0, 0, 1, 0, 1, 1096011, 0, 0);
        ms.fieldEffect_PlayFieldSound("cannonshooter/summon");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.npc_LeaveField(1096000);
        ms.npc_LeaveField(1096001);
        ms.npc_ChangeController(1096008, 2000, -20, 0);//5C 2E D3 01
        ms.npc_SetSpecialAction(1096008, "summon");
        ms.npc_ChangeController(1096002, 2108, -82, 1);//5D 2E D3 01
        ms.npc_SetSpecialAction(1096002, "summon");
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/balog/0", 2000, 0, -200, 1, 0, 1, 1096008, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(1096008, "attack2");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/npc/0", 2000, 0, -100, 1, 0, 1, 1096002, 0, 0);
        ms.npc_SetSpecialAction(1096008, "attack1");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("Party1/Failed");
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/User/0", 2000, 0, -100, 1, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
    } else if (status === i++) {
        ms.npc_SetSpecialAction(1096008, "attack2");
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/npc/1", 2000, 0, -100, 1, 0, 1, 1096002, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/User/1", 2000, 0, -100, 1, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
        ms.npc_SetSpecialAction(1096008, "attack2");
        ms.fieldEffect_PlayFieldSound("cannonshooter/Attack1");
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face05");
        ms.npc_SetSpecialAction(1096008, "attack1");
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/balog/0", 2000, 0, -100, 1, 0, 1, 1096008, 0, 0);
        ms.inGameDirectionEvent_Effect("Mob/8150000.img/attack2/info/effect", 0, 0, 0, 1, 0, 1, 1096008, 0, 0);
        ms.fieldEffect_PlayFieldSound("cannonshooter/Attack1");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Mob/8150000.img/attack2/info/hit", 0, 0, 0, 1, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/User/2", 2000, 0, -100, 1, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_MoveAction(6);
        ms.inGameDirectionEvent_AskAnswerTime(500);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
    } else if (status === i++) {
        ms.npc_SetSpecialAction(1096008, "attack2");
        ms.inGameDirectionEvent_Effect("Mob/8130100.img/attack1/info/effect", 0, 0, 0, 1, 0, 1, 1096008, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Mob/8130100.img/attack1/info/hit", 0, 0, 0, 1, 0, 0, 0, 0, 0);
        ms.fieldEffect_PlayFieldSound("cannonshooter/Attack1");
        ms.balloonMsg("怎么会这样？？！", 100, 3);
        ms.inGameDirectionEvent_MoveAction(6);
        ms.inGameDirectionEvent_AskAnswerTime(500);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face01");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Mob/8130100.img/attack1/info/effect", 0, 0, 0, 1, 0, 1, 1096008, 0, 0);
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(1096008, "attack");
        ms.fieldEffect_PlayFieldSound("cannonshooter/Attack2");
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/balog/1", 2000, 0, -100, 1, 0, 1, 1096008, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/User/3", 2000, 0, -100, 1, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face02");
    } else if (status === i++) {
        ms.npc_SetSpecialAction(1096008, "stand");
        ms.npc_LeaveField(1096008);
        ms.npc_LeaveField(1096002);
        ms.npc_LeaveField(1096011);
        ms.curNodeEventEnd(true);
        ms.warp(912060100, 0);
        ms.dispose();
    }
}