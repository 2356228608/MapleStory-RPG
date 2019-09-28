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
ms.setInGameDirectionMode(true, true, false);
ms.forceStartQuest(11620, "0");
ms.updateInfoQuest(15710, "lasttime=19/09/22/17/25");
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
ms.forceStartQuest(25807, "1");
while (ms.getLevel() < 10) {ms.levelUp();}
ms.teachSkill(60001229, -1, 0); //怒雷屠龙斩
ms.teachSkill(60001216, 1, 1);  //模式转换：防御模式
ms.teachSkill(60001217, 1, 1);  //模式转换：攻击模式
ms.teachSkill(60001218, 1, 1);  //垂直连接
ms.teachSkill(60000219, 1, 1);  //变身
ms.teachSkill(60001225, 1, 1);  //命令
ms.teachSkill(61001000, 1, 20); //飞龙斩
ms.teachSkill(61001101, 1, 20); //烈火箭
ms.funckeySetByScript(1, 60001225, 0x2A);
ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
ms.curNodeEventEnd(true);
ms.gainItem(1142484, 1);
ms.forceStartQuest(29987, "");
ms.forceCompleteQuest(29987);
ms.fieldEffect_ScreenMsg("kaiser/text0");
ms.inGameDirectionEvent_AskAnswerTime(4200);
    } else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.dispose();
ms.warp(940001200, 0);
    }
}

