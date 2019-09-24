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
ms.inGameDirectionEvent_SetHideEffect(1);
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.fieldEffect_ScreenMsg("kaiser/text0");
ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
ms.dispose();
ms.warp(931050920, 0);
    } else {
        ms.dispose();
    }
}
