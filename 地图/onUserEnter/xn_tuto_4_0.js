/*
 * 尖兵剧情 - 06
 * 地图：931060081
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
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
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text5");
        ms.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text6");
        ms.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text7");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text8");
        ms.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text10");
        ms.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text11");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text12");
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/text13");
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.warp(931050930, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
