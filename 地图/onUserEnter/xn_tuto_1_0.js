/*  This source is made by BMS Team
 *  脚本功能：[新手任务]尖兵计划系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.inGameDirectionEvent_SetHideEffect(1);
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(2159369, "oid=8036972", -1050, -30, 1);
ms.npc_SetSpecialAction("oid=8036972", "summon", 0, 0);
ms.npc_ChangeController(2159376, "oid=8036973", -1800, -30, 0);
ms.npc_SetSpecialAction("oid=8036973", "summon", 0, 0);
ms.npc_SetForceMove("oid=8036972",-1,300,100);
ms.inGameDirectionEvent_PushMoveInfo(0, 80, -1600, -34);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(6870);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg0/2", 900, 0, -120, 1, 0, 1, "oid=8036972", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(810);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159369,  "那个爷爷是谁啊？好像不是村里人。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/6", 900, 0, -120, 1, 0, 1, "oid=8036973", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(810);
} else if (status === i++) {
ms.npc_ChangeController(2159422, "oid=8037002", -1450, -30, 0);
ms.npc_SetSpecialAction("oid=8037002", "summon", 0, 0);
ms.npc_ChangeController(2159422, "oid=8037003", -1350, -30, 1);
ms.npc_SetSpecialAction("oid=8037003", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 1200, 0, -120, 1, 0, 1, "oid=8036972", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_ChangeController(2159371, "oid=8037053", -1400, -30, 1);
ms.npc_SetSpecialAction("oid=8037053", "summon", 0, 0);
ms.npc_LeaveField("oid=8036972");
ms.npc_LeaveField("oid=8037002");
ms.npc_LeaveField("oid=8037003");
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159376,  "呵呵……没想到在这种地方发现了。跑了这么多村庄，看来是值得的。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/8", 1200, 0, -120, 1, 0, 1, "oid=8036973", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8036973",-1,300,100);
ms.npc_SetForceMove("oid=8037053",-1,300,100);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_ChangeController(2159372, "oid=8037071", -500, -30, 1);
ms.npc_SetSpecialAction("oid=8037071", "summon", 0, 0);
ms.npc_SetForceMove("oid=8037071",-1,200,100);
ms.inGameDirectionEvent_PushMoveInfo(0, 150, -950, -34);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(4335);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037071",1,1,100);
ms.inGameDirectionEvent_AskAnswerTime(90);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037071",-1,1,100);
ms.inGameDirectionEvent_AskAnswerTime(90);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037071",1,1,100);
ms.inGameDirectionEvent_AskAnswerTime(90);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037071",-1,1,100);
ms.inGameDirectionEvent_AskAnswerTime(90);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159372,  "#h0#已经回家了吗？我还想把之前借的短剑还给他呢……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159372,  "看来只能明天再说了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037071",1,100,100);
ms.inGameDirectionEvent_AskAnswerTime(150);
} else if (status === i++) {
ms.npc_LeaveField("oid=8036973");
ms.npc_LeaveField("oid=8037053");
ms.npc_LeaveField("oid=8037071");
ms.dispose();
ms.warp(931060080, 0);
    } else {
        ms.dispose();
    }
}
