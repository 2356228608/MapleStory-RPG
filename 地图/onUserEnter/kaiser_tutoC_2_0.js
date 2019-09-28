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
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(3000139, "oid=9816880", -150, 220, 0);
ms.npc_SetSpecialAction("oid=9816880", "summon", 0, 0);
ms.npc_ChangeController(3000110, "oid=9816881", -20, 220, 1);
ms.npc_SetSpecialAction("oid=9816881", "summon", 0, 0);
ms.npc_ChangeController(3000114, "oid=9816882", 70, 220, 1);
ms.npc_SetSpecialAction("oid=9816882", "summon", 0, 0);
ms.npc_ChangeController(3000111, "oid=9816883", 130, 220, 1);
ms.npc_SetSpecialAction("oid=9816883", "summon", 0, 0);
ms.npc_ChangeController(3000115, "oid=9816884", 250, 220, 1);
ms.npc_SetSpecialAction("oid=9816884", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000110,  "哪里跑来的小毛孩竟敢坏我们的事！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000110,  "迪奥！！！醒醒！！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000110,  "这帮小家伙真是找死，已经被他们俩看见我们的行动，不能放过，杀了他们！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000110,  "你以为我会那么容易被你打败吗！！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000114,  "你一个人难道还能上天入地了不成！！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/0", 1200, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_OneTimeAction(451, 0);
ms.fieldEffect_PlayFieldSound("Kaiser/61001101", 100);
ms.inGameDirectionEvent_Effect( "Skill/6100.img/skill/61001101/effect", 0, 0, 0, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(210);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/5", 1200, 0, -120, 1, 0, 1, "oid=9816881", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(150);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=9816881", "die1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_LeaveField("oid=9816881");
ms.onScriptMessage(3, 0, 1, 3000114,  "嚣……嚣张得很嘛，受死吧！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=9816882", "attack1", 0, 1);
ms.npc_SetSpecialAction("oid=9816884", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Npc/3000114.img/hit", 0, 0, 0, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/6", 1200, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene2", 0, 0, 0);
ms.onScriptMessage(3, 0, 1, 3000111,  "呃……怎么还有这种愣小子。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000114,  "竟然吃了他一招，不能留活口，杀了他们！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/Effect/0", 0, 0, 0, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
ms.inGameDirectionEvent_AskAnswerTime(1950);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9816880");
ms.npc_LeaveField("oid=9816882");
ms.npc_LeaveField("oid=9816883");
ms.npc_LeaveField("oid=9816884");
ms.dispose();
ms.warp(940002020, 0);
    }
}