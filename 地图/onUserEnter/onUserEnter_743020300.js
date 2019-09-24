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
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/illustration/Sacrifice/0", 5000, 0, 0, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(6500);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(false, true, false);
ms.dispose();
ms.warp(743030101);
} else {
 ms.dispose();
}
}