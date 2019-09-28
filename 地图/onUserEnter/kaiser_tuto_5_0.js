/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]狂龙战士系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.npc_ChangeController(3000131, "oid=9815393", -390, 170, 1);
ms.npc_SetSpecialAction("oid=9815393", "summon", 0, 0);
ms.npc_ChangeController(3000122, "oid=9815394", -740, 170, 1);
ms.npc_SetSpecialAction("oid=9815394", "summon", 0, 0);
ms.npc_ChangeController(3000125, "oid=9815395", -640, 170, 1);
ms.npc_SetSpecialAction("oid=9815395", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_OneTimeAction(474, 0);
ms.inGameDirectionEvent_Effect( "Skill/6112.img/skill/61121100/effect", 0, 0, 0, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.fieldEffect_PlayFieldSound("Kaiser/61121100", 100);
ms.inGameDirectionEvent_AskAnswerTime(150);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=9815394", "die1", 0, 0);
ms.npc_SetSpecialAction("oid=9815395", "die1", 0, 0);
ms.inGameDirectionEvent_Effect( "Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, "oid=9815394", 0, 0);
ms.inGameDirectionEvent_Effect( "Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, "oid=9815395", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.effect_Voice("Skill.img/61121100/Hit", 100);
ms.npc_LeaveField("oid=9815394");
ms.npc_LeaveField("oid=9815395");
ms.inGameDirectionEvent_PushMoveInfo(0, 300, -600, 178);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1002);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "了不起，真是令人惊叹的实力，狂龙战士。你已经消灭多少个了？我看再来几个就能凑个整数啦？", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "下面该轮到你了，麦格纳斯。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(0);
} else if (status === i++) {
ms.npc_ChangeController(3000128, "oid=9815543", -750, 170, 1);
ms.npc_SetSpecialAction("oid=9815543", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000128, "oid=9815544", -650, 170, 1);
ms.npc_SetSpecialAction("oid=9815544", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000128, "oid=9815545", -550, 170, 1);
ms.npc_SetSpecialAction("oid=9815545", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000128, "oid=9815546", -1150, 170, 0);
ms.npc_SetSpecialAction("oid=9815546", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000128, "oid=9815547", -1250, 170, 0);
ms.npc_SetSpecialAction("oid=9815547", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000128, "oid=9815548", -1350, 170, 0);
ms.npc_SetSpecialAction("oid=9815548", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 450, -600, 178);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(666);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "还有很多幽灵呢，别着急啊。啊，是因为你寿命将尽了？", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "瞧你躲在这些靠着向达勒摩尔臣服获得的部下背后的小样儿，畏首畏尾，哪里还有一个战士的气势。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "嘿嘿，你尽管可以当成是我的恶趣味啊。我还想再欣赏一下你像个落水狗一样拼死挣扎的模样呢。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "别担心，最后关头我肯定亲手送你上黄泉路。今天我就要看看会不断转生的狂龙战士是如何被打败的，哈哈哈哈。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
ms.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2", 0, 0, 0);
ms.onScriptMessage(3, 0, 1, 3000131,  "(毒素扩散得很快。只能速战速决了吗？情况很不妙，但如果在这里倒下，就辜负了狂龙战士这个称号。)", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "哪怕你家伙死了重新转生，肯定比现在的你更弱。等你转生后重新恢复现在的水平，所有事情早就大局已定。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "婆婆妈妈，不像你的风格啊，麦格纳斯。来跟我一决死战吧。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/Effect/0", 0, 0, 0, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_SetHideEffect(1);
ms.npc_ChangeController(3000142, "oid=9815634", -900, 170, 0);
ms.npc_SetSpecialAction("oid=9815634", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000131,  "嘿嘿，我等的就是这个，你正在担心是否毒素已经扩散到让你无法变身了吧，哈哈。我这就灭了你，然后登上诺巴最强战士的宝座！", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
ms.inGameDirectionEvent_AskAnswerTime(5000);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9815393");
ms.npc_LeaveField("oid=9815543");
ms.npc_LeaveField("oid=9815544");
ms.npc_LeaveField("oid=9815545");
ms.npc_LeaveField("oid=9815546");
ms.npc_LeaveField("oid=9815547");
ms.npc_LeaveField("oid=9815548");
ms.npc_LeaveField("oid=9815634");
ms.dispose();
ms.warp(940002030, 0);
    } else {
        ms.dispose();
    }
}