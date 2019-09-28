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
ms.forceStartQuest(23206, "2");
ms.forceStartQuest(11620, "0");
ms.updateInfoQuest(15710, "lasttime=19/09/22/15/01");
ms.updateInfoQuest(25980, "normal=#");
ms.updateInfoQuest(25980, "normal=#;hard=#");
ms.forceStartQuest(11620, "0");
ms.forceStartQuest(11620, "0");
ms.forceStartQuest(11620, "0");
ms.forceStartQuest(11620, "0");
ms.forceStartQuest(11620, "0");
ms.forceStartQuest(11620, "0");
ms.forceStartQuest(11620, "0");
ms.forceStartQuest(11620, "0");
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.fieldEffect_ScreenMsg("demonSlayer/text12");
ms.inGameDirectionEvent_AskAnswerTime(5000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(10);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 2159311,  "........", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/14", 2000, 130, 50, 1, 10, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "(……好像……听到了什么声音……)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/15", 2000, -130, 50, 1, 10, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "(这是哪里……我还活着吗？)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/16", 2000, 130, 50, 1, 10, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "(呃……力量在消失……好像有什么在吸走我的力量……)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/17", 2000, -130, 50, 1, 10, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "(它们在吸走我的力量……？快从这里出去！)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/7", 2000, 130, 100, 1, 10, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
ms.fieldEffect_PlayFieldSound("demonSlayer/crackEgg", 100);
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/breakEgg/0", 3600, 0, 0, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/1", 2000, -130, 50, 1, 10, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
ms.fieldEffect_PlayFieldSound("demonSlayer/crackEgg", 100);
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/breakEgg/1", 3600, 0, 0, 1, 1, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/2", 2000, 130, 50, 1, 10, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
ms.fieldEffect_PlayFieldSound("demonSlayer/crackEgg", 100);
ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/breakEgg/2", 9000, 0, 0, 1, 5, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("demonSlayer/breakEgg", 100);
ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
ms.dispose();
ms.warp(931050020, 0);
    }
}