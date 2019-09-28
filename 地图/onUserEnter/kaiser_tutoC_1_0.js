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
ms.npc_ChangeController(3000103, "oid=9816534", -300, 220, 0);
ms.npc_SetSpecialAction("oid=9816534", "summon", 0, 0);
ms.npc_ChangeController(3000104, "oid=9816535", -450, 220, 0);
ms.npc_SetSpecialAction("oid=9816535", "summon", 0, 0);
ms.npc_ChangeController(3000110, "oid=9816536", -120, 220, 0);
ms.npc_SetSpecialAction("oid=9816536", "summon", 0, 0);
ms.npc_ChangeController(3000114, "oid=9816537", -100, 220, 0);
ms.npc_SetSpecialAction("oid=9816537", "summon", 0, 0);
ms.npc_ChangeController(3000111, "oid=9816538", 130, 220, 1);
ms.npc_SetSpecialAction("oid=9816538", "summon", 0, 0);
ms.npc_ChangeController(3000115, "oid=9816539", 250, 220, 1);
ms.npc_SetSpecialAction("oid=9816539", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000104,  "你到底是感觉到了什么……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/3", 1200, 0, -120, 1, 0, 1, "oid=9816535", 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/3", 1200, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/4", 1200, 0, -120, 1, 0, 1, "oid=9816534", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "祭司们在做什么？话说怎么是陌生面孔呃？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "嘘！有异常，贝德罗斯！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "我知道，我也发现情况很可疑！我先去村里求援，你们好好观察这些人在做什么。要是有危险，就赶紧逃。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg0/0", 1200, 0, -120, 1, 0, 1, "oid=9816534", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "你这是什么话？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_LeaveField("oid=9816535");
ms.onScriptMessage(3, 0, 1, 3000103,  "(东侧圣殿遭到袭击了吗？那帮人想对圣物做什么手脚？)", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000110,  "拿掉圣物后，防御膜就会变弱。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000114,  "可是如果搬动圣物，会不会受到诅咒啊？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000110,  "你怎么那么迷信？这可是千载难逢的好机会！现在我们不能回头了！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000110,  "你要拿走圣物吗？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "必须阻止他们！！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetForceMove("oid=9816534",1,300,100);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 1, 0, 1, "oid=9816536", 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 1, 0, 1, "oid=9816537", 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 1, 0, 1, "oid=9816538", 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 1, 0, 1, "oid=9816539", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/7", 900, 0, -120, 1, 0, 1, "oid=9816534", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("kaiser/tear_rush");
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.npc_LeaveField("oid=9816534");
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9816536");
ms.npc_LeaveField("oid=9816537");
ms.npc_LeaveField("oid=9816538");
ms.npc_LeaveField("oid=9816539");
ms.dispose();
ms.warp(940001220, 0);
    }
}