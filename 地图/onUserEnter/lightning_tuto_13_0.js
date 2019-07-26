/*
 * 夜光剧情 - 21
 * 地图：秘密地图 - 暴走 (910141060)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene4");
        ms.inGameDirectionEvent_AskAnswerTime(10000);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.effect_PlayMusic("MiniGame.img/Open");
        ms.warp(910141030, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
