/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]狂龙战士系列remake
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
ms.inGameDirectionEvent_AskAnswerTime(7200);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene0", 0, 0, 0);
ms.setInGameDirectionMode(false, true, false);
ms.dispose();
ms.warp(940001110, 0);
    } else {
        ms.dispose();
    }
}