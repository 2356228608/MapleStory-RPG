/*  This source is made by BMS Team
 *  脚本功能：[新手任务]尖兵计划系列remake
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
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(2159377, "oid=8037103", -200, 50, 0);
ms.npc_SetSpecialAction("oid=8037103", "summon", 0, 0);
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/doorOpen", 0, -15, 2, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/8", 1200, 0, -120, 1, 0, 1, "oid=8037103", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/9", 1200, 0, -120, 1, 0, 1, "oid=8037103", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/10", 1200, 30, -250, 1, 0, 1, "oid=8037103", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/8", 1200, 0, -120, 1, 0, 1, "oid=8037103", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/7", 1200, 0, -250, 1, 0, 1, "oid=8037103", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_LeaveField("oid=8037103");
ms.dispose();
ms.warp(931060081, 0);
    } else {
        ms.dispose();
    }
}
