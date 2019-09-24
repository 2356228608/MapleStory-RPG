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
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(2159381, "oid=8037957", -1700, 20, 0);
ms.npc_SetSpecialAction("oid=8037957", "summon", 0, 0);
ms.npc_ChangeController(2159384, "oid=8037958", -1600, 20, 0);
ms.npc_SetSpecialAction("oid=8037958", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 2159381,  "通过这个走廊，就是机库。通过那里之后，就能到达外面了。但是一路上到处都是警卫机器人。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159381,  "我会想办法的。别担心。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159384,  "刚才这位朋友说会成为累赘。老实说，我刚才掉进陷阱的时候手臂受了伤，没办法帮你。真的没关系吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159384,  "没关系。我会想办法的。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037957",1,2200,100);
ms.npc_SetForceMove("oid=8037958",1,2200,100);
ms.inGameDirectionEvent_AskAnswerTime(2100);
} else if (status === i++) {
ms.playerMessage(-1, "持续按CTRL键，可以攻击。请先击退挡住去路的怪物。");
ms.setInGameDirectionMode(false, true, false);
ms.spawnMob(9300682, -1000, 32);
ms.spawnMob(9300682, -700, 32);
ms.spawnMob(9300682, -400, 32);
ms.spawnMob(9300682, -100, 32);
ms.spawnMob(9300682, 200, 32);
ms.dispose();
    } else {
        ms.dispose();
    }
}
