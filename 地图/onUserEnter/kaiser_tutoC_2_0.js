/*
 * 狂龙剧情 - 13
 * 地图：万神殿东部地区 - 东侧圣殿 (940001220)
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
        ms.npc_ChangeController(3000139, -150, 220, 0);//7B 12 87 01
        ms.npc_SetSpecialAction(3000139, "summon");
        
        ms.npc_ChangeController(3000110, -20, 220, 1);//7C 12 87 01
        ms.npc_SetSpecialAction(3000110, "summon");
        ms.npc_ChangeController(3000114, 50, 220, 1);//7D 12 87 01
        ms.npc_SetSpecialAction(3000114, "summon");
        ms.npc_ChangeController(3000111, 120, 220, 1);//7E 12 87 01
        ms.npc_SetSpecialAction(3000111, "summon");
        ms.npc_ChangeController(3000115, 190, 220, 1);//7F 12 87 01
        ms.npc_SetSpecialAction(3000115, "summon");
        ms.sendNextNoESC("哪里跑来的小毛孩竟敢坏我们的事！", 3000110);
    } else if (status === i++) {
        ms.sendNextSNoESC("迪奥！！！醒醒！！");
    } else if (status === i++) {
        ms.sendNextNoESC("这帮小家伙真是找死，已经被他们俩看见我们的行动，不能放过，杀了他们！", 3000110);
    } else if (status === i++) {
        ms.sendNextNoESC("你以为我会那么容易被你打败吗！！", 3000110);
    } else if (status === i++) {
        ms.sendNextNoESC("你一个人难道还能上天入地了不成！！", 3000114);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/0", 1200, 0, -100);
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_OneTimeAction(450, 0);
        ms.fieldEffect_PlayFieldSound("Kaiser/61001101");
        ms.inGameDirectionEvent_Effect("Skill/6100.img/skill/61001101/effect", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/5", 1200, 0, -140, 1, 0, 1, 3000110, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(3000110, "die1", 1);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.npc_LeaveField(3000110);
        ms.sendNextNoESC("嚣……嚣张得很嘛，受死吧！", 3000114);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(3000114, "attack1", 1);
        ms.npc_SetSpecialAction(3000115, "attack1", 1);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Npc/3000114.img/hit", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/6", 1200, 0, -100);
        ms.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene2");
        ms.inGameDirectionEvent_AskAnswerTime(900);
        //ms.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene2");
    } else if (status === i++) {
        ms.sendNextNoESC("呃……怎么还有这种愣小子。", 3000111);
    } else if (status === i++) {
        ms.sendNextNoESC("竟然吃了他一招，不能留活口，杀了他们！", 3000114);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/Effect/0", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.inGameDirectionEvent_AskAnswerTime(1950);
    } else if (status === i++) {
        ms.npc_LeaveField(3000139);
        ms.npc_LeaveField(3000114);
        ms.npc_LeaveField(3000111);
        ms.npc_LeaveField(3000115);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940002020, 0);
    } else {
        ms.dispose();
    }
}