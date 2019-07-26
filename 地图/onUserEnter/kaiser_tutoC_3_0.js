/*
 * 狂龙剧情 - 15
 * 地图：万神殿东部地区 - 东侧圣殿 (940001230)
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
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.npc_ChangeController(3000142, -100, 220, 0);//C1 13 87 01
        ms.npc_SetSpecialAction(3000142, "summon");
        ms.npc_ChangeController(3000139, -150, 220, 0);//C2 13 87 01
        ms.npc_SetSpecialAction(3000139, "summon");
        ms.npc_ChangeController(3000114, 50, 220, 1);//7D 12 87 01
        ms.npc_SetSpecialAction(3000114, "summon");
        ms.npc_ChangeController(3000111, 120, 220, 1);//7E 12 87 01
        ms.npc_SetSpecialAction(3000111, "summon");
        ms.npc_ChangeController(3000115, 190, 220, 1);//7F 12 87 01
        ms.npc_SetSpecialAction(3000115, "summon");
        ms.sendNextNoESC("呃……怎么回事……", 3000114);
    } else if (status === i++) {
        ms.sendNextNoESC("那小家伙怎么会变化？", 3000111);
    } else if (status === i++) {
        ms.sendNextNoESC("看起来好危险……", 3000114);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/BalloonMsg0/2", 1200, 0, -200, 1, 0, 1, 3000142, 0, 0);
        ms.npc_SetSpecialAction(3000142, "DKgigaSlasher", 1);
        ms.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121201/effect", 0, 0, 0);
        ms.fieldEffect_PlayFieldSound("Kaiser/61121100");
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(3000114, "die1", 1);
        ms.npc_SetSpecialAction(3000111, "die1", 1);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.npc_LeaveField(3000114);
        ms.npc_LeaveField(3000111);
        ms.sendNextNoESC("这……这不可能啊……", 3000115);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.inGameDirectionEvent_AskAnswerTime(1950);
    } else if (status === i++) {
        ms.npc_LeaveField(3000142);
        ms.npc_LeaveField(3000139);
        ms.npc_LeaveField(3000115);
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940001240, 0);
    } else {
        ms.dispose();
    }
}