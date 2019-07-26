/*
 * 狂龙剧情 - 14
 * 地图：秘密地图 - 狂龙战士觉醒 (940002020)
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
        ms.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene1");
        ms.inGameDirectionEvent_AskAnswerTime(7200);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940001230, 0);
    } else {
        ms.dispose();
    }
}