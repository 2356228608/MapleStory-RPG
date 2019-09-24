/*
 * 恶魔剧情 - 18
 * 地图：秘密地图 - 能量提取场1 (931050000)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true);
        ms.setStandAloneMode(true);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text12");
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(10);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("……");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/14", 2000, 130, 50, 1, 10, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextSNoESC("(……好像……听到了什么声音……)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/15", 2000, -100, 50, 1, 10, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextSNoESC("(这是哪里……我还活着吗？)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/16", 2000, 130, 50, 1, 10, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextSNoESC("(呃……力量在消失……好像有什么在吸走我的力量……)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/17", 2000, -100, 50, 1, 10, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextSNoESC("(它们在吸走我的力量……？快从这里出去！)");
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("demonSlayer/punch");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/7", 2000, 130, 100, 1, 10, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("demonSlayer/punch");
        ms.fieldEffect_PlayFieldSound("demonSlayer/crackEgg");
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/breakEgg/0", 3600, 0, 0, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/1", 2000, -100, 50, 1, 10, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("demonSlayer/punch");
        ms.fieldEffect_PlayFieldSound("demonSlayer/crackEgg");
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/breakEgg/1", 3600, 0, 0, 1, 1, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/2", 2000, 130, 50, 1, 10, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("demonSlayer/punch");
        ms.fieldEffect_PlayFieldSound("demonSlayer/crackEgg");
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/breakEgg/2", 9000, 0, 0, 1, 5, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("demonSlayer/breakEgg");
        ms.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.warp(931050020, 0);
        ms.dispose();
    }
}