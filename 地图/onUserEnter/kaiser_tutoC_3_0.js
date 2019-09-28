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
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_SetHideEffect(1);
ms.npc_ChangeController(3000142, "oid=9817636", -100, 220, 0);
ms.npc_SetSpecialAction("oid=9817636", "summon", 0, 0);
ms.npc_ChangeController(3000139, "oid=9817637", -150, 220, 0);
ms.npc_SetSpecialAction("oid=9817637", "summon", 0, 0);
ms.npc_ChangeController(3000114, "oid=9817638", 70, 220, 1);
ms.npc_SetSpecialAction("oid=9817638", "summon", 0, 0);
ms.npc_ChangeController(3000111, "oid=9817639", 130, 220, 1);
ms.npc_SetSpecialAction("oid=9817639", "summon", 0, 0);
ms.npc_ChangeController(3000115, "oid=9817640", 250, 220, 1);
ms.npc_SetSpecialAction("oid=9817640", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000114,  "呃……怎么回事……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 3000111,  "那小家伙怎么会变化？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000114,  "看起来好危险……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg0/2", 1200, 0, -200, 1, 0, 1, "oid=9817636", 0, 0);
ms.npc_SetSpecialAction("oid=9817636", "DKgigaSlasher", 0, 1);
ms.inGameDirectionEvent_Effect( "Skill/6112.img/skill/61121201/effect", 0, 0, 0, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.fieldEffect_PlayFieldSound("Kaiser/61121100", 100);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=9817638", "die1", 0, 1);
ms.npc_SetSpecialAction("oid=9817639", "die1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_LeaveField("oid=9817638");
ms.npc_LeaveField("oid=9817639");
ms.onScriptMessage(3, 0, 1, 3000115,  "这……这不可能啊……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
ms.inGameDirectionEvent_AskAnswerTime(1950);
} else if (status === i++) {
ms.inGameDirectionEvent_SetHideEffect(0);
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9817636");
ms.npc_LeaveField("oid=9817637");
ms.npc_LeaveField("oid=9817640");
ms.dispose();
ms.warp(940001240, 0);
    }
}