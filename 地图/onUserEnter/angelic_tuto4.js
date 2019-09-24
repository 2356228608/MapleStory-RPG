/*
 * 爆莉萌天使剧情 - 06
 * 地图：万神殿东部地区 - 东侧圣殿 (940011040)
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
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_MoveAction(4);
        ms.npc_ChangeController(3000141, -150, 220, 0);//96 5D 00 01
        ms.npc_SetSpecialAction(3000141, "summon");
        
        ms.npc_ChangeController(3000114, 50, 220, 1);//7D 12 87 01
        ms.npc_SetSpecialAction(3000114, "summon");
        ms.npc_ChangeController(3000111, 120, 220, 1);//98 5D 00 01
        ms.npc_SetSpecialAction(3000111, "summon");
        ms.npc_ChangeController(3000115, 190, 220, 1);//97 5D 00 01
        ms.npc_SetSpecialAction(3000115, "summon");
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/BasicEff.img/Kaiser_Transform4_S", 0, 0, 0, 1, 0, 1, 3000141, 0, 0);
        ms.sendNextNoESC("这……这不可能啊……", 3000115);
    } else if (status === i++) {
        ms.sendNextNoESC("那……那种小屁孩儿能有什么力量……", 3000111);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.sendNextNoESC("看样子是昏过去了，虚惊一场。", 3000115);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.sendNextNoESC("吓我一大跳。她应该看见我们的脸了，灭口吧！", 3000111);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg0/1", 1200, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextNoESC("她……她！起来了！", 3000115);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1200);
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 1200, 0, -100, 1, 0, 1, 3000114, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 1200, 0, -100, 1, 0, 1, 3000111, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 1200, 0, -100, 1, 0, 1, 3000115, 0, 0);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(495, 0);
        ms.inGameDirectionEvent_Effect("Skill/6512.img/skill/65121002/effect", 0, 0, 0);
        ms.fieldEffect_PlayFieldSound("Angelicburster/65121002");
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.npc_SetSpecialAction(3000114, "die1", 1);
        ms.npc_SetSpecialAction(3000111, "die1", 1);
        ms.npc_SetSpecialAction(3000115, "die1", 1);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.npc_LeaveField(3000114);
        ms.npc_LeaveField(3000111);
        ms.npc_LeaveField(3000115);
        ms.inGameDirectionEvent_AskAnswerTime(720);
    } else if (status === i++) {
        ms.npc_LeaveField(3000141);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011050, 0);
    } else {
        ms.dispose();
    }
}