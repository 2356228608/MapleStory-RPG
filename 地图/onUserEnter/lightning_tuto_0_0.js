/*
 * 夜光剧情 - 01
 * 地图：秘密地图 - 决战当日 (927020080)
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
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene0");
        ms.inGameDirectionEvent_AskAnswerTime(3300);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(927020000, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
