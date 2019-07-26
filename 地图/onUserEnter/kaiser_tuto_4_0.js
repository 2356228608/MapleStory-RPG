/*
 * 狂龙剧情 - 06
 * 地图：秘密地图 - 赫里希安外围 (940001110)
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
        ms.setForcedStat();
        ms.npc_ChangeController(3000131, -390, 170, 1);//9A 04 87 01
        ms.npc_SetSpecialAction(3000131, "summon");
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, -650, 170);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(999);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextSNoESC("竟然是你这家伙把赫里希安双手奉给了达勒摩尔！！你干出这等恶事，还有脸说自己是诺巴族人吗？！");
    } else if (status === i++) {
        ms.sendNextSNoESC("评议会和诺巴族人救了你，你竟然以怨报德……我决不能原谅你！");
    } else if (status === i++) {
        ms.sendNextNoESC("说的也是，你这种天才怎么会理解我的苦衷呢。我想变得更强大，而只有达勒摩尔才能实现我的愿望。", 3000131);
    } else if (status === i++) {
        ms.sendNextSNoESC("虽然不知道你从他那里获得了什么力量，可你觉得自己能赢得了我吗！这点小伤口对我来说算不得什么！");
    } else if (status === i++) {
        ms.sendNextNoESC("头脑冷静的狂龙战士看来有点搞不清状况啊，我这就给你分析分析。", 3000131);
    } else if (status === i++) {
        ms.sendNextNoESC("首先呢，我的确从达勒摩尔那里获得了新的力量，但对付诺巴守护神的你，恐怕还不够。但我会傻到直接跟你对敌吗？你太天真了。", 3000131);
    } else if (status === i++) {
        ms.sendNextNoESC("你以为刚刚受的伤只是条小伤痕吧，错，我早已在刚刚的一击内渗入了致命的毒。虽然不能置你于死地，但足够抑制你大部分的力量了。", 3000131);
    } else if (status === i++) {
        ms.sendNextSNoESC("……既然如此，我只要在毒素扩散之前灭了你就行了。");
    } else if (status === i++) {
        ms.sendNextNoESC("哈哈哈，你以为你会如意吗？赫里希安已经落入达勒摩尔手中。就在此处，数万个幽灵听我的指挥。哪怕你还像平时一样健康，也孤身难敌众手！", 3000131);
    } else if (status === i++) {
        ms.sendNextNoESC("不较量一下怎么知道谁能笑到最后。", 3000131);
    } else if (status === i++) {
        ms.npc_ChangeController(3000122, -750, 170, 1);//FD 05 87 01
        ms.npc_SetSpecialAction(3000122, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.npc_ChangeController(3000125, -650, 170, 1);//FE 05 87 01
        ms.npc_SetSpecialAction(3000125, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.npc_ChangeController(3000123, -550, 170, 1);//FF 05 87 01
        ms.npc_SetSpecialAction(3000123, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 450, -1250, 170);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.npc_ChangeController(3000126, -1150, 170, 0);//04 06 87 01
        ms.npc_SetSpecialAction(3000126, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.npc_ChangeController(3000124, -1250, 170, 0);//05 06 87 01
        ms.npc_SetSpecialAction(3000124, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.npc_ChangeController(3000127, -1350, 170, 0);//06 06 87 01
        ms.npc_SetSpecialAction(3000127, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
        ms.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/BalloonMsg2/0", 0, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 450, -650, 170);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(648);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(3000131, "alert");
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/BalloonMsg1/2", 0, 0, -150, 1, 0, 1, 3000131, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.npc_LeaveField(3000122);
        ms.npc_LeaveField(3000123);
        ms.npc_LeaveField(3000124);
        ms.npc_LeaveField(3000125);
        ms.npc_LeaveField(3000126);
        ms.npc_LeaveField(3000127);
        
        ms.mob_EnterField(9300547, -750, 178);
        ms.mob_EnterField(9300548, -650, 178);
        ms.mob_EnterField(9300547, -550, 178);
        ms.mob_EnterField(9300548, -1150, 178);
        ms.mob_EnterField(9300547, -1250, 178);
        ms.mob_EnterField(9300548, -1350, 178);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/0");
        ms.dispose();
    } else {
        ms.dispose();
    }
}