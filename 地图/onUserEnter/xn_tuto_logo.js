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
ms.updateInfoQuest(26900, "sf=0;mt=1;al=1;id=0");
ms.updateInfoQuest(26902, "");
ms.updateInfoQuest(26903, "");
ms.updateInfoQuest(26904, "");
ms.updateInfoQuest(26905, "");
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_SetHideEffect(1);
ms.inGameDirectionEvent_AskAnswerTime(100);
ms.teachSkill(30021238, 1, 1);  //刀锋之舞
    } else if (status === i++) {
ms.updateInfoQuest(16119, "");
ms.updateInfoQuest(16150, "");
ms.updateInfoQuest(27039, "");
ms.updateInfoQuest(14756, "d=19/09/21/16/17");
ms.updateInfoQuest(14755, "");
ms.updateInfoQuest(52998, "");
ms.updateInfoQuest(65132, "");
ms.updateInfoQuest(26015, "");
ms.updateInfoQuest(26011, "");
ms.effect_Direction("Effect/Direction12.img/XenonTutorial/SceneLogo", 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(6300);
    } else if (status === i++) {
ms.dispose();
ms.warp(931050900, 0);

    } else {
        ms.dispose();
    }
}
