/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    if (ms.isQuestFinished(32982) && !ms.isQuestFinished(32983)) {
        action1(mode, type, selection);
    } else {
        ms.dispose();
    }
}

function action1(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.npc_ChangeController(2560009, "oid=4093074", 430, -30, 0);
ms.npc_ChangeController(2560009, "oid=4093075", 560, -30, 0);
ms.npc_ChangeController(2560009, "oid=4093076", 690, -30, 0);
ms.npc_ChangeController(2560009, "oid=4093077", 300, -30, 0);
ms.npc_ChangeController(2560003, "oid=4093078", 939, -144, 1);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(false, false, false);
ms.onScriptMessage(3, 0, 0, 0,  "艾特！！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 0, 2560003,  "#face1#切，这些家伙的目标是花。做好战斗准备。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 0, 0,  "但是中和剂……！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 0, 2560003,  "#face1#你还不知道吗？反正那都是假的。只是对我们进行洗脑的药物而已。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 0, 0,  "怎么会？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 0, 2560003,  "#face1#好了，振作点。来了！", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.npc_LeaveField("oid=4093074");
ms.npc_LeaveField("oid=4093075");
ms.npc_LeaveField("oid=4093076");
ms.npc_LeaveField("oid=4093077");
ms.updateInfoQuest(16700, "count=300;date=20190918");
ms.updateInfoQuest(16700, "count=1;date=20190918");
ms.dispose();
    } else {
        ms.dispose();
    }
}

function action2(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {

	ms.dispose();
    } else {
        ms.dispose();
    }
}