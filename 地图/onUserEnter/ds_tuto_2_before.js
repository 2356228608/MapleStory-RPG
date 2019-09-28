/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.fieldEffect_ScreenMsg("demonSlayer/text13");
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text14");
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.dispose();
ms.warp(927000020, 0);

    }
}

