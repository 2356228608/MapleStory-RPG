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
ms.setInGameDirectionMode(true, false, false);
ms.effect_Direction("Effect/Direction100.img/BackGroundDirection/intro6", 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
cm.setInGameDirectionMode(false, false, false);
ms.dispose();
ms.warp(743030003, 0);
} else {
 ms.dispose();
}
}