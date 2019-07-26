/*
 * 狂龙剧情 - 07
 * 地图：940001150
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
        ms.resetForcedStat();
        ms.npc_ChangeController(3000131, -390, 170, 1);//AF 08 87 01
        ms.npc_SetSpecialAction(3000131, "summon");
        ms.npc_ChangeController(3000122, -750, 170, 1);
        ms.npc_SetSpecialAction(3000122, "summon");
        ms.npc_ChangeController(3000125, -650, 170, 1);
        ms.npc_SetSpecialAction(3000125, "summon");
        ms.npc_ChangeController(3000123, -550, 170, 1);
        ms.npc_SetSpecialAction(3000123, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(473, 0);
        ms.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121100/effect", 0, 0, 0);
        ms.fieldEffect_PlayFieldSound("Kaiser/61121100");
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(3000122, "die1", 1);
        ms.npc_SetSpecialAction(3000125, "die1", 1);
        ms.npc_SetSpecialAction(3000123, "die1", 1);
        ms.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, 3000122, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, 3000125, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, 3000123, 0, 0);
        ms.effect_Voice("Skill.img/61121100/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.npc_LeaveField(3000122);
        ms.npc_LeaveField(3000125);
        ms.npc_LeaveField(3000123);
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, -650, 178);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1002);
    } else if (status === i++) {
        ms.sendNextNoESC("了不起，真是令人惊叹的实力，狂龙战士。你已经消灭多少个了？我看再来几个就能凑个整数啦？", 3000131);
    } else if (status === i++) {
        ms.sendNextSNoESC("下面该轮到你了，麦格纳斯。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(0);
    } else if (status === i++) {
        ms.npc_ChangeController(3000128, -750, 170, 1);//C4 08 87 01
        ms.npc_SetSpecialAction(3000128, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.npc_ChangeController(3000129, -650, 170, 1);//C5 08 87 01
        ms.npc_SetSpecialAction(3000129, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.npc_ChangeController(3000130, -550, 170, 1);//C6 08 87 01
        ms.npc_SetSpecialAction(3000130, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 450, -650, 178);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(666);
    } else if (status === i++) {
        ms.sendNextNoESC("还有很多幽灵呢，别着急啊。啊，是因为你寿命将尽了？", 3000131);
    } else if (status === i++) {
        ms.sendNextSNoESC("瞧你躲在这些靠着向达勒摩尔臣服获得的部下背后的小样儿，畏首畏尾，哪里还有一个战士的气势。");
    } else if (status === i++) {
        ms.sendNextNoESC("嘿嘿，你尽管可以当成是我的恶趣味啊。我还想再欣赏一下你像个落水狗一样拼死挣扎的模样呢。", 3000131);
    } else if (status === i++) {
        ms.sendNextNoESC("别担心，最后关头我肯定亲手送你上黄泉路。今天我就要看看会不断转生的狂龙战士是如何被打败的，哈哈哈哈。", 3000131);
    } else if (status === i++) {
        ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
        ms.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextSNoESC("(毒素扩散得很快。只能速战速决了吗？情况很不妙，但如果在这里倒下，就辜负了狂龙战士这个称号。)");
    } else if (status === i++) {
        ms.sendNextNoESC("哪怕你家伙死了重新转生，肯定比现在的你更弱。等你转生后重新恢复现在的水平，所有事情早就大局已定。", 3000131);
    } else if (status === i++) {
        ms.sendNextSNoESC("婆婆妈妈，不像你的风格啊，麦格纳斯。来跟我一决死战吧。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/Effect/0", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.npc_ChangeController(3000142, -900, 170, 0);//1A 0A 87 01
        ms.npc_SetSpecialAction(3000142, "summon");
        ms.sendNextNoESC("嘿嘿，我等的就是这个，你正在担心是否毒素已经扩散到让你无法变身了吧，哈哈。我这就灭了你，然后登上诺巴最强战士的宝座！", 3000131);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        ms.npc_LeaveField(3000131);
        ms.npc_LeaveField(3000128);
        ms.npc_LeaveField(3000129);
        ms.npc_LeaveField(3000130);
        ms.npc_LeaveField(3000142);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(940002030, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}