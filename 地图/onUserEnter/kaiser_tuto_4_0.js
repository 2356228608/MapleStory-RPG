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
ms.npc_ChangeController(3000131, "oid=9815006", -390, 170, 1);
ms.npc_SetSpecialAction("oid=9815006", "summon", 0, 0);
ms.inGameDirectionEvent_PushMoveInfo(0, 300, -600, 170);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_AskAnswerTime(999);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2", 0, 0, 0);
ms.onScriptMessage(3, 0, 1, 3000131,  "竟然是你这家伙把赫里希安双手奉给了达勒摩尔！！你干出这等恶事，还有脸说自己是诺巴族人吗？！", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "评议会和诺巴族人救了你，你竟然以怨报德……我决不能原谅你！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "说的也是，你这种天才怎么会理解我的苦衷呢。我想变得更强大，而只有达勒摩尔才能实现我的愿望。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "虽然不知道你从他那里获得了什么力量，可你觉得自己能赢得了我吗！这点小伤口对我来说算不得什么！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "头脑冷静的狂龙战士看来有点搞不清状况啊，我这就给你分析分析。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "首先呢，我的确从达勒摩尔那里获得了新的力量，但对付诺巴守护神的你，恐怕还不够。但我会傻到直接跟你对敌吗？你太天真了。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "你以为刚刚受的伤只是条小伤痕吧，错，我早已在刚刚的一击内渗入了致命的毒。虽然不能置你于死地，但足够抑制你大部分的力量了。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "……既然如此，我只要在毒素扩散之前灭了你就行了。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "哈哈哈，你以为你会如意吗？赫里希安已经落入达勒摩尔手中。就在此处，数万个幽灵听我的指挥。哪怕你还像平时一样健康，也孤身难敌众手！", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "不较量一下怎么知道谁能笑到最后。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_ChangeController(3000125, "oid=9815200", -750, 170, 1);
ms.npc_SetSpecialAction("oid=9815200", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000122, "oid=9815201", -650, 170, 1);
ms.npc_SetSpecialAction("oid=9815201", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000125, "oid=9815202", -550, 170, 1);
ms.npc_SetSpecialAction("oid=9815202", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 450, -1300, 170);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(1526);
} else if (status === i++) {
ms.npc_ChangeController(3000122, "oid=9815204", -1150, 170, 0);
ms.npc_SetSpecialAction("oid=9815204", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000125, "oid=9815219", -1250, 170, 0);
ms.npc_SetSpecialAction("oid=9815219", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000122, "oid=9815220", -1350, 170, 0);
ms.npc_SetSpecialAction("oid=9815220", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000125, "oid=9815235", -1450, 170, 0);
ms.npc_SetSpecialAction("oid=9815235", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000122, "oid=9815236", -1550, 170, 0);
ms.npc_SetSpecialAction("oid=9815236", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.npc_ChangeController(3000125, "oid=9815285", -1650, 170, 0);
ms.npc_SetSpecialAction("oid=9815285", "summon", 0, 0);
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
ms.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2", 0, 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg2/0", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 450, -600, 170);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(587);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=9815006", "alert", 0, 1);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg1/2", 0, 0, -130, 1, 0, 1, "oid=9815006", 0, 0);
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
ms.setInGameDirectionMode(false, true, false);
ms.fieldEffect_ScreenMsg("lightning/screenMsg/0");
ms.npc_LeaveField("oid=9815006");
        ms.dispose();
    } else {
        ms.dispose();
    }
}