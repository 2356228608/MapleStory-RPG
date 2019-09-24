/*  This source is made by BMS Team
 *  脚本功能：[新手任务]龙的传人系列
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
ms.setStandAloneMode(true);
ms.setInGameDirectionMode(true, false);
ms.npc_ChangeController(9330204, "oid=7053225", 650, 3, 1);
ms.npc_SetSpecialAction("oid=7053225", "summon", 0, 0);
ms.inGameDirectionEvent_Effect("Effect/Direction5.img/mercedesInIce/merBalloon/5", 500, 0, -100, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "秀禾!!!!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "小姐", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.npc_SetSpecialAction("oid=7053225", "move", 0, 1);
ms.npc_SetForceMove("oid=7053225",-1,250,100);
ms.onScriptMessage(3, 0, 1, 9330204,  "秀禾!为什么这么晚了呢?父亲在哪里?", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "吼吼，小姐.你必须要快点闪避。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "有什么事呢！我做了恶梦心烦意乱的。这么急迫的表情。汗…", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "难道是血？哪里受伤了？父亲，父亲在哪里？", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "从现在起好好听我说。快点在这里躲好。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "不，父亲。我要找父亲。虽然不晓得有什么问题，", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "可是不是这样的情况。现在不能从正门走。快点从后门…", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "那么父亲应该会在大门!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.emotion(5, 10000);
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053225", "move", 0, 1);
ms.npc_SetForceMove("oid=7053225",1,150,100);
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9330204,  "不行的!!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "住手!我要先去找父亲!!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.setInGameDirectionMode(false, false, false);
ms.npc_LeaveField("oid=7053225");
ms.dispose();
ms.warp(743000100,0);
} else {
ms.dispose();
    }
}