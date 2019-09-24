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
ms.setInGameDirectionMode(true, true);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "这样跑出来了，可是父亲在哪里？", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "好奇怪喔！那是什么？怎么会有这么丑陋的东西出现？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg9/1", 2000, 2000, -200, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "那个声音是!父亲，是父亲的声音!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.setStandAloneMode(false);
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
ms.forceCompleteQuest(52403);
} else {
ms.dispose();
    }
}