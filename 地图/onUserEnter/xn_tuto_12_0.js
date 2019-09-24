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
ms.setInGameDirectionMode(true, false, false);
ms.npc_ChangeController(2159377, "oid=253052", -889, -311, 4);
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(2159381, "oid=6114830", -1040, 20, 0);
ms.npc_SetSpecialAction("oid=6114830", "summon", 0, 0);
ms.npc_ChangeController(2159384, "oid=6114831", -990, 20, 0);
ms.npc_SetSpecialAction("oid=6114831", "summon", 0, 0);
ms.npc_ChangeController(2159379, "oid=6114832", -780, 20, 1);
ms.npc_SetSpecialAction("oid=6114832", "summon", 0, 0);
ms.npc_ChangeController(2159385, "oid=6114833", -470, 20, 1);
ms.npc_SetSpecialAction("oid=6114833", "summon", 0, 0);
ms.npc_ChangeController(2159386, "oid=6114834", -550, 20, 1);
ms.npc_SetSpecialAction("oid=6114834", "summon", 0, 0);
ms.npc_ChangeController(2159387, "oid=6114835", -370, 20, 1);
ms.npc_SetSpecialAction("oid=6114835", "summon", 0, 0);
ms.npc_ChangeController(2159388, "oid=6114836", -620, 20, 1);
ms.npc_SetSpecialAction("oid=6114836", "summon", 0, 0);
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/17", 2400, -500, -130, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(2400);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/18", 1500, 0, -145, 1, 0, 1, "oid=6114833", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1380);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159384,  "各位！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159387,  "吉格蒙特，我来救你了。我们等回去之后再寒暄吧。啊哈！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=6114835", "shoot", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smogStart", 0, -370, 20, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1050);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smog", 3900, -370, 20, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_LeaveField("oid=6114830");
ms.npc_LeaveField("oid=6114831");
ms.npc_LeaveField("oid=6114833");
ms.npc_LeaveField("oid=6114834");
ms.npc_LeaveField("oid=6114835");
ms.npc_LeaveField("oid=6114836");
ms.inGameDirectionEvent_SetHideEffect(1);
ms.inGameDirectionEvent_AskAnswerTime(2220);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smogEnd", 0, -370, 20, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(420);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 1200, 0, -120, 1, 0, 1, "oid=6114832", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_LeaveField("oid=6114832");
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
ms.warp(931060070, 0);
    } else {
        ms.dispose();
    }
}
