/*
 * 爆莉萌天使剧情 - 07
 * 地图：万神殿东部地区 - 东侧圣殿 (940011050)
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
        ms.inGameDirectionEvent_MoveAction(4);
        ms.npc_ChangeController(3000141, -150, 220, 0);//D8 5E 00 01
        ms.npc_SetSpecialAction(3000141, "summon");
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.npc_ChangeController(3000104, -380, 220, 0);//10 5F 00 01
        ms.npc_SetSpecialAction(3000104, "summon");
        ms.npc_SetForceMove(3000104, 1, 100, 100);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/5", 1200, 0, -100, 1, 0, 1, 3000104, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/0", 1200, 0, -100, 1, 0, 1, 3000104, 0, 0);
        ms.npc_ChangeController(3000106, -330, 220, 0);//11 5F 00 01
        ms.npc_SetSpecialAction(3000106, "summon");
        ms.npc_ChangeController(3000107, -420, 220, 0);//12 5F 00 01
        ms.npc_SetSpecialAction(3000107, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(1200);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/0", 1200, 0, -100, 1, 0, 1, 3000106, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/0", 1200, 0, -100, 1, 0, 1, 3000107, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.sendNextNoESC("这到底是怎么回事……", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("卡伊尔！！！ #h0#！", 3000104);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/BasicEff.img/Kaiser_Transform4_S", 0, 0, 0, 1, 0, 1, 3000141, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/6", 1200, 0, -100, 1, 0, 1, 3000106, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/7", 1200, 0, -100, 1, 0, 1, 3000107, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/7", 1200, 0, -100, 1, 0, 1, 3000107, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(600);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg0/0", 1200, 0, -100, 1, 0, 1, 3000104, 0, 0);
        ms.sendNextNoESC("狂龙战士终于出现了。卡塔利安，快把他们俩带去医疗所吧。", 3000106);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.npc_LeaveField(3000141);
        ms.npc_LeaveField(3000104);
        ms.npc_LeaveField(3000106);
        ms.npc_LeaveField(3000107);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011060, 0);
    } else {
        ms.dispose();
    }
}