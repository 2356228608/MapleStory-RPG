/*
 * 夜光剧情 - 18
 * 地图：秘密地图 - 幸福的日夜 (910141050)
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
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene1");
        ms.inGameDirectionEvent_AskAnswerTime(10000);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(910141010, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
