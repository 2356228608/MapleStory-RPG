/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
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
cm.forceCompleteQuest(23203);
var newStatus = cm.getQuestRecord(23203);newStatus.setStatus(0);
cm.getPlayer().updateQuest(newStatus, true);
cm.npc_ChangeController(2159309, "oid=12833896", 500, 50, 1);
cm.npc_SetSpecialAction("oid=12833896", "summon", 0, 0);
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, true, false);
cm.inGameDirectionEvent_MoveAction(2);
cm.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
cm.curNodeEventEnd(true);
cm.inGameDirectionEvent_MoveAction(0);
cm.onScriptMessage(3, 0, 1, 2159308,  "你的实力总是让我大吃一惊啊…其实这不是个很好的机会吗？我一直都想和军团长一决高下。来，比比你的气场和我的魔法谁更强！ ", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice.img/DemonSlayertutorial_B/4", 100);
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/9", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_OneTimeAction(376, 0);
cm.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121000/effect", 0, 338, 83, 1, 0, 1, 0, 1, 0);
cm.fieldEffect_PlayFieldSound("demonSlayer/31121000", 100);
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/9", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1000, 0, -150, 1, 0, 1, "oid=12833896", 0, 0);
cm.fieldEffect_PlayFieldSound("demonSlayer/31121000h", 100);
cm.npc_SetSpecialAction("oid=12833896", "teleportation", 0, 1);
cm.inGameDirectionEvent_AskAnswerTime(570);
} else if (status === i++) {
cm.npc_LeaveField("oid=12833896");
cm.npc_ChangeController(2159309, "oid=12833953", 620, 50, 1);
cm.npc_SetSpecialAction("oid=12833953", "summon", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159308,  "挺有本事的嘛…有意思，哈哈哈哈！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice.img/DemonSlayertutorial_B/5", 100);
cm.npc_SetSpecialAction("oid=12833953", "resolve", 0, 1);
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/10", 2000, 0, -150, 1, 0, 1, "oid=12833953", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/11", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121005/effect", 0, 338, 71, 1, 1, 1, 0, 0, 1);
cm.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121005/effect0", 0, 338, 71, 1, -1, 1, 0, 0, 1);
cm.fieldEffect_PlayFieldSound("demonSlayer/31121005", 100);
cm.inGameDirectionEvent_OneTimeAction(370, 0);
cm.inGameDirectionEvent_AskAnswerTime(1980);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/gateOpen/0", 2100, 918, -195, 1, 0, 1, 0, 1, 0);
cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/gateLight/0", 2100, 926, -390, 1, 0, 1, 0, 1, 0);
cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/gateStair/0", 2100, 879, 30, 1, 1, 1, 0, 1, 0);
cm.fieldEffect_PlayFieldSound("demonSlayer/openGate", 100);
cm.inGameDirectionEvent_AskAnswerTime(1950);
} else if (status === i++) {
cm.forceStartQuest(23203, "");
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg0/0", 2000, 0, -150, 1, 0, 1, "oid=12833953", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159308,  "…哦哦，黑魔法师大人要亲自会会你了。虽然可惜，但今天就到此为止吧。我要去给那些叫英雄的家伙们露露脸了。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice.img/DemonSlayertutorial_B/6", 100);
cm.onScriptMessage(3, 0, 1, 2159308,  "我应该不用再见到你了，#h0#。能被大人亲手杀死，这是你的荣耀！哈哈哈哈！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice.img/DemonSlayertutorial_B/7", 100);
cm.npc_SetSpecialAction("oid=12833953", "teleportation", 0, 1);
cm.inGameDirectionEvent_AskAnswerTime(570);
} else if (status === i++) {
cm.npc_LeaveField("oid=12833953");
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg2/2", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_MoveAction(2);
cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
cm.inGameDirectionEvent_AskAnswerTime(1950);
} else if (status === i++) {
cm.forceCompleteQuest(23203);
var newStatus = cm.getQuestRecord(23203);newStatus.setStatus(0);
cm.getPlayer().updateQuest(newStatus, true);
cm.curNodeEventEnd(true);
ms.dispose();
ms.warp(931050300, 0);
    }
}

