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
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.fieldEffect_ScreenMsg("xenon/text1");
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text2");
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text3");
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text4");
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text5");
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text6");
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text7");
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text8");
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text10");
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text11");
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text12");
ms.inGameDirectionEvent_AskAnswerTime(5250);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("xenon/text13");
ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
ms.dispose();
ms.warp(931050930, 0);
    } else {
        ms.dispose();
    }
}
