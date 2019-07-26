/*
 * 隐月剧情 - 09
 * 地图：隐藏地图 - 黑魔法师之房 (927030040)
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
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.fieldEffect_PlayFieldSound("eunwolTuto/seal");
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.effect_OnUserEff("Effect/Direction15.img/effect/tuto/seal/front");
        ms.effect_OnUserEff("Effect/Direction15.img/effect/tuto/seal/back");
        ms.fieldEffect_PlayFieldSound("eunwolTuto/particle");
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("eunwolTuto/seal_stone");
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/tuto/seal/stone", 0, 600, -310, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/tuto/seal/stone", 0, -600, -310, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/tuto/seal/stone", 0, 150, -520, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/tuto/seal/stone", 0, -150, -520, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/tuto/seal/stone", 0, 0, -81, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg0/3", 0, 200, -320, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940200000, 0);
    } else {
        ms.dispose();
    }
}