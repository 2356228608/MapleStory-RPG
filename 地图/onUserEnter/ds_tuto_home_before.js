/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
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
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(90);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text11");
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene2", 0, 0, 0);
ms.dispose();
    }
}

