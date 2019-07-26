/*
 * 超能力者剧情 - 01
 * 地图：大道 - 街心 (331001100)
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
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent(14, 0);
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.playVideoByScript("Kinesis1.avi");
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 4830, -620);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kinesis/signal");
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1400);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushScaleInfo(10000, 1000, 10000, 4450, -620);
    } else if (status === i++) {
        //ms.setSpineBackEffect(["city", "day2night"], [2, 0]);
        ms.setSpineObjectEffect(["city", "day2night"], [2, 0]);
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        //ms.fieldEffect_ProcessOnOffLayer("title", "Map/Effect2.img/kinesis/title", 0, 3000, 0, 0, 40, 4, 0);
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.fieldEffect_ProcessOnOffLayer("title", "", 2, 2000, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(3000);
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#2017年，都市", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushScaleInfo(8000, 1000, 8000, -162, 264);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(8000);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(331001110, 0);
    } else {
        ms.dispose();
    }
}